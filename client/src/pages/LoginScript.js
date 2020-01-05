import React, { Component } from "react";
import Login from "./Login";
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
render() {
    return (
        <div>
            <Login handleUserInput={this.handleUserInput} handlePasswordInput={this.handlePasswordInput} />
        </div>
    )
}
}
export default Login;