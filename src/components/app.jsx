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
import ChatRooms from './chatRooms';

function App() {
    return (
        <Router basename='/'>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/quest" component={Quest}></Route>
                    <Route path="/chat-rooms" component={ChatRooms}></Route>
                    <Route path="/" component={Login}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App; 