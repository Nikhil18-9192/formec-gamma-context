import React from 'react'
import styles from './PhoneToolbar.module.scss'
import Link from 'next/link'
export default function PhoneToolbar() {
    return (
        <div className={styles.phoneToolbar}>
            <Link href="/">
                <div className={styles.logo}>
                    <img src="/assets/logo.png" alt="" />
                </div>
            </Link>
            <Link href="/">
                <p>Formec Media LLP</p>
            </Link>
        </div>
    )
}
