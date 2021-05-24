
import Toolbar from '../components/Toolbar'
export default function Layout({ children }) {
    return <div>
        <Toolbar />
        {children}

    </div>
}