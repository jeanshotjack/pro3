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

          {/* <p className="font-main">
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


            <div className="form-group">
              <label for="post-text"><medium className="bolder-text">New Post</medium></label>
              <input type="text" id="post-text" className="form-control" aria-describedby="post-text" placeholder="*Title*" />
            </div>

            <div className="form-group">
              <label for="post-description">Post</label>
              <textarea className="form-control" id="post-description" aria-describedby="post-description"
                placeholder="*Feelings*"></textarea>
            </div>
          </div> */}


          <div className="sidenav">
            {/* <a>
              <img alt="" src={require("../ProfilePage/profile.png")} className="rounded-circle profilePic" />
            </a> */}
            <p className="font-main">
              Hello! (Tom){props.username}
            </p>
            {/* <p className="font-main">
            Profile: {props.userprofile}
          </p> */}
            <p className="font-main">
              Pronouns: {props.pronouns}
            </p>
            <p className="font-main">
              User Name: {props.username}
            </p>
            <p className="font-main">
              Social Media: {props.social}
            </p>
            <div className="form-group">
              <label for="post-text"><h4 className="bolder-text">New Post</h4></label>
              <input type="text" id="post-text" className="form-control" aria-describedby="post-text" placeholder="*Title*" />
            </div>

            <div className="form-group">
              <label for="post-description">Post</label>
              <textarea className="form-control" id="post-description" aria-describedby="post-description"
                placeholder="*Feelings*"></textarea>
            </div>
          </div>
        </Col>
      </Row>
    </ListItem >
  );
}

export default SideBar;