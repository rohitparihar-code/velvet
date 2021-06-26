import React from 'react';

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

const defaultDesc = 'Welcome to our Velvet fiesta. Connect with people and share your interests by joining the chat room of your choice';

class ChatRoomNames extends React.Component {

    constructor(props) {
        super(props);
        this.selected_room = 0;
        this.desc = defaultDesc;
        this.index = 0;
        this.showDesc = false;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(event) {
        this.setState(() => this.desc = room_description[event.target.value]);
    }

    onMouseLeave(event) {
        this.setState(() => this.desc = defaultDesc);
    }

    handleSubmit(event) {

        this.setState();
    }

    render() {
        return (
            <div className=" container-fluid">
                <div className="row pt-5">
                    <div className="d-flex flex-column col-5 my-box chatRoom-names justify-content-around">
                        {
                        room_names.map(
                            (name, i) => (<div><button className="btn my-btn" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.handleSubmit} value={i}>{room_names[i]}</button> </div>))}
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