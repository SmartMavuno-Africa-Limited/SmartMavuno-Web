import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT SMARTMAVUNO</p>
                        <p data-aos="slide-left" className={styles.heading}>Empowering Farmers with Smart and Accessible Solutions</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>SmartMavuno is dedicated to transforming the agricultural landscape with cutting-edge solutions tailored for farmers. Our team, equipped with over 20 years of combined experience in agri-tech, aims to bridge the gap between traditional farming and modern digital tools. We provide an intuitive platform that offers farm management, market insights, and productivity tools, all accessible to farmers of any scale. Whether you're looking to optimize your yield, access new markets, or manage resources efficiently, SmartMavuno is here to support your journey towards sustainable and profitable farming.</p>
                        </div>
                        <div data-aos='zoom-in' style={{textAlign: 'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>JOIN COMMUNITY</button>
                        </div>
                        
                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt="Agricultural tools and technology"/>
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{width:'110%'}} alt="Farmers using SmartMavuno technology"/>
                                <img data-aos="zoom-in-left" src={img3} alt="Innovative farming solutions"/>
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;
