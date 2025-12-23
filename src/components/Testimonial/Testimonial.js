import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Testimonial.module.css";

import mazetu from '../../assets/home/mazetu.png';
import mebiut from '../../assets/home/mebiut.png';
import fspn from '../../assets/home/fspn.jpeg';
import alx from '../../assets/home/alx.jpeg';
import CMETrust from '../../assets/home/cme.png';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        img: mebiut,
        name: 'Mebiut Limited',
        profession: 'Sauce Company, Kenya',
        message: "SmartMavuno has been a key partner in our growth. They supply fresh, quality ingredients for our sauces."
    },
    {
        id: 2,
        img: CMETrust,
        name: 'Canada Mathare Education Trust',
        profession: 'Scholarships',
        message: "We've partnered with SmartMavuno through their founding team. Proud to see them transform agriculture."
    },
    {
        id: 3,
        img: alx,
        name: 'ALX Founder Academy',
        profession: 'ALX Ventures',
        message: "We worked closely with SmartMavuno's team. Confident in their vision and positive impact in agriculture."
    },
    {
        id: 4,
        img: mazetu,
        name: 'Mazetu Africa',
        profession: 'Storage Provider',
        message: "SmartMavuno collaborates with us to provide storage solutions. We help farmers preserve their produce."
    },
    {
        id: 5,
        img: fspn,
        name: 'HD4A & FSPN',
        profession: 'Agri-Business',
        message: "We incubated SmartMavuno. Their technology is driving real change in agriculture."
    },
];

function Testimonial() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 768 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        },
    };

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Partners</h2>
                    <p className={styles.description}>
                        Trusted by leading organizations
                    </p>
                </div>

                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    containerClass={styles.carouselContainer}
                    itemClass={styles.carouselItem}
                >
                    {testimonials.map((testimonial) => (
                        <div className={styles.testimonialCard} key={testimonial.id}>
                            <div className={styles.clientInfo}>
                                <div className={styles.avatar}>
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className={styles.avatarImage}
                                    />
                                </div>
                                <div className={styles.clientDetails}>
                                    <h4 className={styles.clientName}>{testimonial.name}</h4>
                                    <p className={styles.clientProfession}>{testimonial.profession}</p>
                                </div>
                            </div>
                            
                            <p className={styles.message}>"{testimonial.message}"</p>
                            
                            <div className={styles.rating}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={styles.star} />
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Testimonial;