import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import AllPosts from "../components/AllPosts";
import PostForm from "../components/PostForm";
import API from "../utils/API";
// import mock_posts from "../mock_posts.json";

class Main extends Component {
  state = {
    username: "(username)",
    pronouns: "",
    social: "",
    mock_posts: [],
    flag: false,
    liked: false,
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
      .then(res => {
        if(!res.data.user) {
          this.setState({ 
            redirectTo:"/login"
          })
        } else {
          console.log("get user")
          this.setState({ User: res.data, 
          username: res.data.user.username,
          pronouns: res.data.user.pronouns,
          social: res.data.user.social })
          console.log(res)
        }
        })      
        .catch(err => console.log(err));


  };

  getPosts = () => {
    console.log("got posts?")
    API.getPosts()
      .then(res => 
        this.setState({ mock_posts: res.data }))

      .catch(err => console.log(err));
  };

  handleFlagPost = event => {

    const id = event.target.id;
    console.log(id)
    API.getPosts()
      .then(res =>
        this.setState({ flag: true, })
      )
      .catch(err => console.log(err));
  };


handleUserPrompt = event => {

  const id = event.target.id;
  console.log(id)
}

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
                user={obj.user}
                postCreated={obj.postCreated}
                body={obj.body}
                liked={obj.liked}

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
