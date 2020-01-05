import React, { Component } from "react";
import SignUpPage from "./SignUpPage";
import API from "../utils/API";
class SignUp extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            username: [],
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
    handleVer = (event) => {
        // event.preventDefault();
        console.log("Click")
        if (!this.state.username ||
            !this.state.password ||
            !this.state.confirm ||
            !this.state.email) {
            console.log("Please Fill in all things")
        }
        else {
            if (this.state.confirm !== this.state.password) {
                console.log("Passwords do not match")
            }
            else {
                // if (db.Accounts.get({username:this.state.username}) != 0){
                //     console.log("user already exists")
                // }
                // else {
                
                console.log("encrypting...");
                API.saveUser({ username: this.state.username, password: this.state.password, email: this.state.email }).then(console.log("account created"))
                // }
            }
        }
    }

    render() {
        return (
            <div>
                <SignUpPage handleUser={this.handleUser} handlePassword={this.handlePassword} handleConfirm={this.handleConfirm} handleEmail={this.handleEmail} handleDOB={this.handleDOB} handleGender={this.handleGender} handleVer={this.handleVer} />
            </div>
        )
    }

}
export default SignUp;