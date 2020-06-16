import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "gatsby";
import "gatsby";
import "./navbar.css";
import Logo from "../../images/logo.jpg";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="topNav">
      <Navbar color="light" className="topNav" light expand="md">
        <Link to="banner" smooth={true} duration={1000}>
          <img src={Logo} width="50px" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to={`/`} smooth={true} duration={1000} className="NavLink">
                Acara
              </Link>
              <Link to={`/`} smooth={true} duration={1000} className="NavLink">
                Tentang
              </Link>
              <Link to={`/`} smooth={true} duration={1000} className="NavLink">
                Kontak
              </Link>
              <NavLink href="/card1/" className="NavLink">
                Team Page
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
