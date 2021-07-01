import styles from './Carousel.module.scss'
import { slides } from '../../utils/index'
import { useEffect, useState } from 'react'
import Slide from 'react-reveal/Fade';
export default function Carousel() {
    const [currentIndex, setcurrentIndex] = useState(0)

    function currentItem() {
        return slides[currentIndex]
    }
    const prev = () => {
        currentIndex >= 1
            ? setcurrentIndex(currentIndex - 1)
            : setcurrentIndex(slides.length - 1);
    }
    const next = () => {

        currentIndex < slides.length - 1
            ? setcurrentIndex(currentIndex + 1)
            : setcurrentIndex(0);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex < slides.length - 1
                ? setcurrentIndex(currentIndex + 1)
                : setcurrentIndex(0)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <div className={styles.carousel}>
            <Slide bottom cascade>
                <div className={styles.slideData}>
                    <h4   >{currentItem().title}</h4>
                    <div className={styles.logo}><img src={currentItem().logo} alt="" /></div>
                    <p><span>Industry:</span> {currentItem().industry}</p>
                    <p><span>Scope of work:</span>{currentItem().scope}</p>
                </div>
            </Slide>
            <div className={styles.controls}>
                <div className={styles.left} onClick={prev}>
                    <img src="/assets/left-arrow.png" alt="left" />
                </div>
                <div className={styles.right} onClick={next}>
                    <img src="/assets/right-arrow.png" alt="left" />
                </div>

            </div>
        </div>
    )
}
