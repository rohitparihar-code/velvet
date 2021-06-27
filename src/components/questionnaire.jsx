import React from 'react';

import { Link } from 'react-router-dom'; 

var questions = [
    'Is Homo Sexuality a mental illness?',
    // 'Which of the following is most accurate :-',
    'There are ____ genders:',
    'Homosexuality is',
    'When I see gay people in public I get',
    'Gay marriage is '
];

var options = [
    [   'Yes', 'No', 'I dont know', 'Prefer not to say'],
    // [
    //     'Gay males and lesbians wish they were the other gender.',
    //     'Most gay males wish they were women.',
    //     'Most lesbians wish they were men.',
    //     'Gay males and lesbians are satisfied with their gender identity.',
    // ],
    [
        '0- human','2- male and female','69','As many as people want to identify with'
    ],
    [
        'Inherently immoral',
        'Unnatural and a mental illness',
        'Perfectly normal and healthy',
        'Revolting and disgusting'
        
    ],
    [
        'Uncomfortable because of their presence',
        'Get suspicious of them',
        'Maintain my distance from them',
        'Act normally/doesn’t matter'
    ],
    [
        'A civil right',
        'Wrong, as it goes against my religion',
        'Wrong, as it against the law in my country',
        'Wrong, as I find it disgusting'
    ]

];

var review = [
    [
        'No, HomoSexuality is not a mental illness.... (>_<)',
        'Good job (:, Homosexuality is not a mental illness rather people\'s mindset', 
        'Well, think about it, is nature a mental illness?', 
        'Well, we cannot proceed if we don\'t get an opinion.... (:',
    ],
    // [
    //     'No, that\'s is not right. I have never met such person....',
    //     'Others may interpret this, but its not correct, gay males are happy with themselves.',
    //     'Lesbians are the happiest creatures, they do not compare themselves to others',
    //     'Correct, everyone is happy by themselves.',
    // ],
    [
        'Are you high right now?',
        'The idea that there exist only two genders is incredibly outdated and is damaging to countless individuals. The genders exist not binarily, but as a spectrum!',
        'Not quite! but I like your sense of humor',
        'That is correct! We are all different and we cannot represent every individual’s identity with something quantifiable'
    ],
    [
        'There is nothing immoral about homosexuality. It is a personal choice and harms no individuals.',
        'Homosexuality is NOT a mental illness. Non-binary individuals are perfectly healthy. Homosexuality has been observed naturally in almost all the species.',
        'Yes! You’re getting a hang of it',
        'It is not disgusting or revolting to be a homosexual, it is however to irrationally hate them'
        
    ],
    [
        'There is nothing about non-binary people that should make you uncomfortable by the virtue of that fact alone',
        'Being suspicious of them is an irrational reaction when you’re doing it on that fact alone and without any reason',
        'If you feel the need to go away simply by the virtue of them being gay then you’re better off far away from them anyway, you bigot! ',
        'Uh-huh, an individual’s sexual identity is as trivial as people being right-handed or left-handed. In most cases it shouldn’t affect on how you interact with them'
    ],
    [
        'Absolutely, gay marriage is no different than traditional marriage and it’s none of the business of the state or anyone else ',
        'Most of the major religion tenets were written thousands of years ago, don’t justify your bigotry hiding behind religion',
        'A state’s law is supposed to be aligned with it’s citizens interests and is supposed to empower them. If laws go against gay rights then they are antiquated and is supposed to be protested against.',
        'There is absolutely no reason to find homosexuality disgusting, even if you do it doesn’t matter as you don’t hold dominion over their lives'
    ]
];

var answers = [1,3,2,3,0];

class Questionnaire extends React.Component {
    constructor(props) {
      super(props);
      this.value = ''; // Value of the radio button selected
      this.index = 0; // Index of the question being displayed
      this.review = ''; // Corresponding review to be displayed
      this.isDisbaled = 'true'; // To make the next question disabled
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.nextQuest = this.nextQuest.bind(this);
    }
  
    handleChange(event) {
        this.setState(() => {this.value = event.target.value;});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        var indexOfReview = options[this.index].indexOf(this.value);
        this.setState(() => this.review = review[this.index][indexOfReview]);

        if( indexOfReview === answers[this.index] ) {
            document.getElementById("nxtQ").style.display = 'block';
        } else {
            document.getElementById("nxtQ").style.display = 'none'; 
        }

        if( this.index === questions.length -1) {
            // TODO: Move to selection page
            document.getElementById("nxtQ").style.display = 'none';
            document.getElementById("final-btn1").style.display = 'block';
            return ;
        }

        this.setState(() => this.isDisbaled);

        event.preventDefault();
    }

    nextQuest(event) {

        document.getElementById("nxtQ").style.display = "none";

        var radios = document.getElementsByName('options');
        for(var i=0; i<radios.length; i++) {
            radios[i].checked = false;
        }

        this.isDisbaled = 'true';
        this.review = '';
        this.value = '';
        this.setState(() => this.index += 1);
    }

    render() {
        return (
        <div className="row d-flex justify-content-around mt-5 pt-5" Style="color: white">
        <div className="col-6 align-self-center align-items-center my-box">
            <h1 Style="color: #37d1d1">{questions[this.index]}</h1>
            <hr />
            <form onSubmit={this.handleSubmit} >
            <input id="opt1" className="options-text" type="radio" name="options" onClick={this.handleChange} value={options[this.index][0]}/>  
            <label for="opt1"><h4>&nbsp;&nbsp;{options[this.index][0]}</h4></label><hr />
            
            <input id="opt2" className="options-text" type="radio" name="options" onClick={this.handleChange} value={options[this.index][1]}/> 
            <label for="opt2">  <h4>&nbsp;&nbsp;{options[this.index][1]}</h4></label><hr />
            
            <input id="opt3" className="options-text" type="radio" name="options" onClick={this.handleChange} value={options[this.index][2]}/>
            <label for="opt3">  <h4>&nbsp;&nbsp;{options[this.index][2]}</h4></label><hr />
            
            <input id="opt4" className="options-text" type="radio" name="options" onClick={this.handleChange} value={options[this.index][3]}/>
            <label for="opt4">  <h4>&nbsp;&nbsp;{options[this.index][3]}</h4></label><hr />
            
            <input type="submit" value="Submit" className="btn custom-button"/>
            </form>
        </div>
        <div className="col-4 align-self-center my-box" Style="margin-right: 10vw">
            <p className="rainbow-text" Style="font-size: 30px">{this.review}</p>
            <button Style="display: none" id="nxtQ" className="btn custom-button" onClick={this.nextQuest}>Next Question</button>
            <div className="row">
                <button Style="display: none" id="final-btn1" className="btn custom-button col-4">
                   <Link className="link-text" to="/rooms-blog-choice">Next</Link>
                </button>
                
            </div>
        </div>
    </div>
      );
    }
}

export default Questionnaire;