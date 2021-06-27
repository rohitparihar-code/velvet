import React, { useState } from "react";
import { Row, Table, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// import FloatingLabel from "react-bootstrap-floating-label";
import TableScrollBar from "react-table-scrollbar";
import { auth, db } from '../config/firebase';
import { useQuery, gql } from '@apollo/client';
import axios from 'axios';
import Login from "./login";

const query = gql`
   {
     getUserId
   }
`;

async function getUserId() {
  let res = await axios.get('http://localhost:8080/user');
  console.log(res.data);
  return res.data;
}
/*function CopiedContent() {
  return (
    <div class="container">
      <div class="content container-fluid bootstrap snippets bootdey">
        <div class="row row-broken">
          <div class="col-sm-3 col-xs-12">
            <div
              class="col-inside-lg decor-default chat"
              Style="overflow: hidden; outline: none;"
              tabindex="5000"
            >
              <div class="chat-users">
                <h6>Online</h6>

                <TableScrollBar rows={10}>
                  <Table responsive hover>
                    <tbody>
                      <tr>
                        <div class="user">
                          <div class="avatar">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              alt="User name"
                            />
                            <div class="status busy"></div>
                          </div>
                          <div class="name">User name</div>
                          <div class="mood">User mood</div>
                        </div>
                      </tr>
                      <tr>
                        <div class="user">
                          <div class="avatar">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              alt="User name"
                            />
                            <div class="status offline"></div>
                          </div>
                          <div class="name">User name</div>
                          <div class="mood">User mood</div>
                        </div>
                      </tr>
                      <tr>
                        <div class="user">
                          <div class="avatar">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt="User name"
                            />
                            <div class="status off"></div>
                          </div>
                          <div class="name">User name</div>
                          <div class="mood">User mood</div>
                        </div>
                      </tr>
                    </tbody>
                  </Table>
                </TableScrollBar>
              </div>
            </div>
          </div>
          <div
            class="col-sm-9 col-xs-12 chat"
            Style="overflow: hidden; outline: none;"
            tabindex="5001"
          >
            <div class="col-inside-lg decor-default">
              <div class="chat-body">
                <h6>Mini Chat</h6>
                <TableScrollBar rows={9.5}>
                  <Table responsive >
                    <tbody>
                      <tr>
                        <div class="answer left">
                          <div class="avatar">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt="User name"
                            />
                            <div class="status offline"></div>
                          </div>
                          <div class="name">Alexander Herthic</div>
                          <div class="text">
                            Lorem ipsum dolor amet, consectetur adipisicing elit
                            Lorem ipsum dolor amet, consectetur adipisicing elit
                            Lorem ipsum dolor amet, consectetur adiping elit
                          </div>
                          <div class="time">5 min ago</div>
                        </div>
                      </tr>
                      <tr>
                        <div class="answer right">
                          <div class="avatar">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              alt="User name"
                            />
                            <div class="status offline"></div>
                          </div>
                          <div class="name">Alexander Herthic</div>
                          <div class="text">
                            Lorem ipsum dolor amet, consectetur adipisicing elit
                            Lorem ipsum dolor amet, consectetur adipisicing elit
                            Lorem ipsum dolor amet, consectetur adiping elit
                          </div>
                          <div class="time">5 min ago</div>
                        </div>
                      </tr>
                      <tr>
                        <div class="answer left">
                          <div class="avatar">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt="User name"
                            />
                            <div class="status online"></div>
                          </div>
                          <div class="name">Alexander Herthic</div>
                          <div class="text">...</div>
                          <div class="time">5 min ago</div>
                        </div>
                      </tr>
                    </tbody>
                  </Table>
                </TableScrollBar>
                <div Style="padding: 1vh"></div>
                <div class="answer-add">
                  <input placeholder="Write a message" />
                  <span class="answer-btn answer-btn-1">Button1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.myid = "";
    this.state = {
      user_id: '',
      authenticated: false,
      redirect: false,
      chats: [],
      members: [],
      error: '',
      message: '',
      writeError: '',
      takeBack: false
    }
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onLeaveRoom = this.onLeaveRoom.bind(this);
  }

  componentDidMount(props) {
    let room = this.props.location.state.room;
    console.log(this.props);
    getUserId().then((user) => {
      this.setState({ user_id: user.id });
      console.log(user);
      if (user.id) {
        try {
          let chatId = `chats/${room}`;
          db.ref(chatId).on("value", snapshot => {
            let chats = [];
            snapshot.forEach((snap) => {
              chats.push(snap.val());
            });
            this.setState({ chats });
          });
          let roomId = `members/${room}`;
          db.ref(roomId).on("value", snapshot => {
            let members = [];
            snapshot.forEach((snap) => {
              members.push(snap.val());
            });
            this.setState({ members });
          });
        } catch (error) {
          this.setState({ error: error.message });
        }
      } else {
        this.setState({ redirect: true });
      }
    });
  }

  onLeaveRoom = async (e) => {
    let memberId = this.props.location.state.memberId;
    let member = db.ref(`members/${this.props.location.state.room}/${memberId}`);
    await member.remove();
    this.setState({ takeBack: true });
  }

  onKeyPress = async (e) => {
    if (e.key === 'Enter') {
      try {
        await db.ref(`chats/${this.props.location.state.room}`).push({
          content: this.state.message,
          timestamp: Date.now(),
          uid: this.state.user_id
        });
        this.setState({ message: '' });
      } catch (error) {
        this.setState({ message: '' });
        this.setState({ writeError: error.message });
      }

    }
  }

  render() {
    const { redirect, chats, user_id, takeBack, members } = this.state;
    if (redirect || takeBack)
      return <Redirect to="/" />;
    else
      return (<><div>
        <h1 className="container-fluid" Style="text-align: center; color: white">Room name - Fiesta </h1>
        <Button onClick={(e) => this.onLeaveRoom(e)}>Leave Room</Button>
        {/*<CopiedContent />*/}
        <div className="container">
          <div className="content container-fluid bootstrap snippets bootdey">
            <div className="row row-broken">
              <div className="col-sm-3 col-xs-12">
                <div
                  className="col-inside-lg decor-default chat"
                  Style="overflow: hidden; outline: none;"
                  tabindex="5000"
                >
                  <div class="chat-users">
                    <h6>Online</h6>

                    <TableScrollBar rows={10}>
                      <Table responsive hover>
                        <tbody>
                          {Array.isArray(members) && members.map((member) => {
                            return (
                              <tr>
                                <div className="user">
                                  <div className="avatar">
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                      alt="User name"
                                    />
                                    <div className="status busy"></div>
                                  </div>
                                  <div className="name">{member.uid}</div>
                                  <div className="mood">User mood</div>
                                </div>
                              </tr>
                            )
                          })}

                          {/*<tr>
                            <div class="user">
                              <div class="avatar">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                  alt="User name"
                                />
                                <div class="status offline"></div>
                              </div>
                              <div class="name">User name</div>
                              <div class="mood">User mood</div>
                            </div>
                          </tr>
                          <tr>
                            <div class="user">
                              <div class="avatar">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                  alt="User name"
                                />
                                <div class="status off"></div>
                              </div>
                              <div class="name">User name</div>
                              <div class="mood">User mood</div>
                            </div>
                          </tr>*/}
                        </tbody>
                      </Table>
                    </TableScrollBar>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-9 col-xs-12 chat"
                Style="overflow: hidden; outline: none;"
                tabindex="5001"
              >
                <div className="col-inside-lg decor-default">
                  <div className="chat-body">
                    <h6>Mini Chat</h6>
                    <TableScrollBar rows={9.5}>
                      <Table responsive >
                        <tbody>
                          {Array.isArray(chats) && chats.map((chat) => {
                            return (<tr>
                              <div className={chat.uid === user_id ? 'answer right' : 'answer left'}>
                                <div className="avatar">
                                  <img
                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt="User name"
                                  />
                                  <div className="status offline"></div>
                                </div>
                                <div className="name">Alexander Herthic</div>
                                <div className="text">
                                  {chat.content}
                                </div>
                                <div className="time">{chat.timestamp}</div>
                              </div>
                            </tr>
                            )
                          })}
                        </tbody>
                      </Table>
                    </TableScrollBar>
                    <div Style="padding: 1vh"></div>
                    <div class="answer-add">
                      <input placeholder="Write a message" id="message" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} onKeyPress={(e) => this.onKeyPress(e)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>);
  }
}

export default ChatRoom;
