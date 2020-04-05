import React from 'react';
import HeaderComponent from "./HeaderComponent";
import { articles } from "./Constants";

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
            logged_in_jsx = <button>Add New Article</button>;
        }

        return <div className="App">
            <HeaderComponent/>
            <div className="article-list-page">
                {logged_in_jsx}
            </div>
        </div>;
    }
}