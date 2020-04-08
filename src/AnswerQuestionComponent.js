import React from 'react';
import HeaderComponent from "./HeaderComponent";
import {questions} from "./Constants";
import TextEditorComponent from "./TextEditorComponent";

export default class AnswerQuestionComponent extends React.Component {
    constructor(props) {
        super(props);
        //there is probably a better way of getting the question id than this
        let question_id = window.location.href.substring(window.location.href.indexOf("/questions/") + 11).charAt(0);
        this.state = {question: questions[question_id]};
    }

    render() {
        return <div className="App">
            <HeaderComponent/>
            <div className="question-answer-page">
                <h1>{this.state.question.title}</h1>
                <p>{this.state.question.content}</p>
                <TextEditorComponent/>
                <div>
                    <button className="standard-button">Go Back</button>
                    <button className="question-answer-page-button standard-button">Submit Answer</button>
                </div>
            </div>
        </div>
    }
}