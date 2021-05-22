import styles from './Header.module.scss';
import { slides } from '../../utils/index'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>

                {slides.map((item, i) => (
                    <div>
                        <h4>{item.title}</h4>
                        <p><span>Industry:</span> {item.industry}</p>
                        <p><span>Scope of work:</span>{item.scope}</p>
                    </div>
                ))}

            </div>
            <div className={styles.right}>
                <img src="/assets/header-img.png" alt="" />
            </div>
        </div>
    )
}

export default Header