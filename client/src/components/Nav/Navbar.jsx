import React from 'react';
import { Navbar, Button, Dropdown } from 'react-bootstrap';
import "../CSS/General.css";


function NavBar(props) {


  return (

    <div>
      <Navbar className="navbar fixed-top ">
        <Navbar.Brand href="/">
          <a href="/"><img className="noxNav" href="/home" src={require("../Nav/Nox.png")} /></a>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">

          <Dropdown className="dropMenu ml-auto">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Menu
  </Dropdown.Toggle>

            <Dropdown.Menu>

              <Button href="/" className="dropdown-item btn-primary login">Home</Button>

              <Button href="/login" className="dropdown-item btn-primary login">Login</Button>

              <Button href="/signup" className="dropdown-item btn-primary signup">Sign Up</Button>

              <Button href="/chat" className="dropdown-item btn-primary chat">Chat</Button>

              <Button href="/logout" className="dropdown-item btn-primary logout">Logout</Button>

              <Button href="/rules" className="dropdown-item btn-primary logout">Rules</Button>

            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>

      </Navbar>

    </div>


  );
}

export default NavBar;
