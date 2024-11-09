import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserPlus, FaHome, FaCloudSun } from 'react-icons/fa';
import styles from "./NavbarMain.module.css";
import logo from '../../assets/smart-mavuno-logo-zip-file/logo-color.png';  

const NavbarMain = () => {
  const [activeNav, setActiveNav] = useState([true, false, false, false, false, false]);
  const [expand, setExpand] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showMoreInsightsDropdown, setShowMoreInsightsDropdown] = useState(false);
  const [showRegistrationDropdown, setShowRegistrationDropdown] = useState(false);

  const closeNav = () => {
    setExpand(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav.map(() => false);
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
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src={logo} alt="Mebiut Logo" style={{ width: '140px', height: 'auto', marginRight: '8px' }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              {/* Home with dropdown for Market Place and Community */}
              <NavDropdown
                title={<><FaHome /> Home</>}
                id="home-dropdown"
                className={`${styles.nav_text} nav-link`}
                align="start"
                show={showHomeDropdown}
                onMouseEnter={() => setShowHomeDropdown(true)}
                onMouseLeave={() => setShowHomeDropdown(false)}
                style={{ marginTop: "8px" }}
              >
                <NavDropdown.Item as={NavLink} to="/marketplace" onClick={() => { handleActiveNav(0); closeNav(); }}>
                  Market Place
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/community" onClick={() => { handleActiveNav(0); closeNav(); }}>
                  Community
                </NavDropdown.Item>
                <NavDropdown.Item as="a" href="https://smartmvua-forecast.netlify.app/" target="_blank" rel="noopener noreferrer" onClick={() => { handleActiveNav(0); closeNav(); }}>
                  Weather Forecast
                </NavDropdown.Item>

              </NavDropdown>
                      {/* Resources dropdown with Projects, Workshops, Modern Farming, Articles/Blogs */}
              <NavDropdown
                title="Resources"
                id="resources-dropdown"
                className={`${styles.nav_text} nav-link`}
                align="start"
                show={showResourcesDropdown}
                onMouseEnter={() => setShowResourcesDropdown(true)}
                onMouseLeave={() => setShowResourcesDropdown(false)}
                style={{ marginTop: "8px" }}
              >
                <NavDropdown.Item as={NavLink} to="/projects" onClick={() => { handleActiveNav(3); closeNav(); }}>
                  Projects
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/workshops" onClick={() => { handleActiveNav(3); closeNav(); }}>
                  Workshops
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/modern-farming" onClick={() => { handleActiveNav(3); closeNav(); }}>
                  Modern Farming
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blogs" onClick={() => { handleActiveNav(3); closeNav(); }}>
                  Articles/Blogs
                </NavDropdown.Item>
              </NavDropdown>

              {/* More Insights dropdown with About Us and Contact Us */}
              <NavDropdown
                title="More Insights"
                id="more-insights-dropdown"
                className={`${styles.nav_text} nav-link`}
                align="start"
                show={showMoreInsightsDropdown}
                onMouseEnter={() => setShowMoreInsightsDropdown(true)}
                onMouseLeave={() => setShowMoreInsightsDropdown(false)}
                style={{ marginTop: "8px" }}
              >
                <NavDropdown.Item as={NavLink} to="/aboutUs" onClick={() => { handleActiveNav(4); closeNav(); }}>
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/contactUs" onClick={() => { handleActiveNav(4); closeNav(); }}>
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>

              {/* Registration dropdown with SignUp and Login */}
              <NavDropdown
                title="Registration"
                id="registration-dropdown"
                className={`${styles.nav_text} nav-link`}
                align="start"
                show={showRegistrationDropdown}
                onMouseEnter={() => setShowRegistrationDropdown(true)}
                onMouseLeave={() => setShowRegistrationDropdown(false)}
                style={{ marginTop: "8px" }}
              >
                <NavDropdown.Item as={NavLink} to="/signup" onClick={() => { handleActiveNav(5); closeNav(); }}>
                  <FaUserPlus /> Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/login" onClick={() => { handleActiveNav(5); closeNav(); }}>
                  <FaSignInAlt /> Login
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
