import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUp from './signup';

function App() {
    return (
        <Router basename='/signup'>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/signup">Login</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/signup" component={SignUp}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;