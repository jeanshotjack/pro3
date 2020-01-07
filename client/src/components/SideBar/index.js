import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import SubmitPost from "../SubmitPost";
import axios from "axios";

import "./style.css";



function SideBar(props) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
<<<<<<< HEAD
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
            <input type="text" id={post.title} className="form-control" aria-describedby="post-text" placeholder="*Title*" />
          </div>

          <div className="form-group">
            <label for="post-description">Post</label>
            <textarea className="form-control" id={post.body} aria-describedby="post-description"
              placeholder="*Feelings*"></textarea>
          </div>
          <button className="primary" onClick={() => 
            {this.postToDB(props)}
            }>
            Submit
        </button>
=======

          {/* <div class="sidenav">
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


          <div class="sidenav">
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

>>>>>>> 66b4b3af81bc16fcd0d9e8c11090e2ef6a5700ee
        </Col>
      </Row>
    </ListItem>
  );
}

export default SideBar;