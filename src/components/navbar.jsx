import React from "react";
import {Navbar , Nav , NavDropdown,  Form , FormControl} from 'react-bootstrap'


function NavBar(){
    return(
      <div>
        <Navbar bg="light" expand="lg">
 <NavDropdown title="Brows Categories" id="navbarScrollingDropdown">
        <NavDropdown.Item></NavDropdown.Item>
        <NavDropdown.Item ></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item ></NavDropdown.Item>
      </NavDropdown>

  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      navbarScroll
    >
      <Nav.Link  >What's New </Nav.Link>
      <Nav.Link >Trending</Nav.Link>
      <Nav.Link >For You</Nav.Link>
      <Nav.Link >Shop Products</Nav.Link>
    </Nav>
    <Form className="d-flex"  >
      <FormControl
        type="search"
        placeholder="Search GrabOne"
        className="mr-2"
        aria-label="Search"
      />
     
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
    )
}

    export default NavBar;
