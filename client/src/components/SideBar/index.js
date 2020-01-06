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
          <p className="font-main">
            Hello! (Tom){props.userName}
          </p>
          <p className="font-main">
            Profile: {props.userProfile}
          </p>
          <p className="font-main">
            Pronoun: {props.userPronoun}
          </p>
          <p className="font-main">
            User Name: {props.userName}
          </p>
          <p className="font-main">
            Social Media: {props.userSocialMedia}
          </p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default SideBar;