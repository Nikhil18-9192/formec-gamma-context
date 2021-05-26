import { createContext, useState, useContext } from 'react'
import GlobaleContext from '../context/createContext'
import provider from '../context/provider'
import styles from './MenuButton.module.scss'




export default function MenuButton() {
    const { state, dispatch } = useContext(GlobaleContext)
    console.log('state value', state);


    return (

        <div className={styles.menuButton}>
            <img src="/assets/ham.svg" alt="" />
        </div>


    )
}
