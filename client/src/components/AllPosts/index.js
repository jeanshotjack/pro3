import React from "react";
import ListItem from "../List/index";
import { Row, Col } from "../Grid";

import Like from "../Like"

import { Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

import "./style.css";


function AllPosts(props) {

  const [show, setShow] = React.useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

  }
  

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
          <Button variant="secondary" data-index={props.user} onClick={handleShow}>
        @{props.user}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>@{props.user}'s Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body><p>Username: @{props.user} </p>
          <p>Pronouns: {props.pronouns} </p>
          <p>Social: {props.social}</p></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" href="/chat">
              Go to chat
            </Button>
          </Modal.Footer>
        </Modal>
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
