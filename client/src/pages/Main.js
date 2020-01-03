import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import AllPosts from "../components/AllPosts";

import API from "../utils/API";

class Main extends Component {
  state = {
    Post: [],
    flag: false,
    error: "",
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ Post: res.data })
      )
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
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>NOBIS</h1>
            </Jumbotron>
            {this.state.Post.map((obj, index) => {
              return <AllPosts
                title={obj.title}
                User={obj.User}
                postCreated={obj.postCreated}
                // link={obj.link}
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
