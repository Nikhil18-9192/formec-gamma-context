import React from 'react'
import styles from './Strategy.module.scss'
import { strategy } from '../../utils'
export default function Strategy() {
    return (
        <div className={styles.strategy}>
            <div className={styles.skew}></div>
            <div className={styles.title}>
                <h1>Content Strategy</h1>
                <p>While designing a content strategy we understand what your audience wants and focus on creating content that is useful, educational, relevant, and valuable to them.</p>
            </div>
            <div className={styles.wrapper}>
                <h2>Here are the steps that we follow :</h2>
                <div className={styles.container}>
                    <ul>
                        {strategy.map((item, i) => (
                            <li key={i}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}
