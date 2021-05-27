import React from 'react'
import styles from './MarketingHeader.module.scss'
export default function MarketingHeader() {

    const tailored = [
        { title: 'Your marketing goals', icon: '/assets/goal.svg' },
        { title: ' Your target audience', icon: '/assets/target.svg' },
        { title: 'Your marketing budget', icon: '/assets/budget.svg' },
    ]
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <h1>Market for the future.</h1>
                <h4>Hop on! to reach your online business potential. </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra consectetur malesuada nisl neque ultricies elit. Tortor neque nam mauris, tristique at. Risus proin sed aliquam massa.</p>
            </div>
            <div className={styles.container}>
                <p>Tailored for :</p>
                <div className={styles.wrapper}>
                    {tailored.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.icon}>
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div className={styles.title}>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.customshape}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={styles.shapefill}></path>
                </svg>
            </div>
        </div>
    )
}
