import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "../CSS/General.css";

function NavBar(props) {


  return (

    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <img className="noxNav" href="#home" src={require("../Nav/noxNavbar.png")} />
          <div className="container-fluid">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Button href="/login" variant="primary">Login</Button></li>

              <li className="nav-item"><Button href="/signup" variant="primary">Sign Up</Button></li>
            </ul>


          </div>
        </Navbar.Collapse>
      </Navbar>

    </div >
  );
}

export default NavBar;
