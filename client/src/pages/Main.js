import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Slideshow from "../components/ImgSlide/Slideshow";
// import Nav from "../components/Nav/Navbar";


class Main extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>NOBIS</h1>
            </Jumbotron>
            <Slideshow />
          </Col>
        </Row>
      </Container>
      
    );



  }
}

export default Main;
