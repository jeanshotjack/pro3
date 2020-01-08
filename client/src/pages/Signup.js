import React, { Component } from "react";
import SignUpPage from "./SignUpPage";
import API from "../utils/API";
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirm: "",
            email: "",
            DOP: "",
            gender: ""
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
    handleGender = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ gender: event.target.value })
    }
    handleSocial = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({ social: event.target.value })
    }
    handleVer = (event) => {
        event.preventDefault();
        console.log("Click")
        if (!this.state.username ||
            !this.state.password ||
            !this.state.confirm
            // !this.state.email ||
            // !this.state.gender||
            // !this.state.DOB
            ) {
            console.log("Please Fill in all things")
        }
        else {
            if (this.state.confirm !== this.state.password) {
                console.log("Passwords do not match")
            }
            // else if (!this.state.username || 
            //     !this.state.password ||
            //      !this.state.confirm || 
            //      !this.state.email || 
            //      this.state.gender){
            //     console.log("Please fill in all fields")
            // }
            else {
                console.log("encrypting...");
                API.saveUser({
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    gender: this.state.gender,
                    DOB: this.state.DOB
                })
                    .then(res => console.log("Signed Up: " + JSON.stringify(res)))
                    .catch(err => console.log(err))
            }
        }
    }
    render() {
        return (
            <div>
                <SignUpPage 
                handleUser={this.handleUser} 
                handlePassword={this.handlePassword} 
                handleConfirm={this.handleConfirm}
                handleEmail={this.handleEmail}
                handleDOB={this.handleDOB}
                handleGender={this.handleGender}
                handleSocial = {this.handleSocial}
                onClick={this.handleVer} />
            </div>
        )
    }

}
export default SignUp;