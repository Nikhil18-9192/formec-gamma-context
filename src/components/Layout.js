import { createContext, useState, useContext } from 'react'
import Toolbar from '../components/Toolbar'
import Footer from '../components/Footer'
import PhoneToolbar from '../components/PhoneToolbar'
import MenuButton from '../components/MenuButton'
import MobileMenu from '../components/MobileMenu'
import GlobaleContext from './context/createContext'
import CustomerChat from '../components/CustomerChat'

export default function Layout({ children }) {
    const { state, dispatch } = useContext(GlobaleContext)
    const menuState = state.toggle
    const menuComp = () => {
        if (menuState) {
            return <MobileMenu />
        }
    }
    return <div className="layout">
        <Toolbar />
        <PhoneToolbar />
        <MenuButton />
        <CustomerChat />
        {menuComp()}
        {children}
        <Footer />

    </div>
}