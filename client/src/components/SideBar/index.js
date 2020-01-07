import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import SubmitPost from "../SubmitPost";
import axios from "axios";
import SideBar from "./sidebar";

import "./style.css";
// import console = require("console");

class PostForm extends React.Component {
    constructor() {
        super();
            this.state = {
                postTitle: "",
                postBody: "",
            }
        }
    handleTitleInput = (event) => {
        event.preventDefault();
        this.setState({ postTitle: event.target.value })
    }
    handleBodyInput = (event) => {
        event.preventDefault();
        this.setState({ postBody: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        console.log("Submitted!")
        // const dbPost = new Post(event.target);
        // axios.post("/api/posts", dbPost)
        //     .catch(err => console.log(err))
    }
    
render () {
    return (
    <SideBar handleTitle = {this.handleTitleInput} handleBody = {this.handleBodyInput} handleSubmit={this.handleSubmit}/>
    );
}
}
export default PostForm;






