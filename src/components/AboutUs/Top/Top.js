import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top =()=>{
    return(
        <div className={`container overflow-hidden`}>
            <p data-aos='slide-right' className={styles.heading}>About SmartMavuno</p>
            <p data-aos='slide-left' className={styles.subHeading}>Get to know us</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
            Smart Mavuno is a leading platform providing innovative agricultural solutions to farmers worldwide. 
            Our mission is to empower farmers with the latest tools and technology to improve productivity and sustainability.
            </p>
        
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>Our Story</p>
                    <p className={styles.creativity}>Empowering Farmers, Shaping the Future of Agriculture</p>
                    <p className={styles.contn}>
                        Founded in 2022, Smart Mavuno is a trailblazing agritech startup with a vision to revolutionize the agricultural landscape. 
                        Our mission is to empower farmers globally by providing them with cutting-edge tools and technology that boost productivity, 
                        enhance sustainability, and improve their overall livelihood.
                           <br /> <br />
                        At Smart Mavuno, we understand the unique challenges that farmers face daily. 
                        That's why we have developed a comprehensive platform offering solutions that address the core needs of the agricultural community. 
                        Our services include: <br /> <br />

                        <ul>
                            <li><strong>Land Leasing</strong>: Connecting farmers with land leasers, providing access to quality agricultural land that enables farmers to scale their operations and achieve greater yields.</li>
                            <li><strong>Agricultural Financing</strong>: Bridging the gap between farmers and financiers, helping farmers access the capital needed to invest in the best resources and technologies for their farms.</li>
                            <li><strong>Produce Marketplace</strong>: Connecting farmers directly with buyers, ensuring fair trade and improved market access for their produce.</li>
                            <li><strong>Weather Forecasting</strong>: Equipping farmers with accurate and timely weather information, helping them make informed decisions for planting, harvesting, and protecting their crops.</li>
                        </ul>


                        Our innovative approach is reshaping the future of agriculture, creating opportunities for farmers worldwide to thrive in an increasingly complex and demanding world.
                    </p>
                </div>
                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="" className={styles.img1}/>
                </div>
            </div>
            <div data-aos='fade-up' className='row' style={{textAlign:'left'}}>
                <div className={`col-md-6`}> 
                    <img src={img2} alt="" className={styles.img2}/>
                </div>
            </div>
        </div>
    )
}

export default Top;