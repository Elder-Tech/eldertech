import React from 'react';
import HeaderComponent from "./HeaderComponent";
import { questions } from "./Constants";

export default class ViewQuestionComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let path = window.location.pathname;
        let id = path.match(/\d+/g)[0];
        let questionTitle = questions[parseInt(id)].title;
        let questionsContents = questions[parseInt(id)].content;

        return (
            <div className="App">
                <HeaderComponent/>
                <div className="view-aq-form">
                    <div className="view-aq_title">{questionTitle}</div>
                    <div className="view-aq_contents">{questionsContents}</div>
                </div>
            </div>
        );
    }
}