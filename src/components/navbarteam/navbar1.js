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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="topNav">
      <Navbar color="light" className="topNav" light expand="md">
        <Link to="banner" smooth="true" duration={1000}>
          <img alt="Palembang Digital" src={"/logo.jpg"} width="50px" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to={`/`} smooth="true" duration={1000} className="NavLink">
                Acara
              </Link>
              <Link to={`/`} smooth="true" duration={1000} className="NavLink">
                Tentang
              </Link>
              <Link to={`/`} smooth="true" duration={1000} className="NavLink">
                Kontak
              </Link>
              <NavLink href="/patal-team" className="NavLink">
                Team
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
