import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import SubmitPost from "../SubmitPost";

import "./style.css";

function SideBar(props) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <p>
            Hello! {props.username}
          </p>
          <p >
            Pronouns: {props.pronouns}
          </p>
          <p >
            User Name: {props.username}
          </p>
          <p >
            Social Media: {props.social}
          </p>
          
          <div className="form-group">
            <label for="post-text">New Post</label>
            <input type="text" id="post-text" className="form-control" aria-describedby="post-text" placeholder="*Title*" />
          </div>

          <div className="form-group">
            <label for="post-description">Post</label>
            <textarea className="form-control" id="post-description" aria-describedby="post-description"
              placeholder="*Feelings*"></textarea>
          </div>
          <SubmitPost></SubmitPost>
        </Col>
      </Row>
    </ListItem >
  );
}

export default SideBar;