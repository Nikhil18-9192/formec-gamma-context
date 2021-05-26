
import Toolbar from '../components/Toolbar'
import Footer from '../components/Footer'
import PhoneToolbar from '../components/PhoneToolbar'
import MenuButton from '../components/MenuButton'
export default function Layout({ children }) {
    return <div>
        <Toolbar />
        <PhoneToolbar />
        <MenuButton />
        {children}
        <Footer />
    </div>
}