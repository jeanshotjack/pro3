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

handleInput = (event) => {
  event.preventDefault();
  console.log(event.target.value)
  this.setState({username: event.target.value})
  this.setState({password: event.target.value})
  this.setState({confirm: event.target.value})
  this.setState({email: event.target.value})
  this.setState({DOB: event.target.value})
  this.setState({gender: event.target.value})
      }
      render() {
        return (
            <div className="books-div">
                <SignUpPage handleBooks = {this.handleInput}/>
            </div>
        )
    }

}
export default SignUp;