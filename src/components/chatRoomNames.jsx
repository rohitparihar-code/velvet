<<<<<<< HEAD
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {db} from '../config/firebase';
import axios from 'axios';
import BASE_URL from '../config/constants';
||||||| 1bc4a35
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {db} from '../config/firebase';
import axios from 'axios';
=======
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import { db } from "../config/firebase";
import axios from "axios";
>>>>>>> faf96f804b24d5fde0f42a600414fbe93315e772

var room_description = [
  "Interact with allies from all around the world",
  "Safe space for Queer individuals",
  "Not Safe For Work (For 18+ only). To gain knowledge from community",
  "To discuss LGBTQ+ causes around the world and be a part of protests or movements",
  "Want some help? Get support/guidance from our friends around the world ",
  "Nurture your interests",
];

var room_names = [
  "Global",
  "Queer",
  "NSFW",
  "Politics",
  "Help/Suggesstions",
  "Arts",
];

<<<<<<< HEAD
async function getUserId() {
    let res = await axios.get(BASE_URL + 'user');
    console.log(res.data);
    return res.data;
  }
const defaultDesc = 'Welcome to our Velvet fiesta. Connect with people and share your interests by joining the chat room of your choice';

class ChatRoomNames extends React.Component {

    constructor(props) {
        super(props);
        this.selected_room = 0;
        this.desc = defaultDesc;
        this.index = 0;
        this.showDesc = false;
        this.state = {
            memberId: '',
            join: false,
            room: '',
            user_id: '',
            redirect: false,
            name: '',
            username: ''
        }
        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
||||||| 1bc4a35
async function getUserId() {
    let res = await axios.get('http://localhost:8080/user');
    console.log(res.data);
    return res.data;
  }
const defaultDesc = 'Welcome to our Velvet fiesta. Connect with people and share your interests by joining the chat room of your choice';

class ChatRoomNames extends React.Component {

    constructor(props) {
        super(props);
        this.selected_room = 0;
        this.desc = defaultDesc;
        this.index = 0;
        this.showDesc = false;
        this.state = {
            memberId: '',
            join: false,
            room: '',
            user_id: '',
            redirect: false,
            name: '',
            username: ''
        }
        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
=======
async function GetUserId() {
  let res = await axios.get("http://localhost:8080/user");
  console.log(res.data);
  
  return res.data;
}
async function Logout() {
    const MUTATION = gql`
    mutation Logout {
      logout
>>>>>>> faf96f804b24d5fde0f42a600414fbe93315e772
    }
  `;
  const [logout, { data1, error1 }] = useMutation(MUTATION);
}
const defaultDesc =
  "Welcome to our Velvet fiesta. Connect with people and share your interests by joining the chat room of your choice";

class ChatRoomNames extends React.Component {
  constructor(props) {
    super(props);
    this.selected_room = 0;
    this.desc = defaultDesc;
    this.index = 0;
    this.showDesc = false;
    this.state = {
      memberId: "",
      join: false,
      room: "",
      user_id: "",
      redirect: false,
      name: "",
      username: "",
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount(props) {
    GetUserId().then((user) => {
      if (user.uid) {
        this.setState({ user_id: user.uid });
        this.setState({ username: user.username });
        this.setState({ name: user.name });
      } else this.setState({ redirect: true });
    });
  }

  onMouseEnter(event) {
    this.setState(() => (this.desc = room_description[event.target.value]));
  }

  onMouseLeave(event) {
    this.setState(() => (this.desc = defaultDesc));
  }

  async onClick(event, i) {
    let room_id = `members/${room_names[event.target.value]}`;
    let memberRef = db.ref(room_id).push();
    await memberRef.set({
      uid: this.state.user_id,
      username: this.state.username,
      name: this.state.name,
    });
    this.setState({ room: room_names[event.target.value] });
    this.setState({ memberId: memberRef.key });
    this.setState({ join: true });
  }

  render() {
    if (this.state.join)
      return (
        <Redirect
          to={{
            pathname: "/chat-room",
            state: {
              memberId: this.state.memberId,
              room: this.state.room,
            },
          }}
        ></Redirect>
      );
    else
      return (
        <div className=" container-fluid">
          <div className="logout" Style="margin-left: 90vw; margin-top : 5vh;">
            <button
              className="btn custom-button"
            >
              <Link className="link-text" to="/rooms-blog-choice">
                Back
              </Link>
            </button>
          </div>
          <div className="row pt-5">
            <div className="d-flex flex-column col-5 my-box chatRoom-names justify-content-around">
              {room_names.map((name, i) => (
                <div>
                  <button
                    className="btn my-btn"
                    id="submit"
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={(e, i) => this.onClick(e, i)}
                    value={i}
                  >
                    {room_names[i]}
                  </button>{" "}
                </div>
              ))}
            </div>
            <div
              className="d-flex col-5 chatRoom-desc my-box justify-content-center"
              id="description"
            >
              <p
                className="my-desc rainbow-text align-self-center"
                Style="font-size: 30px"
              >
                {this.desc}
              </p>
            </div>
          </div>
        </div>
      );
  }
}

export default ChatRoomNames;
