import React from 'react';

function login() {
    return <div className="row d-flex justify-content-center pt-2">
        <LHS />
        <RHS />
    </div>;
}

function LHS() {
    return <div className="col-4 welcome-text-container d-flex justify-content-center">
        <div className="align-self-center welcome-texts">
            <h2 className="neon">Welcome To</h2>
            <h2 className="neon">Velv<span>e</span>t</h2>
            <h2 className="neon">Cafe</h2>
        </div>
        <div className="lines-box align-self-center d-flex flex-column justify-content-around">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>
}

function RHS() {
    return <div className="col-4 input-text-container d-flex justify-content-center">
        <div className="align-self-center d-flex flex-column justify-content-evenly">
            <h3 className="glow-text" Style="color: teal;">Account Login</h3>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-text">
                    Don't Have an account. <a className="link-text" href="index.html">Sign Up</a>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" Style="background-color: teal;">Submit</button>
          </form>
    </div>
    </div>;
}

export default login;