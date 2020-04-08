import React from 'react';
import logo from './logo.png';  // please replace this logo with the svg one
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import ArticleListComponent from "./ArticleListComponent";
import QuestionListComponent from "./QuestionListComponent";
import SearchComponent from "./SearchComponent";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Homepage />
    },
    {
        path: "/articles",
        exact: true,
        main: () => <ArticleListComponent />
    },
    {
        path: "/articles/new",
        exact: true,
        main: () => <div/>
    },
    {
        path: "/articles/:id",
        exact: true,
        main: () => <div/>
    },
    {
        path: "/questions",
        exact: true,
        main: () => <QuestionListComponent />
    },
    {
        path: "/questions/new",
        exact: true,
        main: () => <div/>
    },
    {
        path: "/questions/:id",
        exact: true,
        main: () => <div/>
    },
    {
        path: "/questions/:id/answer",
        exact: true,
        main: () => <div/>
    },
    {
        path: "/login",
        exact: true,
        main: () => <LoginComponent />
    },
    {
        path: "/search",
        exact: true,
        main: () => <SearchComponent />
    },
    {
        path: "/header",
        exact: true,
        main: () => <HeaderComponent />
    }
];

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main/>}
                    />
                ))}
            </Switch>
        </Router>
    );
}

function Homepage() {
    let sign_in_button_text = "Helper Log In";
    let logged_in = localStorage.getItem("loggedIn");
    if(logged_in) {
        sign_in_button_text = "Logged In";
    }

    return (
        <div className="App homepage">
            <Link to="/login" className="homepage-sign-in-btn">{sign_in_button_text}</Link>
            <img src={logo} alt="logo" />
            <div className="homepage-buttons">
                <Link to="/questions">Questions</Link>
                <Link to="/articles">Help Articles</Link>
                <Link to="/search">Search</Link>
            </div>
        </div>
    );
}
export default App;
