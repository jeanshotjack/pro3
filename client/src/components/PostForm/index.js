import React from "react";
import ListItem from "../List";
import { Row, Col } from "../Grid";
import SubmitPost from "../SubmitPost";
import axios from "axios";
// import SideBar from "../SideBar";

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

    render() {
        return (
            <ListItem>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">

                        <div class="sidenav">
                            {/* can we please change this font */}
                            <p className="font-main">
                                Hello! {this.props.username}
                            </p>

                            <p className="font-main">
                                Pronouns: {this.props.pronouns}
                            </p>
                            <p className="font-main">
                                User Name: {this.props.username}
                            </p>
                            <p className="font-main">
                                Social Media: {this.props.social}
                            </p>

                                 <div className="form-group">
                              <label htmlFor="title">Post Title</label>
                                <input id="title" onChange={this.handleTitleInput} name="title" type="text" />

                                 <label htmlFor="body">Post Body</label>
                                <input id="body" onChange={this.handleBodyInput} name="body" type="text" />


                                <button onClick={() => this.handleSubmit()}>Submit</button>

                                 </div> 
                            

                        </div>

                    </Col>
                </Row>
            </ListItem>
            // <SideBar handleTitle = {this.handleTitleInput} handleBody = {this.handleBodyInput} handleSubmit={this.handleSubmit}/>
        );
    }
}
export default PostForm;



