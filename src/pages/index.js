import Head from 'next/head'
import Container from '../components/Container'
import Toolbar from '../components/Toolbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Formec Gamma</title>
				<link rel="icon" href="/assets/logo.png" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Spartan&display=swap" rel="stylesheet"></link>
				<meta
					name="description"
					content="Use Sass to start your Next.js app with CSS superpowers!"
				></meta>
			</Head>
			<Toolbar />
			<Header />
			{/* <Footer /> */}
		</Container>
	)
}
