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
            <div className={styles.burgerMenu} onClick={menuToggle}>
                <div className={styles.burgerOpen}  >
                    <span className={menuState ? styles.t1 : ''} style={menuState ? { transitionDelay: '0s !important' } : { transitionDelay: '0.3s' }} ></span>
                    <span className={menuState ? styles.t1 : ''} style={menuState ? { transitionDelay: '0s !important' } : { transitionDelay: '0.3s' }}></span>
                    <span className={menuState ? styles.t1 : ''} style={menuState ? { transitionDelay: '0s !important' } : { transitionDelay: '0.3s' }}></span>
                </div>
                <div className={styles.burgerClose}>
                    <span className={!menuState ? styles.t1 : ''} style={!menuState ? { transitionDelay: '0.3s !important' } : { transitionDelay: '0s' }}></span>
                    <span className={!menuState ? styles.t2 : ''} style={!menuState ? { transitionDelay: '0.3s !important' } : { transitionDelay: '0s' }}></span>
                </div>
            </div>
        </div>
    )
}
