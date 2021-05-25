import React from 'react'
import styles from '../styles/Marketing.module.scss'
import Header from '../components/MarketingHeader'
import Search from '../components/SearchCustomer'
import Strategy from '../components/Strategy'
export default function marketing() {
    return (
        <div className={marketing}>
            <Header />
            <Search />
            <Strategy />
        </div>
    )
}
