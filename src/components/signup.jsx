import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery, gql, useMutation } from "@apollo/client";
import { Modal, Button } from 'react-bootstrap';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [errorRegister, setError] = useState(false);
    // TODO: UserName
    const MUTATION = gql`
      mutation Register($email: String!, $password: String!, $username: String, $name: String){
        register(email: $email, password: $password, username: $username, name: $name){
            uid,
            email
        }
      }
    `;
    const [register, { data, error }] = useMutation(MUTATION);
    if(!redirect)
    return (
        <div className="row d-flex justify-content-center pt-2" Style="background-color: rgb(32, 0, 69)">
            <Modal show={errorRegister} onHide={() => setError(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3 style={{ color: 'red' }}><strong>Authentication Failed!</strong></h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>There was a problem registering you...</p>
                        <hr style={{ visibility: 'hidden' }} />
                        <hr style={{ visibility: 'hidden' }} />
                        <Button variant="success" onClick={(e) => setError(false)}>
                            OK
                        </Button>
                    </Modal.Body>
                </Modal>
            <div className="col-4 welcome-text-container d-flex justify-content-center">
            <img class="u-image u-image-default u-image-1" src="images/Welcometo3.svg" 
                alt="..."  Style="height: 90vh; width: 50vh; object-fit: fill"/>
            </div>
            <div className="col-4 input-text-container d-flex justify-content-center">
                <div className="align-self-center d-flex flex-column justify-content-evenly">
                    <h3 className="glow-text" Style="color: teal;">Register Account</h3>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        await register({
                            variables: {
                                email: email,
                                password: password,
                                username: userName,
                                name: name
                            }
                        });
                        console.log(data);
                        if(data && data.register.uid) {
                            setRedirect(true);
                        }
                        else {
                            setEmail('');
                            setPassword('');
                            setUserName('');
                            setName('');
                            setError(true);
                        }
                    }}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="userName" className="form-label">User Name</label>
                            <input type="name" className="form-control" id="userName" aria-describedby="userNameHelp"  value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                            <div id="userNameHelp" className="form-text">Will be displayed to other users in our Cafe</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="name" className="form-control" id="fullName" aria-describedby="emailHelp"  value={name} onChange={(e) => setName(e.target.value)}></input>
                            <div id="emailHelp" className="form-text">We need this for your registration.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" Style="background-color: teal;">SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    );
    else
     return <Redirect to='/quest'></Redirect>;
}