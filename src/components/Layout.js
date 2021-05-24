
import Toolbar from '../components/Toolbar'
import Footer from '../components/Footer'
export default function Layout({ children }) {
    return <div>
        <Toolbar />
        {children}
        <Footer />
    </div>
}