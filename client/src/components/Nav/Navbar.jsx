import React from 'react';
import { Navbar, Button, NavDropdown } from 'react-bootstrap';
import "../CSS/General.css";


function NavBar(props) {


  return (

    <div>
      <Navbar fluid className="navbar fixed-top ">
        <Navbar.Brand href="/">
          <a href="/"><img className="noxNav" href="/home" src={require("../Nav/Nox.png")} /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>

          <NavDropdown className="dropDown secondary"
            eventKey={3}
            title="Menu"
          >

            <Button href="/" className="dropdown-item btn-primary login">Home</Button>

            <Button href="/login" className="dropdown-item btn-primary login">Login</Button>

            <Button href="/signup" className="dropdown-item btn-primary signup">Sign Up</Button>

            <Button href="/chat" className="dropdown-item btn-primary chat">Chat</Button>

            <Button href="/logout" className="dropdown-item btn-primary logout">Logout</Button>

          </NavDropdown>

        </Navbar.Collapse>
      </Navbar>

      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <img className="noxLogo" src={require("../NoxLogo/Nox2.png")} />
          </div>
        </div>
      </div>



    </div>


  );
}

export default NavBar;
