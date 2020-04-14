import React from 'react';
import HeaderComponent from "./HeaderComponent";
import { articles } from "./Constants";

export default class ViewArticleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let path = window.location.pathname;
        let id = path.match(/\d+/g)[0];
        let articleTitle = articles[parseInt(id)].title;
        let articleContents = articles[parseInt(id)].content;

        return (
            <div className="App">
                <HeaderComponent/>
                <div className="view-aq-form">
                        <div className="view-aq_title">{articleTitle}</div>
                        <div className="view-aq_contents">{articleContents}</div>
                </div>
            </div>
        );
    }
}
