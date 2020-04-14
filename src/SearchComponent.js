import React, {Component} from 'react';
import ArticleListComponent from "./ArticleListComponent";
import QuestionListComponent from "./QuestionListComponent";
import SearchResultsHeaderComponent from "./SearchResultsHeaderComponent";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let term = localStorage.getItem("search_term");

        return (
            <div className="App">
                <SearchResultsHeaderComponent />
                <div className="search-term">Search results for: "{term}"</div>
                <div className="search-view">
                    <ArticleListComponent noAdd={true}/>
                    <QuestionListComponent />
                </div>
            </div>
        );
    }
}


export default SearchComponent;