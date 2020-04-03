import React from 'react';
import HeaderComponent from "./HeaderComponent";
import { Redirect } from 'react-router-dom';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {redirect: null, values: {username: '', password: ''}};
    }

    componentDidMount() {
        let logged_in = localStorage.getItem("loggedIn");
        if(logged_in) { // we are already logged in! The user must want to log out
            localStorage.removeItem("loggedIn");
            this.setState({redirect: '/'});
        }
    }

    handleChange(event) {
        let form_values = this.state.values;
        form_values[event.target.id] = event.target.value;
        this.setState({values: form_values});
    }

    handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('loggedIn', 'true');
        this.setState({redirect: '/'});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return <div className="App">
            <HeaderComponent/>
            <div className="login-page">
                <h1>Helper Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.values.username} id="username" type="text" placeholder="Username" required={true} onChange={this.handleChange}/>
                    <input value={this.state.values.password} id="password" type="password" placeholder="Password" required={true} onChange={this.handleChange}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    }
}