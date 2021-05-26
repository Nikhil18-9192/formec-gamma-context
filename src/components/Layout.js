
import Toolbar from '../components/Toolbar'
import Footer from '../components/Footer'
import PhoneToolbar from '../components/PhoneToolbar'
import MenuButton from '../components/MenuButton'
import MobileMenu from '../components/MobileMenu'

export default function Layout({ children }) {

    return <div className="layout">
        <Toolbar />
        <PhoneToolbar />
        <MenuButton />
        {children}
        <Footer />
    </div>
}