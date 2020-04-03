import React from 'react';
import {Link} from "react-router-dom";
import logo from "./logo.png";
import article_img from "./article.png";
import question_img from "./question.png";

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <header className="App-header">
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/articles"><img src={article_img} alt="newspaper article"/><button>Articles</button></Link>
                <Link to="/questions"><img src={question_img} alt="question mark"/><button>Questions</button></Link>
                <form id="search">
                    <input type="text" placeholder="Search"/>
                </form>
            </nav>
        </header>
    }
}