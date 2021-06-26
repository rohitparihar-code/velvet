import React from 'react';

var room_description = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    'lisuc iasu gadd',
    'asli uhiasduhlasd ',
    'a souidfhoasdh',
    'aidsf iaudsf'
]

var room_names = [
    'Global',
    'Queer',
    'NFSW',
    'Politics',
    'Help/Suggesstions',
    'Arts'
];

const defaultDesc = 'WELCOME\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy';

class ChatRoomNames extends React.Component {

    constructor(props) {
        super(props);
        this.selected_room = 0;
        this.desc = 'WELCOME\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy';
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