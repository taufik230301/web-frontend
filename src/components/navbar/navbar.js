import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";
import "./navbar.css";
import Logo from "../../images/logo.jpg";
const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="topNav">
      <Navbar color="light" className="topNav" light expand="md">
        <Link to="banner" smooth={true} duration={1000}>
          <img src={Logo} width="50px" alt="Palembang Digital Logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="event" smooth={true} duration={1000}>
                Acara
              </Link>
            </NavItem>
            <NavItem>
              <Link to="tentang" smooth={true} duration={1000}>
                Tentang
              </Link>
            </NavItem>
            <NavItem>
              <Link to="footer" smooth={true} duration={1000}>
                Kontak
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
