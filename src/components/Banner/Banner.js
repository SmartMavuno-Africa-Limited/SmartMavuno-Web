import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight, 
  faShieldAlt, 
  faStore, 
  faSeedling, 
  faShoppingCart,
  faUsers,
  faTools
} from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { 
      src: require('../../assets/farmerpic1.jpg'),
      alt: "Marketplace", 
      title: "Agricultural Marketplace",
      text: "Connect with buyers and sellers in our trusted farming marketplace", 
      icon: faStore,
      buttonLabel: "Explore Marketplace", 
      buttonLink: "https://marketplace.smartmavuno.com/",
      accentColor: "#2E7D32"
    },
    { 
      src: require('../../assets/farmer.jpg'), 
      alt: "Insured Financing", 
      title: "Insured Financing",
      text: "Secure your farming future with our insured loan programs", 
      icon: faShieldAlt,
      buttonLabel: "Learn About Financing", 
      buttonLink: "/loans",
      accentColor: "#1976D2"
    },
    { 
      src: require('../../assets/equipment.jpg'),  
      alt: "Equipment Rentals", 
      title: "Equipment Leasing",
      text: "Access affordable farm equipment and labor services", 
      icon: faTools,
      buttonLabel: "Browse Equipment", 
      buttonLink: "https://marketplace.smartmavuno.com/",
      accentColor: "#7B1FA2"
    },
    { 
      src: require('../../assets/community.jpg'),  
      alt: "Communities", 
      title: "Join Our Regional Communities",
      text: "Connect with local farmers, share insights, and access region-specific resources", 
      icon: faUsers,
      buttonLabel: "Community Hub", 
      buttonLink: "/community",
      accentColor: "#0d4b40"
    },
    { 
      src: require('../../assets/inputs.jpg'), 
      alt: "Farm Inputs", 
      title: "Quality Farm Inputs",
      text: "Get access to high-quality seeds, fertilizers, and farming supplies", 
      icon: faSeedling,
      buttonLabel: "Shop Farm Inputs", 
      buttonLink: "https://marketplace.smartmavuno.com/",
      accentColor: "#FF9800"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 800);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isTransitioning, images.length]);

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setCurrentSlide(index);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToPrevSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToNextSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  // Inline styles
  const styles = {
    bannerContainer: {
      height: "650px",
      position: "relative",
      overflow: "hidden",
      margin: "20px auto",
      maxWidth: "95%", 
      width: "100%",
      borderRadius: "16px",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    slidesContainer: {
      width: "100%",
      height: "100%",
      position: "relative"
    },
    slide: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "scale(1.05)"
    },
    activeSlide: {
      opacity: 1,
      zIndex: 1,
      transform: "scale(1)"
    },
    slideImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
      filter: "brightness(0.7)"
    },
    imageOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      background: "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
    },
    contentContainer: {
      position: "relative",
      zIndex: 2,
      textAlign: "left",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "2.5rem",
      borderRadius: "16px",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
      maxWidth: "500px",
      margin: "0 40px 0 auto",
      animation: "fadeInUp 0.8s ease-out"
    },
    iconContainer: {
      marginBottom: "1.2rem",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2.2rem",
      padding: "0.8rem",
      borderRadius: "50%",
      backgroundColor: "rgba(46, 125, 50, 0.1)"
    },
    slideTitle: {
      fontSize: "2.4rem",
      fontWeight: 800,
      marginBottom: "1rem",
      color: "#1B5E20",
      lineHeight: 1.2
    },
    slideText: {
      fontSize: "1.1rem",
      marginBottom: "2rem",
      color: "#424242",
      lineHeight: 1.6,
      fontWeight: 500
    },
    ctaButton: {
      display: "inline-block",
      padding: "1rem 2.2rem",
      color: "white",
      textDecoration: "none",
      fontWeight: 600,
      borderRadius: "50px",
      transition: "all 0.3s ease",
      border: "2px solid transparent",
      fontSize: "1rem",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
    },
    prevArrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 3,
      cursor: "pointer",
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "1.2rem",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "55px",
      height: "55px",
      transition: "all 0.3s ease",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      left: "25px",
      fontSize: "1.2rem"
    },
    nextArrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 3,
      cursor: "pointer",
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "1.2rem",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "55px",
      height: "55px",
      transition: "all 0.3s ease",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      right: "25px",
      fontSize: "1.2rem"
    },
    dotsContainer: {
      position: "absolute",
      bottom: "25px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      gap: "14px"
    },
    dot: {
      width: "14px",
      height: "14px",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "2px solid white",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
    },
    // Quick links section
    quickLinksContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
      flexWrap: "wrap"
    },
    quickLink: {
      display: "flex",
      alignItems: "center",
      padding: "12px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 600,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }
  };

  // Add keyframes for animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { 
          opacity: 0; 
          transform: translateY(30px) translateX(20px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0) translateX(0); 
        }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ width: "100%", padding: "0 20px" }}>
      <div style={styles.bannerContainer}>
        <div style={styles.slidesContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                ...(index === currentSlide ? styles.activeSlide : {})
              }}
            >
              <img src={image.src} alt={image.alt} style={styles.slideImage} />
              <div style={styles.imageOverlay}></div>
              
              <div style={styles.contentContainer}>
                <div style={{...styles.iconContainer, color: image.accentColor}}>
                  <FontAwesomeIcon icon={image.icon} />
                </div>
                <h2 style={styles.slideTitle}>{image.title}</h2>
                <p style={styles.slideText}>{image.text}</p>
                <div
                  style={{
                    ...styles.ctaButton,
                    backgroundColor: image.accentColor,
                    borderColor: image.accentColor
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = image.accentColor;
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = image.accentColor;
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                  }}
                  onClick={() => window.location.href = image.buttonLink}
                >
                  {image.buttonLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          style={styles.prevArrow} 
          onClick={goToPrevSlide}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(76, 175, 80, 0.8)";
            e.target.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        
        <div 
          style={styles.nextArrow} 
          onClick={goToNextSlide}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(76, 175, 80, 0.8)";
            e.target.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        
        <div style={styles.dotsContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                backgroundColor: index === currentSlide ? image.accentColor : "transparent"
              }}
              onClick={() => goToSlide(index)}
              onMouseEnter={(e) => {
                if (index !== currentSlide) {
                  e.target.style.backgroundColor = "rgba(76, 175, 80, 0.5)";
                  e.target.style.transform = "scale(1.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "scale(1)";
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Quick Links Section */}
      <div style={styles.quickLinksContainer}>
        <a 
          href="https://marketplace.smartmavuno.com/" 
          style={styles.quickLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#388E3C";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4CAF50";
            e.target.style.transform = "translateY(0)";
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} style={{marginRight: "8px"}} />
          Visit Marketplace
        </a>
        <a 
          href="https://marketplace.smartmavuno.com/" 
          style={styles.quickLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#388E3C";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4CAF50";
            e.target.style.transform = "translateY(0)";
          }}
        >
          <FontAwesomeIcon icon={faSeedling} style={{marginRight: "8px"}} />
          Farm Inputs
        </a>
        <a 
          href="/financing" 
          style={styles.quickLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#388E3C";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4CAF50";
            e.target.style.transform = "translateY(0)";
          }}
        >
          <FontAwesomeIcon icon={faShieldAlt} style={{marginRight: "8px"}} />
          Insured Financing
        </a>
      </div>
    </div>
  );
};

export default Banner;