import React from 'react';
import { Link } from 'react-router-dom';

export default function RoomsBlogChoice() {
    return (
        <div className="mt-5">
            <div className="logout" Style="margin-left: 90vw">
                <button className="btn custom-button">
                    <Link className="link-text" to="/">Logout</Link>
                </button>
            </div>
            <div className="d-flex justify-content-center">
                <div className="align-self-center img-container">
                    <Link to="/chat-room-names"><img className="my-img" src="images/join_rooms.JPG" Style="margin-left: 0" alt="" /></Link>
                </div>
                <div className="align-self-center img-container"> 
                    <Link to="/view-all-blogs"> <img className="my-img" src="images/read_articles.JPG" alt="" /> </Link>
                </div>
            </div>
        </div>
    );
}