import React from 'react'
import styles from './Services.module.scss'
import { services } from '../../utils'
import Link from 'next/link'
import Slide from 'react-reveal/Fade';
export default function Services() {
    return (
        <div className={styles.services}>
            <Slide bottom >
                <h1 className={styles.title}>Our Services</h1>
            </Slide>
            {services.map((item, i) => (
                <div key={i} className={styles.container}>
                    {i % 2 == 0 ? <div className={styles.ltr}>


                        <div className={styles.image}>
                            <img src={item.src} alt={item.title} />
                        </div>
                        <Slide bottom cascade>
                            <div className={styles.text}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <Link href={item.path}>Read More...</Link>
                            </div>
                        </Slide>
                    </div> : <div className={styles.rtl}>
                        <Slide bottom cascade>
                            <div className={styles.text}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <Link href={item.path}>Read More...</Link>
                            </div>
                        </Slide>
                        <div className={styles.image}>
                            <img src={item.src} alt={item.title} />
                        </div>
                    </div>}

                </div>
            ))}
        </div>
    )
}
