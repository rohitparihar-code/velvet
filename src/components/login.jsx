import React, { useState, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BASE_URL from '../config/constants';

import SignUp from './signup';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [errorLogin, setError] = useState(false);
 
    useEffect(() => {
        axios.get(BASE_URL + 'user').then((res) => {
            let user = res.data;
            if (user.uid !== null)
                setRedirect(true);
            else
                setRedirect(false);
        })
    }, []);

    const MUTATION = gql`
      mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password){
            uid,
            email
        }
      }
    `;
    const [login, { data, error }] = useMutation(MUTATION);
    if (!redirect)
        return (
            <div className="row d-flex justify-content-center pt-2" Style="background-color: rgb(32, 0, 69)">
                <div className="col-4 welcome-text-container d-flex justify-content-center">
                    <img class="u-image u-image-default u-image-1" src="images/Welcometo3.svg"
                        alt="..." Style="height: 90vh; width: 50vh; object-fit: fill" />
                </div>
                <Modal show={errorLogin} onHide={() => setError(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3 style={{ color: 'red' }}><strong>Authentication Failed!</strong></h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>There was a problem logging you in.</p>
                        <hr style={{ visibility: 'hidden' }} />
                        <hr style={{ visibility: 'hidden' }} />
                        <Button variant="success" onClick={(e) => setError(false)}>
                            OK
                        </Button>
                    </Modal.Body>
                </Modal>
                <div className="col-4 input-text-container d-flex justify-content-center">
                    <div className="align-self-center d-flex flex-column justify-content-evenly">
                        <h3 className="glow-text" Style="color: teal;">Account Login</h3>
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            await login({
                                variables: {
                                    email: email,
                                    password: password
                                }
                            });
                            // if(data.login.uid)
                            // setRedirect(true);
                            console.log(data);
                            if(data) {
                                if(data.login.uid !== '')
                                  setRedirect(true);
                                else{
                                    setEmail('');
                                    setPassword('');
                                    setError(true);    
                                }
                            }
                            console.log(error);
                        }}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" value = {email} aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}></input>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
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
    else return <Redirect to='/rooms-blog-choice'></Redirect>
};
