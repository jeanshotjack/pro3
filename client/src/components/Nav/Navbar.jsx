import { Navbar, Button, Dropdown } from 'react-bootstrap';
import "../CSS/General.css";
import React, { Component, useState } from "react";
import API from "../../utils/API";



class Bar extends Component {
  constructor(props) {
      super(props)
      this.state = {
          redirectTo: null
      }
  }
handleLogout = () => {
  console.log("clicked Logout")
  API.logout()
}

render() {
  return (
    <div>
      <Navbar className="navbar fixed-top ">
        <Navbar.Brand href="/">
          <a href="/"><img className="noxNav" value="/" href="/home" src={require("../Nav/Nox.png")} /></a>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Dropdown className="dropMenu ml-auto">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Menu
  </Dropdown.Toggle>

            <Dropdown.Menu>

              <Button href="/" value="/" className="dropdown-item btn-primary login">Home</Button>

              <Button href="/chat" value="/chat" className="dropdown-item btn-primary login">Chat</Button>

              <Button href="/login" value="/login" className="dropdown-item btn-primary login">Login</Button>

              <Button href="/signup" value="/signup" className="dropdown-item btn-primary signup">Sign Up</Button>

          {/* </NavDropdown> */}

              <Button onClick={() => this.handleLogout()} href = "/login" className="dropdown-item btn-primary logout">Logout</Button>

              <Button href="/rules" className="dropdown-item btn-primary logout">Rules</Button>

            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>

      </Navbar>

    </div>


  );
}
}
export default Bar;
