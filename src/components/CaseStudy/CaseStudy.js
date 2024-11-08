import React, { useState } from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';
import fakeData from './fakeData';

const CaseStudy = () => {
    const [data, setData] = useState(fakeData);
    const [active, setActive] = useState([true, false, false, false, false, false, false, false]);

    const filterData = (category) => {
        let temp = fakeData.filter((x) => x.category === category);
        setData([...temp]);
    }

    const activeNav = (i) => {
        let temp = [false, false, false, false, false, false, false, false];
        temp[i] = true;
        setActive([...temp]);
    }

    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <p className={styles.head} data-aos='slide-right'>FEATURES</p>
            <div data-aos='slide-left'>
                <p className={styles.our}>OUR CASE&nbsp;</p>
                <p className={styles.study}>STUDIES</p>
            </div>
            <div className={`${styles.grp_btn}`} data-aos='fade'>
                <p onClick={() => { setData(fakeData); activeNav(0) }} className={`${styles.filter} ${active[0] ? styles.active : null}`}>ALL</p>
                <p onClick={() => { filterData('weather reports'); activeNav(1) }} className={`${styles.filter} ${active[1] ? styles.active : null}`}>WEATHER REPORTS</p>
                <p onClick={() => { filterData('farmers hub'); activeNav(2) }} className={`${styles.filter} ${active[2] ? styles.active : null}`}>FARMERS HUB</p>
                <p onClick={() => { filterData('farm labour'); activeNav(3) }} className={`${styles.filter} ${active[3] ? styles.active : null}`}>FARM LABOUR</p>
                <p onClick={() => { filterData('food donation'); activeNav(4) }} className={`${styles.filter} ${active[4] ? styles.active : null}`}>FOOD DONATION</p>
                <p onClick={() => { filterData('smartmavuno IoT'); activeNav(5) }} className={`${styles.filter} ${active[5] ? styles.active : null}`}>SMARTMAVUNO IoT</p>
                <p onClick={() => { filterData('marketplace'); activeNav(6) }} className={`${styles.filter} ${active[6] ? styles.active : null}`}>MARKETPLACE</p>
                <p onClick={() => { filterData('agricultural insured financing'); activeNav(7) }} className={`${styles.filter} ${active[7] ? styles.active : null}`}>AGRICULTURAL INSURED FINANCING</p>
            </div>

            <div className='row mb-2'>
                {
                    data.map((x) => (
                        <div key={x.id} className={`col-md-4 col-sm-6 mt-4`} data-aos='fade'>
                            <Link to={`/projectDetails?id=${x.id}`} style={{ textDecoration: "none" }}>
                                <div className={styles.img} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${x.img})` }}>
                                    <p className={styles.imgText1} >{x.designation}</p>
                                    <p className={styles.imgText2}>{x.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CaseStudy;
