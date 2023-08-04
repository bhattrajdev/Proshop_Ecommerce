import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="bg-body-tertiary "
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
                <LinkContainer to="/cart">
              <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
                </LinkContainer>
              <LinkContainer to="/login">
            <Nav.Link>
                <i className="fas fa-user"></i> User
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
