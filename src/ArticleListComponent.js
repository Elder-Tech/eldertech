import React from 'react';
import HeaderComponent from "./HeaderComponent";
import { articles } from "./Constants";
import { Link } from "react-router-dom";
import article_image from './article.png';
import BaseListComponent from "./BaseListComponent";

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
        let logged_in_jsx = <div/>;
        if(this.state.logged_in) {
            logged_in_jsx = <Link id="add-article-btn" to="/articles/new">Add New Article</Link>;
        }

        let article_list_jsx = [];
        for(let i = 0 ; i < articles.length ; i++) {
            let article = articles[i];
            article_list_jsx.push(<ArticleButton index={i} key={i} article={article}/>);
        }

        return (
            <BaseListComponent list={article_list_jsx} title="Articles" extra={logged_in_jsx} />
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