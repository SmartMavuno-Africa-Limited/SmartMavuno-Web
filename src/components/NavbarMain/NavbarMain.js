import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

import logo from '../../assets/smart-mavuno-logo-zip-file/logo-color.png';  

const NavbarMain = () => {
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false]);
  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand(false);
  }

  const showDropdown = (e) => {
    setShow(!show);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav;
    temp = temp.map((x) => (x = false));
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => { setExpand(prevState => !prevState) }}
        expanded={expand}
      >
        <Container>
          {/* Replace the text with an image logo */}
          <Navbar.Brand href="/" className="logo">
            <img 
              src={logo} 
              alt="SMARTMAVUNO" 
              style={{
                height: '80px',  // Adjust the height as needed
                width: 'auto'    // Maintain aspect ratio
              }} 
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto' }}>
              <NavLink
                to="/"
                className={`nav-link ${activeNav[0] ? 'active' : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(0); closeNav() }}
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutUs"
                className={`nav-link ${activeNav[1] ? 'active' : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(1); closeNav() }}
              >
                About us
              </NavLink>

              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="nav-link"
                title={
                  <Link to="/services" style={{ textDecoration: 'none' }} onClick={() => { handleActiveNav(2); closeNav() }}>
                    <span className={`nav-text ${activeNav[2] ? 'active' : ""}`}>
                      Services
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink to="/sMediaService" onClick={() => { handleActiveNav(2); closeNav() }}>Social Media Marketing</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/hello" onClick={() => { handleActiveNav(2); closeNav() }}>Quality Assurance</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/hello" onClick={() => { handleActiveNav(2); closeNav() }}>Cloud and IoT Based Solutions</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/hello" onClick={() => { handleActiveNav(2); closeNav() }}>IT Consultancy</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/hello" onClick={() => { handleActiveNav(2); closeNav() }}>AI Solutions</NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/contactUs"
                className={`nav-link ${activeNav[3] ? 'active' : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(3); closeNav() }}
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
