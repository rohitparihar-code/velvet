import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";

import Login from "./login";
import SignUp from "./signup";
import Quest from "./questionnaire";
import ChatRoomNames from "./chatRoomNames";
import ChatRoom from "./chat_room";
import ViewAllBlogs from "./view_all_blogs";
import mainPage from "./main";

function App() {
  return (
    <Router basename="/">
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        {/* <Switch>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/quest" component={Quest}></Route>
          <Route path="/chat-room-names" component={ChatRoomNames}></Route>
          <Route path="/chat-room" render={(props) => <ChatRoom {...props} />}></Route>
          <Route path="/view-all-blogs" component={ViewAllBlogs}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  ); */}

  <Switch>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/quest" component={Quest}></Route>
          <Route path="/chat-room-names" component={ChatRoomNames}></Route>
          <Route path="/chat-room" render={(props) => <ChatRoom {...props} />}></Route>
          <Route path="/view-all-blogs" component={ViewAllBlogs}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={mainPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
