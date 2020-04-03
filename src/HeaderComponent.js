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
                <Link to="/"><button>Home</button></Link>
                <Link to="/articles"><button>Articles</button></Link>
                <Link to="/questions"><button>Questions</button></Link>
                <form id="search">
                    <input type="text" placeholder="Search"/>
                </form>
            </nav>
        </header>
    }
}