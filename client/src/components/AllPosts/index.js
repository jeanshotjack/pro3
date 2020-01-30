import React from "react";
import ListItem from "../List/index";
import { Row, Col } from "../Grid";

import Like from "../Like"

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
            <button className="btn btn-secondary" data-index={props.user} onClick={props.handUserPrompt}> @{props.user} </button>
            <button className="btn btn-secondary" data-index={props.index} onClick={props.handleFlagPost}> Flag </button>
            <Like />
            <p className="small">
            Published: {props.postCreated}
          </p>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col size="md-6">
          <p className="small">
            @ {props.user}
          </p>
        </Col>
        <Col size="md-6">
          <p className="small">
            Published: {props.postCreated}
          </p>
        </Col>
      </Row> */}
      <Row>
        <Col size="12 md-12">
          <p>{props.body}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default AllPosts;
