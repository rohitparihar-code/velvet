import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Login from './login';
import SignUp from './signup';
import Quest from './questionnaire';
import ChatRoomNames from './chatRoomNames';
import ChatRoom from './chat_room';

function App() {
    return (
        <Router basename='/'>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/quest" component={Quest}></Route>
                    <Route path="/chat-room-names" component={ChatRoomNames}></Route>
                    <Route path="/chat-room" component={ChatRoom}></Route>
                    <Route path="/" component={Login}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App; 