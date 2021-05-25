import React from 'react'
import styles from './MarketingHeader.module.scss'
export default function MarketingHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <h1>Market for the future.</h1>
                <h4>Hop on! to reach your online business potential. </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra consectetur malesuada nisl neque ultricies elit. Tortor neque nam mauris, tristique at. Risus proin sed aliquam massa.</p>
            </div>

            <div class={styles.customshape}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class={styles.shapefill}></path>
                </svg>
            </div>
        </div>
    )
}
