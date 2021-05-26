import React from 'react'
import styles from './MobileMenu.module.scss'
import { menuItem } from '../../utils/index'
import Link from 'next/link'
export default function MobileMenu() {
    return (
        <div className={styles.mobileMenu}>
            <ul>
                {menuItem.map((item, i) => (
                    <Link key={i} href={item.path} as={item.path}><li >{item.name}</li></Link>
                ))}
            </ul>
        </div>
    )
}
