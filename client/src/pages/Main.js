import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import AllPosts from "../components/AllPosts";
import PostForm from "../components/PostForm";

import API from "../utils/API";
// import mock_posts from "../mock_posts.json";

class Main extends Component {
  state = {
    username: "",
    pronouns: "",
    social: "",
    mock_posts: [],
    flag: false,
    error: "",
  };

  componentDidMount() {
    console.log("loaded")
    this.getUser();
    this.getPosts();
  }

  getUser = () => {
    API.getUser()
      .then(res => {
        console.log("get user")
        this.setState({ User: res.data, 
        username: res.data.user.username,
        pronouns: res.data.user.pronouns,
        social: res.data.user.social })
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  getPosts = () => {
    API.getPosts()
      .then(res => 
        this.setState({ mock_posts: res.data }))
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



  render() {
    return (
      <Container fluid>

        <div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <img className="noxLogo" src={require("../../src/components/NoxLogo/Nox2.png")} />
            </div>
          </div>
        </div>
        <Row>

          <Col size="md-2">
            <PostForm
              username={this.state.username}
              pronouns={this.state.pronouns}
              social={this.state.social}
            />
          </Col>
          <Col size="md-10">
            {this.state.mock_posts.reverse().map((obj, index) => {
              return <AllPosts
            
                title={obj.title}
                user={obj.user}
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

    );

  }
}

export default Main;
