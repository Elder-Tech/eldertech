import React from 'react';
import {Link, Redirect} from "react-router-dom";
import logo from "./logo.png";

export default class ArticleListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value) {
        this.setState({
            searchString: value
        });
    }

    handleSubmit(){
        localStorage.setItem('search_term', this.state.searchString);
        this.setState({redirect: '/search'});
    }

    render() {

        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return <div className="App homepage">
            <img src={logo} alt="logo" />
            <Link className="search-page-back-button" to="/">Go Back</Link>
            <div align="center" className="search-page" >
                <input type="text" placeholder="Search" required={true} value={this.state.SearchString} onChange={(e) =>this.handleChange(e.target.value)} />
                <input type="submit" value="Search" onClick={() => {this.handleSubmit()}} />
            </div>
        </div>
    }
}
