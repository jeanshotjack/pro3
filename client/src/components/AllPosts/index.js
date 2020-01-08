import React from "react";
import ListItem from "../List/index";
import { Row, Col } from "../Grid";

import "./style.css";

function AllPosts(props) {

  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="title-font">
            {props.title}
          </h3>
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <button className="btn btn-secondary" data-index={props.User} onClick={props.handUserPrompt}> About this user </button>
            <button className="btn btn-secondary" data-index={props.index} onClick={props.handleFlagPost}> Flag </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">
            User: {props.userId}
          </p>
        </Col>
        <Col size="md-6">
          <p className="font-italic small">
            Published: {props.postCreated}
          </p>
        </Col>
      </Row>
      <Row>
        <Col size="12 md-12">
          <p>{props.body}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default AllPosts;
