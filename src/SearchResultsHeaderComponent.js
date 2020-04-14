import React from 'react';
import {Link, Redirect} from "react-router-dom";
import logo from "./logo.png";
import article_img from "./article.png";
import question_img from "./question.png";
import home_img from "./home.png";

export default class SearchResultsHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            searchString: ""
        };
    }
    handleChange(value) {
        this.setState({
            searchString: value
        });
        localStorage.setItem("search_term",value);

    }
    handleSubmit() {
        this.setState({redirect: '/search'});
    }
    render() {

        let search_term = localStorage.getItem("search_term");

        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />

        }
        return <header className="App-header">
            <img src={logo} alt="logo" />
            <nav >
                <Link to="/"><img src={home_img} alt="house"/><button>Home</button></Link>
                <Link to="/articles"><img src={article_img} alt="newspaper article"/><button>Articles</button></Link>
                <Link to="/questions"><img src={question_img} alt="question mark"/><button>Questions</button></Link>
                <form id="searchString" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search" value={search_term} onChange={(e) =>this.handleChange(e.target.value)} />
                </form>
            </nav>
        </header>
    }
}