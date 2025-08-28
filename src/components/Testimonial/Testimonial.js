import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Testimonial.module.css";

import { fakeData } from "./fakeData";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function Testimonial() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 20
        },
    };

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p data-aos="fade-up" className={styles.subtitle}>Client Reviews</p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className={styles.title}>
                        What Our Partners Say
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="200" className={styles.description}>
                        Discover why agricultural businesses and organizations trust SmartMavuno 
                        to transform their operations and drive success.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        customTransition="transform 600ms ease-in-out"
                        transitionDuration={600}
                        containerClass={styles.carouselContainer}
                        arrows={true}
                        renderButtonGroupOutside={true}
                        dotListClass={styles.dotList}
                        itemClass={styles.carouselItem}
                        centerMode={false}
                        partialVisible={true}
                    >
                        {fakeData.map((testimonial) => (
                            <div className={styles.testimonialCard} key={testimonial.id}>
                                <div className={styles.quoteIcon}>
                                    <FaQuoteLeft />
                                </div>
                                
                                <div className={styles.rating}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={styles.star} />
                                    ))}
                                </div>
                                
                                <p className={styles.message}>"{testimonial.message}"</p>
                                
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
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;