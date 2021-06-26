import React from 'react';

var questions = [
    'What is gender identity?',
    'Is Homo Sexuality a mental illness?',
    'Which of the following is accurate?',
];

var options = [
    [
        'The biological gender you are born as', 
        'How you experience your gender internally',
        'How others perceive your gender',
        'It doesn\'t exist',
    ],
    [   'Yes', 'No', 'I dont know', 'Prefer not to say', ],
    [
        'Both gay males and lesbians wish they were the other gender.',
        'Most gay males wish they were women.',
        'Most lesbians wish they were men.',
        'Both gay males and lesbians are satisfied with their gender identity.',
    ],
];

var review = [
    [
        'Well that\'s what Science would say, but we are social animals right (:',
        'Correct, its more important that how you see yourself than other judging you, its about you...', 
        'Wrong, Gender identity is not what others see in you rather what you experience', 
        'Wrong, its who you are, you cannot steal your identity',
    ],
    [
        'No, HomoSexuality is not a mental illness.... (>_<)',
        'Good job (:, Homosexuality is not a mental illness rather people\'s mindset', 
        'Well, think about it, is nature a mental illness?', 
        'Well, we cannot proceed if we don\'t get an opinion.... (:',
    ],
    [
        'No, that\'s is not right. I have never met such person....',
        'Others may interpret this, but its not correct, gay males are happy with themselves.',
        'Lesbians are the happiest creatures, they do not compare themselves to others',
        'Correct, everyone is happy by themselves.',
    ],
];

var answers = [1, 1, 3];

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

        this.setState(() => this.isDisbaled);

        event.preventDefault();
    }

    nextQuest(event) {

        document.getElementById("nxtQ").style.display = "none";

        if( this.index === questions.length -1) {
            // all the questions have been completed
            return ;
        }

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
        <div className="row d-flex justify-content-around mt-5 pt-5">
            {/* <div className="col-1 align-self-center my-box">
                <h1>Q{this.index+1}.</h1>
            </div> */}
        <div className="col-6 align-self-center align-items-center my-box">
            <h1>{questions[this.index]}</h1>
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
            
            <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
        </div>
        <div className="col-4 align-self-center my-box" Style="margin-right: 10vw">
            <p className="rainbow-text">{this.review}</p>
            <button Style="display: none" id="nxtQ" className="btn btn-info" onClick={this.nextQuest}>Next Question</button>
        </div>
    </div>
      );
    }
}

export default Questionnaire;