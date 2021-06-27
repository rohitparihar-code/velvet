import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery, gql, useMutation } from "@apollo/client";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [redirect, setRedirect] = useState(false);
    // TODO: UserName
    const MUTATION = gql`
      mutation Register($email: String!, $password: String!){
        register(email: $email, password: $password){
            uid,
            email
        }
      }
    `;
    const [register, { data, error }] = useMutation(MUTATION);
    if(!redirect)
    return (
        <div className="row d-flex justify-content-center pt-2" Style="background-color: rgb(32, 0, 69)">
            <div className="col-4 welcome-text-container d-flex justify-content-center">
            <img class="u-image u-image-default u-image-1" src="images/Welcometo3.svg" 
                alt="..."  Style="height: 90vh; width: 50vh; object-fit: fill"/>
            </div>
            <div className="col-4 input-text-container d-flex justify-content-center">
                <div className="align-self-center d-flex flex-column justify-content-evenly">
                    <h3 className="glow-text" Style="color: #37d1d1;">Register Account</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        register({
                            variables: {
                                email: email,
                                password: password
                                // TODO: UserName
                            }
                        });
                        setRedirect(true);
                    }}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="userName" className="form-label">User Name</label>
                            <input type="name" className="form-control" id="userName" aria-describedby="userNameHelp" onChange={(e) => setUserName(e.target.value)}></input>
                            <div id="userNameHelp" className="form-text">Will be displayed to other users in our Cafe</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <br />
                        <button type="submit" className="btn custom-button"> SignUp </button>
                    </form>
                </div>
            </div>
        </div>
    );
    else
     return <Redirect to='/quest'></Redirect>;
}