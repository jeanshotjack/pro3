import React from "react";
import { Row, Col } from "../Grid";
<<<<<<< HEAD

=======
>>>>>>> f8508493f52fe39cfbe2e6e73476335af3729e21
import axios from "axios";
// import SideBar from "../SideBar";
import API from "../../utils/API";

import "./style.css";
// import console = require("console");

class PostForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            postTitle: "",
            postBody: "",
            user: "",
            pronouns: "",
            social: ""
        }
    }


    getUser = () => {
        API.getUser()
            .then(res => {
                console.log("get user")
                this.setState({
                    user: res.data.user.username,
                    pronouns: res.data.user.pronouns,
                    social: res.data.user.social
                })
                console.log(res)
            })
            .catch(err => console.log(err));
    };
    getPosts = () => {
        API.getPosts()
          .then(res => 
            this.setState({ postTitle: res.data.title,
            user: res.data.user,
        postBody: res.data.body }))
          .catch(err => console.log(err));
      };
    

    componentDidMount = () => {
        this.getUser();
    }

    handleTitleInput = (event) => {
       
        this.setState({ postTitle: event.target.value })
        console.log(this.state.postTitle)
    }
    handleBodyInput = (event) => {
        
        this.setState({ postBody: event.target.value })
        console.log(this.state.postBody)

    }
    
    handleSubmit(event) {

        console.log("Submitted!")
        console.log(this.props)
        console.log(this.state.postBody, this.state.postTitle)
        // const dbPost = new Post(event.target);
        // axios.post("/api/posts", dbPost)
        //     .catch(err => console.log(err))

        API.savePost({
            title: this.state.postTitle,
            body: this.state.postBody,
            user: this.state.user

        }).then(response => {
            console.log(response);
            this.getPosts();
            window.location.reload();
        })
            .catch(err => console.log(err))
    }

    render() {
        return (
            
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">


                        <div className="container-fluid sidenav">

                            <img className="profoimg" src={require("../PostForm/profileSidebar.png")} />
                            <hr />
                            {/* can we please change this font */}
                            <p className="sideFont">
                                @ {this.props.username}
                            </p>

                            {/* <p className="sideFont">
                                User Name: {this.props.username}
                            </p> */}

                            <p className="sideFont">
                                Pronouns: {this.props.pronouns}
                            </p>

                            <p className="sideFont">
                                Social Media: {this.props.social}
                            </p>

                            <div className="form-group">
                                <label htmlFor="title">Post Title</label>
                                <input id="title" onChange={this.handleTitleInput} value={this.state.postTitle} name="title" type="text" />

                                <label htmlFor="body">Post Body</label>
                                <input id="body" value={this.state.postBody} onChange={this.handleBodyInput} name="body" type="text" />


                                <button type="submit" onClick={this.handleSubmit}>Submit</button>

                            </div>


                        </div>

                    </Col>
                </Row>
         
            // <SideBar handleTitle = {this.handleTitleInput} handleBody = {this.handleBodyInput} handleSubmit={this.handleSubmit}/>
        );
    }
}
export default PostForm;




