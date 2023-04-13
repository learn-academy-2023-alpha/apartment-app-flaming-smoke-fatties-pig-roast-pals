import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Navbar
          className="navbar-footer"
          color="dark"
          light={true}
          dark={true}
          expand="md"
          fixed="bottom"
        >
          <NavbarBrand href="/" className="brand-name">
            Apartment App
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Back to Top</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>&copy; Alpha 2023 | Josh - Ira - Dennis - Joey </NavbarText>
        </Navbar>
      </footer>
    </>
  );
};

export default Footer;