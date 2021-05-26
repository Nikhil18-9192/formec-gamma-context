import { createContext, useState, useContext } from 'react'
import GlobaleContext from '../context/createContext'
import styles from './MenuButton.module.scss'




export default function MenuButton() {

    const { state, dispatch } = useContext(GlobaleContext)
    console.log(state.toggle);
    const menuToggle = () => {
        dispatch({
            type: 'toggle',
            payload: !state.toggle
        })
    }
    return (
        <div className={styles.menuButton}>
            <img src="/assets/ham.svg" alt="" onClick={menuToggle} />
        </div>
    )
}
