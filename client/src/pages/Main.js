import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import AllPosts from "../components/AllPosts";

import API from "../utils/API";

class Main extends Component {
  state = {
    userposts: [],
    flag: false,
    error: "",
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ userposts: res.data })
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
            {this.state.userposts.map((obj, index) => {
              return <AllPosts
                title={obj.title}
                author={obj.author}
                image={obj.image}
                publishedDate={obj.publishedDate}
                link={obj.link}
                description={obj.description}

                idInDatabase={obj._id}
                savedIndex={index}
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
