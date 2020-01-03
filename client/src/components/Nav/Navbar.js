import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function NavBar(props) {
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">NOBIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Button id="loginBtn" href="/login" variant="outline-success">Login</Button>
            <Button id="signUpBtn" href="/signup" variant="outline-success">Sign Up</Button>
            <Button id="chatBtn" href="/chat" variant="outline-success">Chat</Button>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
