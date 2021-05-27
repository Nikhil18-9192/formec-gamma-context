import { createContext, useState, useContext } from 'react'
import Toolbar from '../components/Toolbar'
import Footer from '../components/Footer'
import PhoneToolbar from '../components/PhoneToolbar'
import MenuButton from '../components/MenuButton'
import MobileMenu from '../components/MobileMenu'
import GlobaleContext from './context/createContext'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import styles from './Layout.module.scss'

export default function Layout({ children }) {
    const { state, dispatch } = useContext(GlobaleContext)
    const menuState = state.toggle
    const menuComp = () => {
        if (menuState) {
            return <MobileMenu />
        }
    }
    return <div className={styles.Layout}>
        <Toolbar />
        <PhoneToolbar />
        <MenuButton />
        {menuComp()}
        {children}
        <Footer />
        <MessengerCustomerChat
            pageId="944479732728027"
            appId="1470277913016171"
        />,
    </div>
}