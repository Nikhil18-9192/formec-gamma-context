import { createContext, useState, useContext } from 'react'
import GlobaleContext from '../context/createContext'
import styles from './MenuButton.module.scss'


export default function MenuButton() {
    const { state, dispatch } = useContext(GlobaleContext)
    const menuState = state.toggle
    const menuToggle = () => {
        dispatch({
            type: 'toggle',
            payload: !state.toggle
        })
    }

    return (
        <div className={styles.menuButton}>
            <div className={`${styles.burgerMenu} ${menuState ? styles.menuActive : styles.menuInactive}`} onClick={menuToggle}>
                <div className={styles.burgerOpen}  >
                    <span className={menuState ? styles.t1 : ''}   ></span>
                    <span className={menuState ? styles.t1 : ''} ></span>
                    <span className={menuState ? styles.t1 : ''}  ></span>
                </div>
                <div className={styles.burgerClose}>
                    <span className={!menuState ? styles.t1 : ''}  ></span>
                    <span className={!menuState ? styles.t2 : ''}  ></span>
                </div>
            </div>
        </div>
    )
}
