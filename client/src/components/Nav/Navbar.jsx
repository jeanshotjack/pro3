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

<<<<<<< HEAD
          <NavDropdown className="dropDown secondary"
=======
          {/* <NavDropdown className="dropDown secondary"
>>>>>>> 21a6c60cb86ab3e5b60db45f2170f8d92e97754f
            eventKey={3}
            title="Menu" */}
          >
<<<<<<< HEAD
            <Button href="/" className="dropdown-item btn-primary login">Home</Button>
=======
>>>>>>> 21a6c60cb86ab3e5b60db45f2170f8d92e97754f

            <Button href="/login" className="dropdown-item btn-primary login">Login</Button>s

            <Button href="/signup" className="dropdown-item btn-primary signup">Sign Up</Button>

            <Button href="/chat" className="dropdown-item btn-primary chat">Chat</Button>

            <Button href="/logout" className="dropdown-item btn-primary logout">Logout</Button>

          </NavDropdown>

<<<<<<< HEAD
        </Navbar.Collapse>
      </Navbar>
=======
          {/* </NavDropdown> */}
>>>>>>> 21a6c60cb86ab3e5b60db45f2170f8d92e97754f

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
