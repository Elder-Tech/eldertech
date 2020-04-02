import React from 'react';
import HeaderComponent from "./HeaderComponent";

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <HeaderComponent/>
            <div className="login-page">
                <h1>Helper Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    }
}