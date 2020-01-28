import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import API from "../utils/API";

class Like extends Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick = event => {
        const id = event.target.id;
    console.log(id)
    API.getPosts()
      .then(res =>
        this.setState({ liked: !this.state.liked })
      )
      .catch(err => console.log(err));
    }
    
    render() {

      const label = this.state.liked ? <FaHeart /> :  <FaRegHeart />
      return (

          <button className="btn btn-link-danger" onClick={this.handleClick}>
            {label}</button>

      );
    }
  }
  
export default Like;