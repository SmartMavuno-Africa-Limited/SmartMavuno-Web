import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "slick-carousel/slick/slick.css";        
import "slick-carousel/slick/slick-theme.css"; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Banner.module.css';

const images = [
  { 
    src: require('../../assets/irrigation.jpg'), 
    alt: "Irrigation Technology", 
    text: "Smart Irrigation Solutions to Maximize Your Yield", 
    buttonLabel: "CHECK OUT", 
    buttonLink: "/services" 
  },
  { 
    src: require('../../assets/equipment.jpg'), 
    alt: "Equipment Renatls", 
    text: "Rent or get our affordable farm Labour and Equipments from anywhere", 
    buttonLabel: "EXPLORE OUR EQUIPMENTS", 
    buttonLink: "/services" 
  },
  { 
    src: require('../../assets/lease.jpg'), 
    alt: "Land Leasing", 
    text: "Flexible Land Leasing Options for Sustainable Farming", 
    buttonLabel: "VIEW LEASE OPTIONS", 
    buttonLink: "/Quotation" 
  },
  { 
    src: require('../../assets/financing.jpg'), 
    alt: "Agricultural Insured Financing", 
    text: "Get Tailored and Insured Loans from us", 
    buttonLabel: "GET STARTED", 
    buttonLink: "/landleasing" 
  },
  { 
    src: require('../../assets/donations.jpg'), 
    alt: "Food Donation Basket", 
    text: "Donate to Help the vulnerable", 
    buttonLabel: "DONATE FOOD", 
    buttonLink: "/donationbasket" 
  },
  {
    src: require('../../assets/weather.jpg'),
    alt: "Weather",
    text: "Do Your ForeCast Today",
    buttonLabel: "FORECAST",
    buttonLink: "https://smartmvua-forecast.netlify.app/"
  }  
];

const PreviousArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} size="2x" />
  </div>
);

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    beforeChange: (_current, next) => setCurrentSlide(next),
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles.imgbox}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className={styles.slideImage} />
          </div>
        ))}
      </Slider>
      <div className={`${styles.center}`}>
        <p data-aos='fade-down' className={styles.text}>{images[currentSlide].text}</p>
        <a 
          data-aos='fade-up' 
          href={images[currentSlide].buttonLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`btn custom_btn ${styles.btn}`}
        >
          {images[currentSlide].buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Banner;
