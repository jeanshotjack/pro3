import React, { Component } from "react";
import LoginPage from "./LoginPage";
import API from "../utils/API";
class Login extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            username: [],
            password: "",
        }
    }
handleUserInput = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ username: event.target.value })
    }
handlePasswordInput = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ password: event.target.value })
     }
handleLogin = (event) => {
    event.preventDefault();
    console.log("clicked")
    API.loginUser({ username: this.state.username, password: this.state.password, email: this.state.email }).then(console.log("account created"))
}

render() {
    return (
        <div>
            <LoginPage handleUserInput={this.handleUserInput} handlePasswordInput={this.handlePasswordInput} handleLogin ={this.handleLogin}/>
        </div>
    )
}
}
export default Login;