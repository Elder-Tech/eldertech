import React from 'react';
import HeaderComponent from "./HeaderComponent";
import {questions} from "./Constants";

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
            <h1>{JSON.stringify(this.state.question)}</h1>
        </div>
    }
}