import React from 'react';

var questions = [
    'What is your Sexuality?',
    'Is Homo Sexuality a mental illness?',
];

var options = [
    ['Male', 'Female', 'Queer', 'Prefer not to say'],
    ['Yes', 'No', 'I dont know', 'Prefer not to say'],
];

function Questionnaire() {
    var i = 1;
    return <div className="row d-flex justify-content-center">
        <div className="col-1 align-self-center my-box">
            Question {i++}
        </div>
        <div className="col-6 align-self-center my-box">
            {questions[0]}
            <hr />
            {options[0].map((value) => radioButton(value))}
        </div>
        <div className="col-4 align-self-center my-box">Review or Something else</div>
    </div>;
}

function radioButton(content) {
    return <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label class="form-check-label" for="flexRadioDefault1">{content}</label>
    <hr />
  </div>;
}

export default Questionnaire;