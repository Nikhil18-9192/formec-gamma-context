import React from 'react'
import styles from './Services.module.scss'
import { services } from '../../utils'
import Link from 'next/link'
import Slide from 'react-reveal/Fade';
export default function Services() {
    return (
        <div className={styles.services}>
            <Slide bottom >
                <h1 className={styles.title}>Our Services</h1>
            </Slide>
            {/* {services.map((item, i) => ( */}
            <div className={styles.container}>
                <div className={styles.ltr}>
                    <div className={styles.image}>
                        <svg width="176" height="172" viewBox="0 0 176 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 13">
                                <g id={styles.bg}>
                                    <circle id={styles.ellipse} cx="93.5" cy="89.5" r="82.5" fill="#0268BE" />
                                    <circle id="Ellipse" cx="82.5" cy="82.5" r="82.5" fill="#25D6D9" />
                                </g>
                                <g id={styles.speaker}>
                                    <path id="Vector" d="M88.8891 41.0209C87.506 41.489 86.7657 42.987 87.2338 44.3701L88.4432 47.9429C81.3573 56.7962 71.9693 64.147 61.747 69.0442L70.6335 95.298C81.7287 92.9794 93.6513 93.1169 104.658 95.8462L105.867 99.4189C106.335 100.802 107.833 101.542 109.216 101.074C110.599 100.606 111.34 99.108 110.872 97.7249L92.2382 42.6761C91.7701 41.2931 90.2721 40.5528 88.8891 41.0209Z" fill="white" />
                                    <path id="Vector_2" d="M70.7317 114.602C67.0238 111.234 63.3847 107.037 63.4667 102.231L50.644 105.038C49.68 105.25 48.7175 105.352 47.7617 105.394C47.7254 111.344 49.6659 116.528 51.1523 120.396C51.5314 121.387 51.8881 122.312 52.1784 123.17C52.6466 124.553 54.1445 125.293 55.5276 124.825L70.5409 119.743C71.4083 119.449 72.0625 118.727 72.2673 117.835C72.4744 116.942 72.2042 116.007 71.5534 115.364L70.7317 114.602Z" fill="white" />
                                    <path id="Vector_3" d="M36.1635 92.3346C38.0444 97.8913 43.7831 101.134 49.5131 99.8785L65.4262 96.3928L56.9451 71.337L42.1865 78.2333C36.8717 80.7159 34.2826 86.7778 36.1635 92.3346Z" fill="white" />
                                </g>
                                <g id={styles.line}>
                                    <path id="Vector_4" d="M103.813 59.5267C102.776 58.4996 102.768 56.8272 103.795 55.7904L112.11 47.3981C113.138 46.3639 114.81 46.3537 115.847 47.3808C116.883 48.408 116.891 50.0804 115.864 51.1171L107.549 59.5094C106.51 60.5526 104.843 60.5454 103.813 59.5267Z" fill="white" />
                                    <path id="Vector_5" d="M123.789 81.9013L112.086 80.2847C110.641 80.085 109.631 78.7517 109.831 77.3061C110.036 75.8612 111.366 74.8581 112.809 75.0504L124.512 76.667C125.958 76.8667 126.968 78.2 126.768 79.6456C126.568 81.0821 125.247 82.0986 123.789 81.9013Z" fill="white" />
                                    <path id="Vector_6" d="M119.916 66.7734L109.907 70.1613C108.524 70.6294 107.026 69.8891 106.558 68.506C106.09 67.1229 106.83 65.625 108.213 65.1568L118.222 61.7689C119.605 61.3008 121.103 62.0411 121.571 63.4242C122.039 64.8073 121.299 66.3052 119.916 66.7734Z" fill="white" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <Slide bottom cascade>
                        <div className={styles.text}>
                            <h2>Digital Marketing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra consectetur malesuada nisl neque ultricies elit. Tortor neque nam mauris, tristique at. Risus proin sed aliquam massa</p>
                            <Link href="/">Read More...</Link>
                        </div>
                    </Slide>
                </div>
                <div className={styles.rtl}>
                    <Slide bottom cascade>
                        <div className={styles.text}>
                            <h2>Website & App Development</h2>
                            <p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra consectetur malesuada nisl neque ultricies elit. To</p>
                            <Link href="/">Read More...</Link>
                        </div>
                    </Slide>
                    <div className={styles.image}>
                        <svg width="176" height="172" viewBox="0 0 176 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 14">
                                <g id={styles.bg}>
                                    <circle id="Ellipse 4" cx="93.5" cy="89.5" r="82.5" fill="#0268BE" />
                                    <circle id="Ellipse 3" cx="82.5" cy="82.5" r="82.5" fill="#25D6D9" />
                                </g>
                                <g id={styles.coding} clipPath="url(#clip0)">
                                    <g id={styles.top}>
                                        <path id="Vector" d="M95.2454 59.4631L92.5435 47.5856L43.9426 58.6412C42.8697 58.8853 42.1978 59.9529 42.4419 61.0257L44.7018 70.9606L95.2454 59.4631Z" fill="white" />
                                        <path id="Vector_2" d="M99.1305 58.5793L111.008 55.8775L108.748 45.9426C108.504 44.8697 107.436 44.1978 106.364 44.4419L96.4286 46.7018L99.1305 58.5793Z" fill="white" />
                                    </g>
                                    <path id={styles.bottom} d="M45.5856 74.8458L56.6412 123.447C56.8853 124.52 57.9529 125.191 59.0257 124.947L121.447 110.748C122.519 110.504 123.191 109.436 122.947 108.364L111.892 59.7627L45.5856 74.8458ZM91.698 79.4781C92.2841 78.5468 93.5141 78.267 94.4452 78.8531L106.234 86.2724C106.683 86.5554 107.001 87.0064 107.117 87.525C107.233 88.0437 107.136 88.587 106.849 89.0342L99.3922 100.656C99.0985 101.113 98.6488 101.411 98.1575 101.522C97.6545 101.637 97.1079 101.557 96.6396 101.256C95.7135 100.662 95.4446 99.4299 96.0388 98.504L102.411 88.574L92.3231 82.2252C91.3917 81.6392 91.1119 80.4091 91.698 79.4781ZM81.2984 102.632L83.7193 82.0548C83.848 80.9621 84.838 80.1804 85.9307 80.3091C87.0234 80.4376 87.805 81.4277 87.6764 82.5203L85.2555 103.097C85.1541 103.958 84.5183 104.625 83.7189 104.807C83.5034 104.856 83.2762 104.87 83.044 104.843C81.9515 104.714 81.1698 103.724 81.2984 102.632ZM62.1255 96.1176L69.5826 84.4961C70.177 83.57 71.4094 83.3012 72.3352 83.8953C73.2613 84.4895 73.5302 85.7219 72.936 86.6478L66.5642 96.5778L76.6518 102.927C77.583 103.513 77.8627 104.743 77.2767 105.674C76.9836 106.139 76.5295 106.442 76.0326 106.555C75.5354 106.668 74.9951 106.592 74.5296 106.299L62.7412 98.8794C62.2915 98.5964 61.9734 98.1454 61.8578 97.6268C61.7421 97.1081 61.8386 96.5648 62.1255 96.1176Z" fill="white" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="68" height="68" fill="white" transform="translate(42 59.0831) rotate(-12.8154)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
                <div className={styles.ltr}>
                    <div className={styles.image}>
                        <svg width="176" height="172" viewBox="0 0 176 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 15">
                                <g id={styles.bg}>
                                    <circle id="Ellipse 4" cx="93.5" cy="89.5" r="82.5" fill="#0268BE" />
                                    <circle id="Ellipse 3" cx="82.5" cy="82.5" r="82.5" fill="#25D6D9" />
                                </g>
                                <g id={styles.film} clipPath="url(#clip0)">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <path id="Vector" d="M55.4429 117.307L119.754 105.645C122.918 105.071 125.016 102.042 124.443 98.8794L116.828 56.8843C116.254 53.7217 113.226 51.6219 110.062 52.1956L45.7505 63.8577C42.588 64.4312 40.4884 67.4609 41.0619 70.6234L48.6771 112.619C49.2506 115.781 52.2803 117.881 55.4429 117.307ZM91.2787 106.656L82.4577 108.256L81.4695 102.806L90.2905 101.207L91.2787 106.656ZM104.088 57.5661L112.909 55.9665L113.897 61.4161L105.076 63.0156L104.088 57.5661ZM111.05 97.4425L119.872 95.8427L120.86 101.292L112.038 102.892L111.05 97.4425ZM89.2968 60.2483L98.1192 58.6485L99.1074 64.098L90.285 65.6979L89.2968 60.2483ZM96.2595 100.124L105.082 98.5247L106.07 103.974L97.2477 105.574L96.2595 100.124ZM74.5082 62.9301L83.3291 61.3305L84.3173 66.78L75.4964 68.3796L74.5082 62.9301ZM74.4216 76.5442L88.8709 80.7665C92.2243 81.7469 92.6764 84.2401 89.8805 86.3342L77.8341 95.3626C75.0382 97.4567 72.2642 96.3684 71.6404 92.9282L69.4768 80.9969C68.8519 77.5584 71.067 75.5653 74.4216 76.5442ZM59.7181 65.612L68.5405 64.0122L69.5287 69.4618L60.7063 71.0616L59.7181 65.612ZM66.6808 105.488L75.5018 103.889L76.49 109.338L67.6691 110.938L66.6808 105.488ZM44.9281 68.294L53.7504 66.6942L54.7386 72.1437L45.9163 73.7436L44.9281 68.294ZM51.8908 108.17L60.7132 106.57L61.7014 112.02L52.879 113.62L51.8908 108.17Z" fill="white" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="77" height="77" fill="white" transform="translate(38 53.7388) rotate(-10.2782)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <Slide bottom cascade>
                        <div className={styles.text}>
                            <h2>Digital Marketing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra consectetur malesuada nisl neque ultricies elit. Tortor neque nam mauris, tristique at. Risus proin sed aliquam massa</p>
                            <Link href="/">Read More...</Link>
                        </div>
                    </Slide>
                </div>
                {/* {i % 2 == 0 ? <div className={styles.ltr}>
                        <div className={styles.image}>
                            <img src={item.src} alt={item.title} />
                        </div>
                        <Slide bottom cascade>
                            <div className={styles.text}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <Link href={item.path}>Read More...</Link>
                            </div>
                        </Slide>
                    </div> : <div className={styles.rtl}>
                        <Slide bottom cascade>
                            <div className={styles.text}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <Link href={item.path}>Read More...</Link>
                            </div>
                        </Slide>
                        <div className={styles.image}>
                            <img src={item.src} alt={item.title} />
                        </div>
                    </div>} */}

            </div>
            {/* ))} */}
        </div>
    )
}
