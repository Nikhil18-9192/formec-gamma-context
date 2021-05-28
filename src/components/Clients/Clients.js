import React from 'react'
import styles from './Clients.module.scss'
import Fade from 'react-reveal/Fade';
export default function Clients() {
    return (
        <div className={styles.clients}>
            <div className={styles.customshape}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefill}></path>
                </svg>
            </div>
            <Fade top cascade>
                <h2 className={styles.title}>
                    Our Clients
            </h2>
            </Fade>
            <Fade bottom>
                <img src="/assets/clients.png" alt="clients" />
            </Fade>
        </div>
    )
}
