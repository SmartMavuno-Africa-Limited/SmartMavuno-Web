import { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/logo/logo.png';
import SmartMavunoBottomNav from '../UI/bottomNav';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const NavbarMain = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMoreInsightsDropdown, setShowMoreInsightsDropdown] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    resources: false,
    more: false
  });
  const [activeNav, setActiveNav] = useState([true, false, false, false, false]);
  const [expand, setExpand] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const closeNav = () => {
    setIsClosing(true);
    setTimeout(() => {
      setExpand(false);
      setIsClosing(false);
    }, 300);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  useEffect(() => {
    if (!isMobile || !expand) return;

    const handleClickOutside = (e) => {
      const dropdownContainers = document.querySelectorAll(`.${styles.mobileDropdownContainer}`);
      const isClickInsideDropdown = Array.from(dropdownContainers).some(container =>
        container.contains(e.target)
      );
      
      if (!isClickInsideDropdown) {
        setMobileDropdowns({ resources: false, more: false });
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, expand]); 

  useEffect(() => {
    if (isMobile) {
      setMobileDropdowns({ resources: false, more: false });
      closeNav();
    }
  }, [location.pathname, isMobile]); 

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    let temp = [false, false, false, false, false];
    
    if (path === "/") temp[0] = true;
    else if (path === "/loans") temp[1] = true;
    else if (path === "/community") temp[2] = true;
    else if (path === "/farmlabour") temp[3] = true;
    else if (["/aboutUs", "/contactUs"].includes(path)) temp[4] = true;
    
    setActiveNav(temp);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  }, [location.pathname]);

  const handleActiveNav = (i) => {
    let temp = activeNav.map(() => false);
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
    closeNav();
  };

  return (
    <>
      <Navbar
        className={`${styles.customNavbar} ${scrolled ? styles.scrolled : ''} ${isMobile ? styles.mobileNavbar : ''} ${isClosing ? styles.closing : ''}`}
        variant="light"
        expand="lg"
        fixed="top"
        expanded={expand}
        onToggle={() => {
          if (!isClosing) {
            setExpand(!expand);
          }
        }}
      >
        <Container fluid={isMobile}>
          <Navbar.Brand href="/" className={`${styles.navbarBrandCustom} ${isMobile ? styles.mobileBrand : ''}`}>
            <img 
              src={logo} 
              alt="smartmavuno Logo" 
              className={`${styles.navbarLogo} ${isMobile ? styles.mobileLogo : ''}`} 
              style={{
                transform: 'scale(1.2)',
                transformOrigin: 'center'
              }}
            />
            {!isMobile && <span className={styles.brandText}></span>}
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className={styles.navbarTogglerCustom}
          >
            {expand ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            {!isMobile ? (
              // Desktop Navigation
              <Nav className={styles.navContainer}>
                <NavLink
                  to="/"
                  className={`${styles.navLinkCustom} ${activeNav[0] ? styles.active : ""}`}
                  onClick={() => handleActiveNav(0)}
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
                      <FaChevronDown className={styles.dropdownIcon} />
                    </span>
                  }
                  id="resources-dropdown"
                >
                  <NavDropdown.Item 
                    className={styles.dropdownItemCustom}
                    onClick={() => handleActiveNav(3)}
                  >
                    <NavLink
                      to="/farmlabour"
                      className={styles.dropdownLinkCustom}
                    >
                      Farm Labour 
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    className={styles.dropdownItemCustom}
                    onClick={() => handleActiveNav(1)}
                  >
                    <NavLink
                      to="/loans"
                      className={styles.dropdownLinkCustom}
                    >
                      Farm Loans 
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavLink
                  to="/community"
                  className={`${styles.navLinkCustom} ${activeNav[2] ? styles.active : ""}`}
                  onClick={() => handleActiveNav(2)}
                >
                  Community
                </NavLink>

                <NavDropdown
                  show={showMoreInsightsDropdown}
                  onMouseEnter={() => setShowMoreInsightsDropdown(true)}
                  onMouseLeave={() => setShowMoreInsightsDropdown(false)}
                  className={styles.navDropdownCustom}
                  title={
                    <span className={`${styles.navLinkCustom} ${activeNav[4] ? styles.active : ""}`}>
                      More
                      <FaChevronDown className={styles.dropdownIcon} />
                    </span>
                  }
                  id="more-insights-dropdown"
                >
                  <NavDropdown.Item 
                    className={styles.dropdownItemCustom}
                    onClick={() => handleActiveNav(4)}
                  >
                    <NavLink
                      to="/aboutUs"
                      className={styles.dropdownLinkCustom}
                    >
                      About Us
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    className={styles.dropdownItemCustom}
                    onClick={() => handleActiveNav(4)}
                  >
                    <NavLink
                      to="/contactUs"
                      className={styles.dropdownLinkCustom}
                    >
                      Contact Us
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    className={styles.dropdownItemCustom}
                    onClick={() => handleActiveNav(4)}
                  >
                  </NavDropdown.Item>
                </NavDropdown>
                
                <Button
                  href="https://forms.gle/XQRnEyAVb5KuDiyj9"
                  target="_blank"
                  className={styles.ctaButton}
                >
                  GET STARTED
                </Button>
              </Nav>
            ) : (
              // Mobile Navigation with improved dropdowns
              <Nav className={styles.mobileNavContainer}>
                <NavLink
                  to="/"
                  className={`${styles.mobileNavLink} ${activeNav[0] ? styles.mobileActive : ""}`}
                  onClick={() => handleActiveNav(0)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/community"
                  className={`${styles.mobileNavLink} ${activeNav[2] ? styles.mobileActive : ""}`}
                  onClick={() => handleActiveNav(2)}
                >
                  Community
                </NavLink>

                {/* Resources Dropdown for Mobile */}
                <div className={styles.mobileDropdownContainer}>
                  <button 
                    className={`${styles.mobileDropdownToggle} ${activeNav[1] || activeNav[3] ? styles.mobileDropdownActive : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMobileDropdown('resources');
                    }}
                  >
                    Resources
                    <span className={`${styles.dropdownArrow} ${mobileDropdowns.resources ? styles.dropdownArrowOpen : ""}`}>
                      {mobileDropdowns.resources ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  
                  <div className={`${styles.mobileDropdownContent} ${mobileDropdowns.resources ? styles.mobileDropdownShow : ""}`}>
                    <NavLink
                      to="/farmlabour"
                      className={`${styles.mobileNavLink} ${styles.mobileDropdownLink} ${activeNav[3] ? styles.mobileActive : ""}`}
                      onClick={() => {
                        handleActiveNav(3);
                        setMobileDropdowns({ resources: false, more: false });
                      }}
                    >
                      Farm Labour
                    </NavLink>
                    <NavLink
                      to="/loans"
                      className={`${styles.mobileNavLink} ${styles.mobileDropdownLink} ${activeNav[1] ? styles.mobileActive : ""}`}
                      onClick={() => {
                        handleActiveNav(1);
                        setMobileDropdowns({ resources: false, more: false });
                      }}
                    >
                      Farm Loans
                    </NavLink>
                  </div>
                </div>

                {/* More Dropdown for Mobile */}
                <div className={styles.mobileDropdownContainer}>
                  <button 
                    className={`${styles.mobileDropdownToggle} ${activeNav[4] ? styles.mobileDropdownActive : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMobileDropdown('more');
                    }}
                  >
                    More
                    <span className={`${styles.dropdownArrow} ${mobileDropdowns.more ? styles.dropdownArrowOpen : ""}`}>
                      {mobileDropdowns.more ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  
                  <div className={`${styles.mobileDropdownContent} ${mobileDropdowns.more ? styles.mobileDropdownShow : ""}`}>
                    <NavLink
                      to="/aboutUs"
                      className={`${styles.mobileNavLink} ${styles.mobileDropdownLink} ${activeNav[4] ? styles.mobileActive : ""}`}
                      onClick={() => {
                        handleActiveNav(4);
                        setMobileDropdowns({ resources: false, more: false });
                      }}
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/contactUs"
                      className={`${styles.mobileNavLink} ${styles.mobileDropdownLink} ${activeNav[4] ? styles.mobileActive : ""}`}
                      onClick={() => {
                        handleActiveNav(4);
                        setMobileDropdowns({ resources: false, more: false });
                      }}
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>                
                <Button
                  href="https://forms.gle/XQRnEyAVb5KuDiyj9"
                  target="_blank"
                  className={styles.mobileCtaButton}
                  onClick={closeNav}
                >
                  GET STARTED
                </Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Bottom Navigation for Mobile Only */}
      {isMobile && <SmartMavunoBottomNav />}
    </>
  );
};

export default NavbarMain;