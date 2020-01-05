import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "../CSS/General.css";


function NavBar(props) {


  return (

    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">NOX</Navbar.Brand>
        <Navbar fixed="top" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="container-fluid">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Button href="/login" variant="success">Login</Button></li>
              
              <li className="nav-item"><Button href="/signup" variant="success">Sign Up</Button></li>
            </ul>


          </div>
        </Navbar.Collapse>
      </Navbar>

    </div >
  );
}

export default NavBar;
