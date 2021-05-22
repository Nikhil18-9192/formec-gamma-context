import styles from './Toolbar.module.scss';
import { menuItem } from '../../utils/index'
import Link from 'next/link'
const Toolbar = () => {
    return (
        <div className={styles.toolbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="/assets/logo.png" alt="" />
                </div>
                <p>Formec Media LLP</p>
            </div>
            <div className={styles.right}>
                <ul>
                    {menuItem.map((list, i) => (
                        <li> <Link href={list.path}>{list.name}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Toolbar;