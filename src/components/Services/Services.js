import React from 'react'
import styles from './Services.module.scss'
import { services } from '../../utils'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
export default function Services() {
    return (
        <div className={styles.services}>
            <Fade top cascade>
                <h1 className={styles.title}>Our Services</h1>
            </Fade>
            {services.map((item, i) => (
                <div key={i} className={styles.container}>
                    {i % 2 == 0 ? <Fade left> <div className={styles.ltr}>
                        <div className={styles.image}>
                            <img src={item.src} alt={item.title} />
                        </div>
                        <div className={styles.text}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <Link href={item.path}>Read More...</Link>
                        </div>
                    </div></Fade> : <Fade right><div className={styles.rtl}>
                        <div className={styles.text}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <Link href={item.path}>Read More...</Link>
                        </div>
                        <div className={styles.image}>
                            <img src={item.src} alt={item.title} />
                        </div>
                    </div></Fade>}

                </div>
            ))}
        </div>
    )
}
