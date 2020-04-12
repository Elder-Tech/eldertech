import React from 'react';
import ArticleListComponent from "./ArticleListComponent";
import HeaderComponent from "./HeaderComponent";

export default class ArticleListPageComponent extends React.Component {
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
        return (
            <div className="App">
                <HeaderComponent />
                <ArticleListComponent />
            </div>
        )
    }
}