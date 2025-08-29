import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/smart-mavuno-logo-zip-file/logo-color.png';

const NavbarMain = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMoreInsightsDropdown, setShowMoreInsightsDropdown] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false, false]);
  const [expand, setExpand] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeNav = () => {
    setExpand(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }

    // Add scroll event listener for navbar background change
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        className={`${styles.customNavbar} ${scrolled ? styles.scrolled : ''}`}
        variant="light"
        expand="lg"
        fixed="top"
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.navbarBrandCustom}>
            <img src={logo} alt="smartmavuno Logo" className={styles.navbarLogo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarTogglerCustom} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navContainer}>
              <NavLink
                to="/"
                className={`${styles.navLinkCustom} ${activeNav[0] ? styles.active : ""}`}
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
                className={styles.navDropdownCustom}
                title={
                  <span className={`${styles.navLinkCustom} ${activeNav[3] ? styles.active : ""}`}>
                    Resources
                  </span>
                }
                id="resources-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItemCustom}>
                  <NavLink
                    to="/farmlabour"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownLinkCustom}
                  >
                    Farm Labour 
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItemCustom}>
                  <NavLink
                    to="/loans"
                    onClick={() => {
                      handleActiveNav(3);
                      closeNav();
                    }}
                    className={styles.dropdownLinkCustom}
                  >
                    Farm Loans 
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                show={showMoreInsightsDropdown}
                onMouseEnter={() => setShowMoreInsightsDropdown(true)}
                onMouseLeave={() => setShowMoreInsightsDropdown(false)}
                className={styles.navDropdownCustom}
                title={<span className={styles.navLinkCustom}>More Insights</span>}
                id="more-insights-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItemCustom}>
                  <NavLink
                    to="/aboutUs"
                    className={styles.dropdownLinkCustom}
                    onClick={() => {
                      handleActiveNav(4);
                      closeNav();
                    }}
                  >
                    About Us
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItemCustom}>
                  <NavLink
                    to="/contactUs"
                    className={styles.dropdownLinkCustom}
                    onClick={() => {
                      handleActiveNav(4);
                      closeNav();
                    }}
                  >
                    Contact Us
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className={styles.dropdownItemCustom}>
                  <NavLink
                    to="/community"
                    className={styles.dropdownLinkCustom}
                    onClick={() => {
                      handleActiveNav(4);
                      closeNav();
                    }}
                  >
                    Community
                  </NavLink>
                </NavDropdown.Item>

              </NavDropdown>
              
              {/* GET STARTED Button */}
              <Button
                href="https://forms.gle/XQRnEyAVb5KuDiyj9"
                target="_blank"
                className={styles.ctaButton}
              >
                GET STARTED
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;