import styles from './Toolbar.module.scss';
import { menuItem } from '../../utils/index'
import Link from 'next/link'
import { useRouter } from "next/router";
const Toolbar = () => {
    const router = useRouter();
    return (
        <div className={styles.toolbar}>
            <div className={styles.left}>
                <Link href="/">
                    <div className={styles.logo}>
                        <img src="/assets/logo.png" alt="" />
                    </div>
                </Link>
                <Link href="/">
                    <p>Formec Media LLP</p>
                </Link>
            </div>
            <div className={styles.right}>
                <ul>
                    {menuItem.map((list, i) => (
                        <li key={i} className={router.pathname == list.path ? styles.active : ''}> <Link href={list.path} as={list.path}>{list.name}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Toolbar;