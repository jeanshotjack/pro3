import React from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function NavBar(props) {
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">NOBIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
<<<<<<< HEAD
  
            <Button href="#login" variant="outline-success">Login</Button>
            {" "}
            <Button href="#signup" variant="outline-success">Sign Up</Button>
            
=======
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button href="/login" variant="outline-success">Login</Button>
            <Button href="/signup" variant="outline-success">Sign Up</Button>
>>>>>>> 317fd6023ddfa0b6310f601e8b24277d4e2a7cd3

          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
