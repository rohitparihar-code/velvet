import React, { useState } from "react";
import { Row, Table, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// import FloatingLabel from "react-bootstrap-floating-label";
import TableScrollBar from "react-table-scrollbar";
import { auth, db } from '../config/firebase';
import { useQuery, gql } from '@apollo/client';
import axios from 'axios';
import Login from "./login";
import timeConverter from '../utility/date';
import BASE_URL from '../config/constants';

const query = gql`
   {
     getUserId
   }
`;

async function getUserId() {
  let res = await axios.get(BASE_URL + 'user');
  console.log(res.data);
  return res.data;
}

var room_names = [
  "Global",
  "Queer",
  "NSFW",
  "Politics",
  "Help/Suggesstions",
  "Arts",
];

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
      username: '',
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
      this.setState({redirect: false});
      this.setState({ user_id: user.uid });
      this.setState({ username: user.username });
      console.log(user);
      if (user.uid) {
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
            console.log(members);
          });
        } catch (error) {
          this.setState({ error: error.message });
        }
      } else {
        console.log(user);
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
          name: this.state.username,
          content: this.state.message,
          timeRecorded: timeConverter(new Date()),
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
    if (redirect)
      return <Redirect to="/login" />;
    else if(takeBack)
      return <Redirect to="/chat-room-names" />;
    else
      return (<><div>
        <h1 className="container-fluid" Style="text-align: center; color: #37d1d1">{this.props.location.state.room} </h1>
        <Button className="custom-button" onClick={(e) => this.onLeaveRoom(e)}>Leave Room</Button>
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
                                  <div className="name">{member.username}</div>
                                  <div className="mood">{member.name}</div>
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
                                <div className="name">{chat.name}</div>
                                <div className="text">
                                  {chat.content}
                                </div>
                                <div className="time">{chat.timeRecorded}</div>
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
