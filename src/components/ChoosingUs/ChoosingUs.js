import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import donation from '../../assets/donations.jpg';

const ChoosingUs = () =>{
    return(
        <div style={{backgroundColor: '#fff1e5'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Why Choose SmartMavuno?</p>
                <p data-aos='slide-left' className={styles.sub_text}>Driving sustainable farming solutions and contributing to a better tomorrow.</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Expertise & Innovation</p>
                        <p className={styles.logo_text}>With years of experience in AgriTech, we provide farmers with cutting-edge tools and insights to boost productivity, cut costs, and make farming smarter and more sustainable.</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="communication"/>
                        <p className={styles.logo_head}>Real-Time Support & Communication</p>
                        <p className={styles.logo_text}>From up-to-the-minute weather updates to tailored farming advice, we keep you informed and supported every step of the way, making SmartMavuno a trusted partner in your farming journey.</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={donation} alt="donation"/>
                        <p className={styles.logo_head}>Donation Basket: Ending Hunger Together</p>
                        <p className={styles.logo_text}>Through our Donation Basket initiative, we help fight hunger by supporting communities in need, creating a bridge between farmers and those facing food insecurity as we work toward zero hunger goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs;
