import styles from './Header.module.scss';
import Carousel from '../../components/Carousel'
import Fade from 'react-reveal/Fade';
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Fade left>
                    <Carousel />
                </Fade>
            </div>
            <div className={styles.right}>
                <Fade right>
                    <img src="/assets/header-img.png" alt="" />
                </Fade>
            </div>
        </div>
    )
}

export default Header