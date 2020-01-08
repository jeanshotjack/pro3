import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import AllPosts from "../components/AllPosts";
import PostForm from "../components/PostForm";
import Login from "./Login"

import API from "../utils/API";
import {Redirect} from 'react-router-dom'
// import mock_posts from "../mock_posts.json";

class Main extends Component {
  state = {
    username: "(username)",
    pronouns: "",
    social: "",
    mock_posts: [],
    flag: false,
    error: "",
    redirectTo: null
  };

  componentDidMount() {
    console.log("loaded")
    this.getUser();
    this.getPosts();
  }

  getUser = () => {
    API.getUser()
      .then(res => {console.log("get user")
      
        this.setState({ User: res.data })
    console.log(res)})
      .catch(err => console.log(err));
  };

  getPosts = () => {
    API.getPosts()
      .then(res => this.setState({ mock_posts: res.data }))
      .catch(err => console.log(err));
  };

  handleFlagPost = event => {
    event.preventDefault();
    const id = event.target.id;
    console.log(id)
    API.getPosts()
      .then(res =>
        this.setState({ flag: true, })
      )
      .catch(err => console.log(err));
  };
// isLoggedIn = () => {
//   if (res.status === 200) { 
//     this.setState({
//       redirect: false,
//     });
// }
// }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-2">
            <PostForm 
            username={this.state.username}
            pronouns={this.state.pronouns}
            social={this.state.social}
            />
          </Col>
          <Col size="md-10">
            {this.state.mock_posts.map((obj, index) => {
              return <AllPosts
                title={obj.title}
                User={obj.User}
                postCreated={obj.postCreated}
                body={obj.body}

                idInDatabase={obj._id}
                index={index}
                handleFlagPost={this.handleFlagPost}
              />

            })}
          </Col>
        </Row>
      </Container>
</div>
    );

  }
}
}

export default Main;
