import React from 'react'
import styles from './SearchCustomer.module.scss'
import Slide from 'react-reveal/Fade';
export default function SearchCustomer() {
    const data = [
        { text: 'With rightly planned digital marketing strategy & highly focused lead generation campaigns, our team of digital marketing experts ensure you get quality leads in your marketing budget.', icon: '/assets/calender.svg' },
        { text: 'This involves in depth audience research, selecting the right digital marketing platforms, creating content strategy, and optimizing lead generation campaigns.', icon: '/assets/audience.svg' },
        { text: 'These leads can be in the form of social media messages, phone calls, WhatsApp messages, website leads or even a prefilled social media contact form.', icon: '/assets/social-media.svg' },
        { text: 'Our team always prefers to start with small budget & further strategic scaling, ensuring a positive return on advertising spent.', icon: '/assets/rupee.svg' },
    ]
    return (
        <div className={styles.searchCutomer}>
            <Slide bottom cascade>
                <div className={styles.title}>
                    <h1>In search of new customers?</h1>
                    <h4>We have got you covered!</h4>
                </div>
            </Slide>
            <div className={styles.wrapper}>
                {data.map((item, i) => (

                    <div key={i} className={styles.container}>
                        <div className={styles.icon}>
                            <img src={item.icon} alt="" />
                        </div>
                        <Slide bottom cascade>
                            <div className={styles.text}>
                                <p>{item.text}</p>
                            </div>
                        </Slide>
                    </div>

                ))}

            </div>
        </div>
    )
}
