import { createContext, useState, useContext } from 'react'
import GlobaleContext from '../context/createContext'
import styles from './MobileMenu.module.scss'
import { menuItem } from '../../utils/index'
import Link from 'next/link'
import { useRouter } from "next/router";
export default function MobileMenu() {
    const router = useRouter();
    const { state, dispatch } = useContext(GlobaleContext)
    const menuState = state.toggle
    const menuToggle = () => {
        dispatch({
            type: 'toggle',
            payload: !state.toggle
        })
    }
    return (
        <div className={styles.mobileMenu}>
            <ul>
                {menuItem.map((item, i) => (
                    <Link key={i} href={item.path} as={item.path}><li className={router.pathname == item.path ? styles.active : ''} onClick={menuToggle}>{item.name}</li></Link>
                ))}
            </ul>
        </div>
    )
}
