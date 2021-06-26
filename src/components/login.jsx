import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";

import { Link } from 'react-router-dom';

import SignUp from './signup';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const MUTATION = gql`
      mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password){
            uid,
            email
        }
      }
    `;
    const [login, { data, error }] = useMutation(MUTATION);

    return (
        <div className="row d-flex justify-content-center pt-2">
            <div className="col-4 welcome-text-container d-flex justify-content-center">
                <div className="align-self-center welcome-texts">
                    <h2 className="neon">Welcome To</h2>
                    <h2 className="neon">Velv<span>e</span>t</h2>
                    <h2 className="neon">Cafe</h2>
                </div>
            </div>
            <div className="col-4 input-text-container d-flex justify-content-center">
                <div className="align-self-center d-flex flex-column justify-content-evenly">
                    <h3 className="glow-text" Style="color: teal;">Account Login</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        login({
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
                            Don't Have an account. <Link to="/signup">SignUp</Link>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" Style="background-color: teal;">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
