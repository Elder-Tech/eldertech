import React, {Component} from 'react';
import ArticleListComponent from "./ArticleListComponent";
import QuestionListComponent from "./QuestionListComponent";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
            <div className="search-view">
                <ArticleListComponent />
                <QuestionListComponent removeHeader={true} />
            </div>
            </div>
        );
    }
}

export default SearchComponent;