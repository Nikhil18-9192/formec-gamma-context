import Head from 'next/head'

import Container from '../components/Container'
import Main from '../components/Main'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />

				<meta
					name="description"
					content="Use Sass to start your Next.js app with CSS superpowers!"
				></meta>
			</Head>

			<Main>
				<h1 className={styles.title}>
					<a href="https://nextjs.org">Next.js</a> Sass Starter
				</h1>

				<p className={styles.description}>
					Get started by editing <code>pages/index.js</code>
				</p>
			</Main>

			<Footer />
		</Container>
	)
}
