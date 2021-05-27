import Container from '../components/Container'
import Header from '../components/Header'
import GetQuote from '../components/GetQuote'
import Services from '../components/Services'
import Clients from '../components/Clients'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<Container>

			<Header />
			<GetQuote />
			<Services />
			<Clients />
		</Container>
	)
}
