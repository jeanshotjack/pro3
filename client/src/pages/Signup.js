import React, { Component } from "react";
import SignUpPage from "./SignUpPage";

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
          gender:""
      }
  }

handleUser = (event) => {
  event.preventDefault();
  console.log(event.target.value)
  this.setState({username: event.target.value})
      }
handlePassword = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({password: event.target.value})
            }
handleConfirm = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({confirm: event.target.value})
                        }
handleEmail = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({email: event.target.value})
                        }
handleDOB = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({DOB: event.target.value})
                        }
handleGender = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({gender: event.target.value})
                        }
handleVer = (event) => {
    event.preventDefault();
    console.log("Click")
}

      render() {
        return (
            <div>
                <SignUpPage handleUser = {this.handleUser} handlePassword = {this.handlePassword} handleConfirm = {this.handleConfirm} handleEmail = {this.handleEmail} handleDOB = {this.handleDOB} handleGender = {this.handleGender} handleVer = {this.handleVer}/>
            </div>
        )
    }

}
export default SignUp;