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
        <a href="/"><img className="noxNav" href="/home" src={require("../Nav/noxNavbar.png")} /></a>   
        <div>
        <Button href="/login" className="primary login">Login</Button>
        {"  "}
        <Button href="/signup" className="primary signup">Sign Up</Button>
        {"  "}
        <Button href="/chat" className="primary chat">Chat</Button>
        {"  "}
        <Button href="/logout" className="primary logout">Logout</Button>
      </div>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
          <img className="noxLogo" src={require("../NoxLogo/noxLogoMain.png")} />
          </div>
        </div>
      </div>

      

      {/* <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-title text-center">
                <h4>Login</h4>
              </div>
              <div className="d-flex flex-column text-center">
              </div>
            </div>
          </div>
        </div> */}

        <br />

        {/* <div className="containter-fluid">
      <footer className="py-4 bg-dark text-white-50 page-footer ">
        <div className="container text-center">
          <medium>Copyright &copy; NOX 2020</medium>
          <small>Jack Shalenkova | Bai-Ling Zhang | Sean Melvin | Mustafa Muhammad</small>
        </div>
      </footer>
      </div> */}


    </div>


  );
}

export default NavBar;
