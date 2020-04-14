import React, {Component} from 'react';
import ArticleListComponent from "./ArticleListComponent";
import QuestionListComponent from "./QuestionListComponent";
import HeaderComponent from "./HeaderComponent";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <div className="search-term">{this.props.term}</div>
                <div className="search-view">
                    <ArticleListComponent noAdd={true}/>
                    <QuestionListComponent />
                </div>
            </div>
        );
    }
}

export default SearchComponent;