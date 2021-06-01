import { useEffect, useRef } from 'react';
import styles from './GetQuote.module.scss'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function GetQuote() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#getquote",
                start: "55% 100%",
                scrub: true,
                markers: false,
                triggerActions: "restart none reset none",
            }
        });
        tl.to('#rocket', { xPercent: 10, yPercent: -40, duration: 10, ease: 'Power4.easeOut' })
    }, [])
    return (
        <div id="getquote" className={styles.getquote}>
            <img id="rocket" className={styles.image} src="/assets/rocket.png" alt="rocket image" />
            <Fade bottom cascade>
                <div className={styles.content}>
                    <h4>Rocket powered push to your online presence</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra consectetur malesuada nisl neque ultricies elit. Tortor neque nam mauris, tristique at. Risus proin sed aliquam massa.</p>
                    <p>Fusce quisque morbi ultricies nulla mollis. Bibendum ac eget turpis porttitor. Sollicitudin quis erat sit eros, convallis vel habitant a elementum. Sed nisi, nibh dignissim turpis et lacus</p>
                    <p>Tortor magna laoreet adipiscing amet id pharetra, ut tellus. Eros, ut in vitae etiam. Pellentesque pha</p>

                </div>
            </Fade>
            <Link className={styles.button} href="/">
                Get Quote
                </Link>
        </div>
    )
}
