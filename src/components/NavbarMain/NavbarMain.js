import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/smart-mavuno-logo-zip-file/logo-color.png';

const NavbarMain = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showRegistrationDropdown, setShowRegistrationDropdown] = useState(false);
  const [showMoreInsightsDropdown, setShowMoreInsightsDropdown] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false, false]);
  const [expand, setExpand] = useState(false);

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
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {
                  handleActiveNav(0);
                  closeNav();
                }}
              >
                Home
              </NavLink>

              <NavDropdown
                show={showServicesDropdown}
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link
                    to="/services"
                    style={{ textDecoration: "none" }}
                    className={styles.dropicon}
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                  >
                    <span className={`${styles.nav_text} my-auto ${activeNav[3] ? styles.active : ""}`}>
                      Resources
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/projects"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Projects & WorkShops
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/modernfarming"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Modern Farming
                  </NavLink>

                  </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/landleasing"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Land Leasing
                  </NavLink>

                  </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/farmlabour"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Farm Labour 
                  </NavLink>

                </NavDropdown.Item>
              
              </NavDropdown>

              {/* More Insights Dropdown with About Us and Contact Us */}
              <NavDropdown
                show={showMoreInsightsDropdown}
                onMouseEnter={() => setShowMoreInsightsDropdown(true)}
                onMouseLeave={() => setShowMoreInsightsDropdown(false)}
                className={`${styles.nav_text} nav-link`}
                title="More Insights"
                id="more-insights-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/aboutUs"
                    className={styles.dropdownText}
                    onClick={() => {
                      handleActiveNav(4);
                      closeNav();
                    }}
                  >
                    About Us
                  </NavLink>

                  <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/blog"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Articles & Blogs
                  </NavLink>
                </NavDropdown.Item>

                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/contactUs"
                    className={styles.dropdownText}
                    onClick={() => {
                      handleActiveNav(4);
                      closeNav();
                    }}
                  >
                    Contact Us
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Registration Dropdown */}
              <NavDropdown
                show={showRegistrationDropdown}
                onMouseEnter={() => setShowRegistrationDropdown(true)}
                onMouseLeave={() => setShowRegistrationDropdown(false)}
                className={`${styles.nav_text} nav-link`}
                title="Registration"
                id="nav-registration-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/signup"
                    className={styles.dropdownText}
                    onClick={() => {
                      handleActiveNav(5);
                      closeNav();
                    }}
                  >
                    Signup
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/login"
                    className={styles.dropdownText}
                    onClick={() => {
                      handleActiveNav(5);
                      closeNav();
                    }}
                  >
                    Login
                  </NavLink>
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
