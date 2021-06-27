import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import { Redirect } from 'react-router-dom';

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
    const [redirect, setRedirect] = useState(false);
    if(!redirect)
    return (
        <div className="row d-flex justify-content-center pt-2" Style="background-color: rgb(32, 0, 69)">
            <div className="col-4 welcome-text-container d-flex justify-content-center">
                <img class="u-image u-image-default u-image-1" src="images/Welcometo3.svg" 
                alt="..."  Style="height: 90vh; width: 50vh; object-fit: fill"/>
            </div>
            <div className="col-4 input-text-container d-flex justify-content-center">
                <div className="align-self-center d-flex flex-column justify-content-evenly">
                    <h3 className="glow-text" Style="color: #37d1d1;">Account Login</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        login({
                            variables: {
                                email: email,
                                password: password
                            }
                        });
                        setRedirect(true);
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
                        <button type="submit" className="btn custom-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
    else return <Redirect to='/rooms-blog-choice'></Redirect>
};
