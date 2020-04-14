import React from 'react';
import { articles } from "./Constants";
import { Link } from "react-router-dom";
import article_image from './article.png';
import BaseListComponent from "./BaseListComponent";
var fuzzaldrinPlus = require("fuzzaldrin-plus");

export default class ArticleListComponent extends React.Component {
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
        let article_list_jsx = [];
        let logged_in_jsx = <div/>;
        if (this.state.logged_in && !this.props.noAdd) {
            logged_in_jsx = <Link id="add-article-btn" to="/articles/new">Add New Article</Link>;
        }
        if(localStorage.getItem("search_term") === "" || localStorage.getItem("search_term") === null) {
            for (let i = 0; i < articles.length; i++) {
                let article = articles[i];
                article_list_jsx.push(<ArticleButton index={i} key={i} article={article}/>);
            }
        }
        else{
            let article_title_strings = [];
            let article_content_strings = [];
            for(let i = 0 ; i < articles.length ; i++) {
                article_title_strings[i] = articles[i].title;
                article_content_strings[i] = articles[i].content;
            }
            let titleResultsSearchPage = fuzzaldrinPlus.filter(article_title_strings, localStorage.getItem("search_term"));
            let contentResultsSearchPage = fuzzaldrinPlus.filter(article_content_strings, localStorage.getItem("search_term"));

            for (let i = 0; i < articles.length; i++) {
                let article = articles[i];
                if((titleResultsSearchPage.includes(article.title) || contentResultsSearchPage.includes(article.content))){
                    article_list_jsx.push(<ArticleButton index={i} key={i} article={article}/>);
                }
            }
        }
        let articleListTitle = "Articles";
        if(article_list_jsx.length === 0){
            articleListTitle = "No articles related to your search"
        }
            return (
                <BaseListComponent list={article_list_jsx} title={articleListTitle} extra={logged_in_jsx}/>
            )
        }
}

function ArticleButton({index, article}) {
    let content = article.content.substring(0, 30) + " ...";
    return (
        <Link className="list-btn" to={"/articles/" + index}>
            <button key={index}>
                <img alt="newspaper article" src={article_image} />
                <div>
                    <b>{article.title}</b>
                    <p>{content}</p>
                </div>
            </button>
        </Link>
    );
}