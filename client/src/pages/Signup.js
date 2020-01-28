import React, { Component } from "react";
import {Redirect, Route} from 'react-router-dom'
import SignUpPage from "../components/SignUp/SignUpPage";
import API from "../utils/API";

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirm: "",
            email: "",
            DOB: "",
            pronouns: "",
            social: "",
            errorMessage: "",
            redirectTo: null
        }
    }
    handleUser = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ username: event.target.value })
    }
    handlePassword = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ password: event.target.value })
    }
    handleConfirm = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ confirm: event.target.value })
    }
    handleEmail = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ email: event.target.value })
    }
    handleDOB = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ DOB: event.target.value })
    }
    handlePronouns = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ pronouns: event.target.value })
    }
    handleSocial = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ social: event.target.value })
    }
    handleVer = (event) => {
        event.preventDefault();
        if (!this.state.username ||
            !this.state.password ||
            !this.state.confirm ||
            !this.state.email ||
            !this.state.pronouns ||
            !this.state.DOB
            ) {
            this.setState({errorMessage: "Please fill in all fields"})
            console.log(this.state.errorMessage)
        }
        else {
            if (this.state.confirm !== this.state.password) {
                console.log("Passwords do not match")
                this.setState({errorMessage: "Passwords do not match"})
            }
            else {
                console.log("encrypting...");
                API.create({
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    pronouns: this.state.pronouns,
                    social: this.state.social,
                    DOB: this.state.DOB,
                })
                    .then(res => console.log("Signed Up: " + JSON.stringify(res)))
                    .catch(err => {
                        if(err.response.data.error){
                            console.log(err.response.data.errorMsg)
                            this.setState({errorMessage: err.response.data.errorMsg})
                        }
                    })
                    // .then(this.setState({redirectTo:"/login"}));
           }
        }

    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />;
          }
        return (
            <div>
                {console.log(this.state.errorMessage)}
                <SignUpPage 
                handleUser={this.handleUser}
                errorMessage={this.state.errorMessage}
                handlePassword={this.handlePassword} 
                handleConfirm={this.handleConfirm}
                handleEmail={this.handleEmail}
                handleDOB={this.handleDOB}
                handlePronouns={this.handlePronouns}
                handleSocial = {this.handleSocial}
                onClick={this.handleVer} />
            </div>
        )
    }

}
export default SignUp;