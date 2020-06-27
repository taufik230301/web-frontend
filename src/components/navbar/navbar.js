import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";
import { Link as GatsbyLink } from "gatsby";
import "./navbar.css";
const NavbarDefault = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [currentPath]);

  return (
    <div id="topNav">
      <Navbar color="light" className="topNav" light expand="md">
        <GatsbyLink to="/">
          <img alt="Palembang Digital" src={"/logo.png"} width="50px" />
        </GatsbyLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {!currentPath.startsWith("/patal-team") ? (
                <Link
                  to={`event`}
                  smooth={true}
                  duration={1000}
                  className="NavLink">
                  Acara
                </Link>
              ) : (
                <GatsbyLink to="/#event" className="NavLink">
                  Acara
                </GatsbyLink>
              )}
            </NavItem>
            <NavItem>
              {!currentPath.startsWith("/patal-team") ? (
                <Link
                  to={`tentang`}
                  smooth={true}
                  duration={1000}
                  className="NavLink">
                  Tentang
                </Link>
              ) : (
                <GatsbyLink to="/#tentang" className="NavLink">
                  Tentang
                </GatsbyLink>
              )}
            </NavItem>
            <NavItem>
              {!currentPath.startsWith("/patal-team") ? (
                <Link
                  to={`footer`}
                  smooth={true}
                  duration={1000}
                  className="NavLink">
                  Kontak
                </Link>
              ) : (
                <GatsbyLink to="/#footer" className="NavLink">
                  Kontak
                </GatsbyLink>
              )}
            </NavItem>
            <NavItem
              className={currentPath.startsWith("/patal-team") ? "active" : ""}>
              <GatsbyLink to="/patal-team" className="NavLink">
                Team
              </GatsbyLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarDefault;
