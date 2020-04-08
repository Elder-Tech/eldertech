import React from 'react';
import HeaderComponent from "./HeaderComponent";
import { questions } from "./Constants";
import { Link } from "react-router-dom";
import question_image from './question.png';
import BaseListComponent from "./BaseListComponent";

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
        for(let i = 0 ; i < questions.length ; i++) {
            let question = questions[i];

            question_list_jsx.push(<QuestionListContainer key={i+"qlc"}
                logged_in={this.state.logged_in} question={question} index={i}/>);
        }

        return (
            <BaseListComponent list={question_list_jsx} title="Questions" removeHeader={this.props.removeHeader}/>
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