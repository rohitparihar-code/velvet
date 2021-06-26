import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const MUTATION = gql`
      mutation Register($email: String!, $password: String!){
        register(email: $email, password: $password){
            uid,
            email
        }
      }
    `;
    const [register, { data, error }] = useMutation(MUTATION);
    return (
        <div className="row d-flex justify-content-center pt-2">
            <div className="col-4 welcome-text-container d-flex justify-content-center">
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
            <div className="col-4 input-text-container d-flex justify-content-center">
                <div className="align-self-center d-flex flex-column justify-content-evenly">
                    <h3 className="glow-text" Style="color: teal;">Account Login</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        register({
                            variables: {
                                email: email,
                                password: password
                            }
                        });
                        console.log(data);
                        console.log(error);
                    }}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="form-text">
                            Don't Have an account. <a className="link-text" href="index.html">Sign Up</a>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" Style="background-color: teal;">SignUp</button>
                    </form>
                    <button type="button" className="btn" onClick={SignUp}> Button </button>
                </div>
            </div>
        </div>

    );
}