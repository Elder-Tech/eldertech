import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import logo from "./logo.png";

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <header className="App-header">
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/questions">Questions</Link>
                <form id="search">
                    <input type="text" placeholder="Search"/>
                </form>
            </nav>
        </header>
    }
}