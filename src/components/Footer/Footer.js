import styles from './Footer.module.scss';
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2 className={styles.title}>Are you interested ? Get in contact...</h2>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Link href="/">About Us</Link>
        </div>
        <div className={styles.form}>
          <input type="number" placeholder="Enter Mobile Number" />
          <button className={styles.btn}>Get Quote</button>
        </div>
        <div className={styles.social}>
          <div className={styles.icons}>
            <a target="_blank" rel="noopener" href="/"><img src="/assets/instagram.svg" alt="instagram icon" /></a>
            <a target="_blank" rel="noopener" href="/"><img src="/assets/fb.svg" alt="fb icon" /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>All Rights Reserved. Copyright Formec Media {new Date().getFullYear()}</p>
        <p className={styles.formec}>
          Designed with 💙 by
         <a href="https://formecmedia.com/" target="_blank" rel="noopener"
          > Formec Media.</a>
        </p>
      </div>
    </div>
  )
}

export default Footer;