import React, { Component, useState } from "react";
import LoginPage from "./LoginPage";
import API from "../utils/API";
import {Redirect, Route} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            redirectTo: null
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
    API.loginUser({ username: this.state.username, password: this.state.password})
        .then(res =>
            {
                API.sessions(console.log("login"))
                console.log(res)
                this.setState({
                    redirectTo:"/"
                })
            }
    )

}
render() {
    if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />;
      } else {
    return (
        <div>
            <LoginPage
            handleUserInput={this.handleUserInput} 
            handlePasswordInput={this.handlePasswordInput}
            OnClick ={this.handleLogin} 
            errorMessage = {this.errorMessage}
            />
             <Route exact path="/login">
            {console.log(this.state.redirect)}
            {/* {this.state.redirect ? <Redirect to="/" /> : <Main />}
            {this.state.redirect ? <Redirect to="/" /> : <Sidebar />} */}
            </Route>
        
        </div>
    )
}
}
}
export default Login;