import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import "../CSS/General.css";


function NavBar(props) {
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>

      {/* <Navbar class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm"> */}
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">NOBIS</Navbar.Brand>
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



      {/* <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">NOBIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Button id="loginBtn" href="/login" variant="outline-success">Login</Button>
            <Button id="signUpBtn" href="/signup" variant="outline-success">Sign Up</Button>

          </Nav>

        </Navbar.Collapse>
      </Navbar> */}
    </div >
  );
}

export default NavBar;
