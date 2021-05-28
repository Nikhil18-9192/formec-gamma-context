import React from 'react'
import styles from './Strategy.module.scss'
import { strategy } from '../../utils'
import Slide from 'react-reveal/Fade';
export default function Strategy() {
    return (
        <div className={styles.strategy}>
            <div className={styles.skew}></div>
            <Slide bottom cascade>
                <div className={styles.title}>
                    <h1>Content Strategy</h1>
                    <p>While designing a content strategy we understand what your audience wants and focus on creating content that is useful, educational, relevant, and valuable to them.</p>
                </div>
            </Slide>
            <div className={styles.wrapper}>
                <Slide bottom >
                    <h2>Here are the steps that we follow :</h2>
                </Slide>

                <div className={styles.container}>
                    <ul>
                        {strategy.map((item, i) => (
                            <Slide bottom cascade>
                                <li key={i}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </li>
                            </Slide>
                        ))}

                    </ul>
                </div>

            </div>
        </div>
    )
}
