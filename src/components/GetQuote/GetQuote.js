import styles from './GetQuote.module.scss'
import Link from 'next/link'
export default function GetQuote() {
    return (
        <div className={styles.getquote}>
            <img className={styles.image} src="/assets/rocket.png" alt="rocket image" />
            <div className={styles.content}>
                <h4>Rocket powered push to your online presence</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra consectetur malesuada nisl neque ultricies elit. Tortor neque nam mauris, tristique at. Risus proin sed aliquam massa.</p>
                <p>Fusce quisque morbi ultricies nulla mollis. Bibendum ac eget turpis porttitor. Sollicitudin quis erat sit eros, convallis vel habitant a elementum. Sed nisi, nibh dignissim turpis et lacus</p>
                <p>Tortor magna laoreet adipiscing amet id pharetra, ut tellus. Eros, ut in vitae etiam. Pellentesque pha</p>

            </div>
            <Link className={styles.button} href="/">
                Get Quote
                </Link>
        </div>
    )
}
