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

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Homepage />
    },
    {
        path: "/articles",
        exact: true,
        main: () => <div />
    },
    {
        path: "/questions",
        exact: true,
        main: () => <div />
    },
    {
        path: "/login",
        exact: true,
        main: () => <LoginComponent />
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
    return (
        <div className="App homepage">
            <Link to="/login" className="homepage-sign-in-btn">Helper Log In</Link>
            <img src={logo} alt="logo" />
            <div className="homepage-buttons">
                <Link to="/questions">Questions</Link>
                <Link to="/articles">Help Articles</Link>
                <button id="fixme">Search All</button>
            </div>
        </div>
    );
}
export default App;
