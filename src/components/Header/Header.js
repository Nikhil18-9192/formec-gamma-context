import { useState, useEffect } from 'react'
import styles from './Header.module.scss';
import Carousel from '../../components/Carousel'

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Carousel />
            </div>
            <div className={styles.right}>
                <img src="/assets/header-img.png" alt="" />
            </div>
        </div>
    )
}

export default Header