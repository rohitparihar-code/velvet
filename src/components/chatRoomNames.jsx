import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {db} from '../config/firebase';
import axios from 'axios';

var room_description = [
    'Interact with allies from all around the world',
    'Safe space for Queer individuals',
    'Don\'t enter if you are not an 18+',
    'To discuss LGBTQ+ causes around the world',
    'Join this room if you are facing any issues',
    'Discuss your Hobbies'
]

var room_names = [
    'Global',
    'Queer',
    'NFSW',
    'Politics',
    'Help/Suggesstions',
    'Arts'
];

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
            redirect: false
        }
        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }


    componentDidMount(props) {
        getUserId().then((user) => {
            if(user.id)
            this.setState({ user_id: user.id });
            else
            this.setState({redirect: true});
        });
    }

    onMouseEnter(event) {
        this.setState(() => this.desc = room_description[event.target.value]);
    }

    onMouseLeave(event) {
        this.setState(() => this.desc = defaultDesc);
    }

    async onClick(event, i) {
        let room_id = `members/${room_names[event.target.value]}`;
        let memberRef = db.ref(room_id).push();
        await memberRef.set({
            uid: this.state.user_id
        });
        this.setState({room: room_names[event.target.value]});
        this.setState({memberId: memberRef.key});
        this.setState({join: true});
    }

    render() {
        if(this.state.join)
         return <Redirect to = {{
             pathname: '/chat-room',
             state: {
                 memberId: this.state.memberId,
                 room: this.state.room
             }
         }}></Redirect>
        else
          return (
            <div className=" container-fluid">
                <div className="logout" Style="margin-left: 90vw">
                    <button className="btn btn-outline-danger">
                        <Link to="/">Logout</Link>
                    </button>
                </div>
                <div className="row pt-5">
                    <div className="d-flex flex-column col-5 my-box chatRoom-names justify-content-around">
                        {
                        room_names.map(
                            (name, i) => (<div><button className="btn my-btn" id="submit" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={(e, i) => this.onClick(e, i)} value={i}>{room_names[i]}</button> </div>))}
                    </div>
                    <div className="d-flex col-5 chatRoom-desc my-box justify-content-center" id = 'description'>
                        <p className="my-desc rainbow-text align-self-center">{this.desc}</p>
                    </div>
                </div>
            </div>
        );

    }
}

export default ChatRoomNames;