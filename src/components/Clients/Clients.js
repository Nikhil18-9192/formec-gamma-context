import React from 'react'
import styles from './Clients.module.scss'
import Slide from 'react-reveal/Fade';
import { clients } from '../../utils';
export default function Clients() {
    return (
        <div className={styles.clients}>
            <div className={styles.customshape}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefill}></path>
                </svg>
            </div>
            <Slide bottom >
                <h2 className={styles.title}>
                    Our Clients
                </h2>
            </Slide>
            <div className={styles.container}>
                {clients.map((item, i) => (
                    <div key={i} className={styles.image}>
                        <img src={item} alt="client logo" />
                    </div>
                ))}
            </div>

        </div>
    )
}
