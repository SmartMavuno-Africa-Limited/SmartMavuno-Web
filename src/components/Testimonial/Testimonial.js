import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Testimonial.module.css";

const testimonials = [
    {
        id: 1,
        name: 'John Kamau',
        profession: 'Maize & Beans Farmer',
        location: 'Nakuru',
        message: "SmartMavuno marketplace allowed me sell my farm-fresh beans directly to schools in Nairobi. I now earn 50% more by eliminating middlemen."
    },
    {
        id: 2,
        name: 'Mary Wanjiku',
        profession: 'Dairy Farmer',
        location: 'Kiambu',
        message: "I received my insured financing from SmartMavuno to buy 10 dairy cows. The risk-free loan helped me triple my milk production in 8 months."
    },
    {
        id: 3,
        name: 'Peter Odhiambo',
        profession: 'Vegetable Farmer',
        location: 'Kisumu',
        message: "I got equipped with modern irrigation techniques by SmartMavuno's agronomic team. My tomato yield increased by 120% using their drip system."
    },
    {
        id: 4,
        name: 'Grace Akinyi',
        profession: 'Avocado Farmer',
        location: 'Murang\'a',
        message: "SmartMavuno marketplace connected me with European buyers. I now export my Hass avocados directly, earning 3 times more than before."
    },
    {
        id: 5,
        name: 'Joseph Mwangi',
        profession: 'Coffee Farmer',
        location: 'Nyeri',
        message: "I received insured financing from SmartMavuno to renovate my coffee factory. The collateral-free loan was processed in just 3 days."
    },
    {
        id: 6,
        name: 'Sarah Auma',
        profession: 'Poultry Farmer',
        location: 'Kakamega',
        message: "I got equipped with disease management skills by SmartMavuno trainers. My chicken mortality rate dropped from 30% to just 5%."
    }
];

function Testimonial() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
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
                    <h2 className={styles.title}>Farmer Success Stories</h2>
                    <p className={styles.description}>
                        Real farmers sharing how our services transformed their farms
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
                    arrows={true}
                    pauseOnHover={true}
                >
                    {testimonials.map((testimonial) => (
                        <div className={styles.testimonialCard} key={testimonial.id}>
                            <div className={styles.clientInfo}>
                                <div className={styles.clientDetails}>
                                    <h4 className={styles.clientName}>{testimonial.name}</h4>
                                    <p className={styles.clientProfession}>{testimonial.profession}</p>
                                    <p className={styles.clientLocation}>{testimonial.location}</p>
                                </div>
                            </div>
                            
                            <p className={styles.message}>"{testimonial.message}"</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Testimonial;