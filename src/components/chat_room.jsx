import React from "react";
import { Table } from "react-bootstrap";
// import FloatingLabel from "react-bootstrap-floating-label";
import TableScrollBar from "react-table-scrollbar";

function CopiedContent() {
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
}

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.myid = "";
  }

  render() {
    return (<div>
        <h1 className="container-fluid" Style="text-align: center; color: black">Room name - Fiesta </h1>
        <CopiedContent />
    </div>);
  }
}

export default ChatRoom;
