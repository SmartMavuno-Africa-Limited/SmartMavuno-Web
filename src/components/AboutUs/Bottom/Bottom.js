import React from 'react';
import styles from './Bottom.module.css';
import fakeData from './fakeData';

const Bottom = () => {
    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                {
                    fakeData.map((x, idx) => (
                        idx % 2 === 0 ?
                            <div key={x.id} className={`row ${styles.row} flex-column-reverse flex-md-row`}>
                                {/* Vision Section in a background container */}
                                <div data-aos='slide-right' data-aos-offset="220" className='col-md-6'>
                                    <div className={styles['vision-mission-container']}>
                                        <p className={styles.head}>{x.heading}</p>
                                        <p className={styles.content}>{x.content}</p>
                                    </div>
                                </div>
                                <div data-aos='slide-left' className='col-md-6'>
                                    <img src={x.img} alt='' className={styles.img} />
                                </div>
                            </div>
                            :
                            <div key={x.id} className={`row ${styles.row}`}>
                                {/* Mission Section in a background container */}
                                <div data-aos='slide-right' data-aos-offset="220" className='col-md-6'>
                                    <img src={x.img} alt='' className={styles.img1} />
                                </div>
                                <div data-aos='slide-left' className='col-md-6'>
                                    <div className={styles['vision-mission-container']}>
                                        <p className={styles.head1}>{x.heading}</p>
                                        <p className={styles.content1}>{x.content}</p>
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </>
    )
}

export default Bottom;
