import React from 'react';
import {questions} from "./Constants";
import { Link } from "react-router-dom";
import question_image from './question.png';
import BaseListComponent from "./BaseListComponent";
var fuzzaldrinPlus = require("fuzzaldrin-plus");

export default class QuestionListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {logged_in: false};
    }

    componentDidMount() {
        let logged_in = localStorage.getItem("loggedIn");
        if(logged_in) {
            this.setState({logged_in: true});
        }
    }

    render() {
        let question_list_jsx = [];
        let term = localStorage.getItem("search_term");

        if(term === "" || term === null){
            for(let i = 0 ; i < questions.length ; i++) {
                let question = questions[i];
                question_list_jsx.push(<QuestionListContainer key={i+"qlc"}
                    logged_in={this.state.logged_in} question={question} index={i}/>);
            }
        }else
        {
            let question_title_strings = [];
            let question_content_strings = [];
            for(let i = 0 ; i < questions.length ; i++) {
                question_title_strings[i] = questions[i].title;
                question_content_strings[i] = questions[i].content;
            }
            let titleResults = fuzzaldrinPlus.filter(question_title_strings, term);
            let contentResults = fuzzaldrinPlus.filter(question_content_strings, term);

            for (let i = 0; i < questions.length; i++) {
                let question = questions[i];
                if(titleResults.includes(question.title) || contentResults.includes(question.content)){
                    question_list_jsx.push(<QuestionListContainer key={i+"qlc"} logged_in={this.state.logged_in} question={question} index={i}/>);
                }
            }
        }
        let questionListTitle = "Questions";
        if(question_list_jsx.length === 0){
            questionListTitle = "No questions related to your search"
        }
        return (
            <BaseListComponent list={question_list_jsx} title={questionListTitle}/>
        )
    }
}

function QuestionListContainer({index, question, logged_in}) {
    let answer_button = '';
    if(logged_in) {
        answer_button = <QuestionAnswerButton index={index} />;
    }

    return (
        <div className="question-list-container">
            <QuestionButton index={index} question={question}/>
            {answer_button}
        </div>
    );
}

function QuestionButton({index, question}) {
    let content = question.content.substring(0, 30) + " ...";

    return (
        <Link className="list-btn" to={"/questions/" + index}>
            <button key={index}>
                <img alt="question mark" src={question_image} />
                <div>
                    <b>{question.title}</b>
                    <p>{content}</p>
                </div>
            </button>
        </Link>
    );
}

function QuestionAnswerButton({index}) {
    return (
        <Link id="answer-btn" to={"/questions/" + index + "/answer"}>Answer</Link>
    );
}