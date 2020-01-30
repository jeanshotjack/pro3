import React from "react";
import Modal from "react-bootstrap/Modal";
import {render} from 'react-dom';
import { Button} from 'react-bootstrap';


function UserInfo(props) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
      <>
        <Button variant="secondary" data-index={props.user} onClick={handleShow}>
        @{props.user}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>@{props.user}'s Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>Username: @{props.user}
          Pronouns: {props.pronouns}
          Social: {props.social}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" href="/chat">
              Go to chat
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


  export default UserInfo;