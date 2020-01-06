import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "../CSS/General.css";

function NavBar(props) {


  return (

    <div>
      <Navbar className="navbar fixed-top bg-dark" expand="lg">
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <img className="noxNav" href="#home" src={require("../Nav/noxNavbar.png")} />

          <div className="container-fluid">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item active btn"><Button href="/logout" variant="primary">Log Out</Button></li>
            </ul>
          </div >
        </Navbar.Collapse>
      </Navbar>
      
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8"></div>
            <img className="noxLogo" src={require("../NoxLogo/noxLogo.png")} />
          </div>
        </div>
      </div>
      
      <div className="containter-fluid">
      <footer className="py-4 bg-dark text-white-50 page-footer ">
        <div className="container text-center">
          <medium>Copyright &copy; NOX 2020</medium>
          <small>Jack Shalenkova | Bai-Ling Zhang | Sean Melvin | Mustafa Muhammad</small>
        </div>
      </footer>
      </div>


    </div>


  );
}

export default NavBar;
