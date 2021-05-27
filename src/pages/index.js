import Container from '../components/Container'
import Header from '../components/Header'
import GetQuote from '../components/GetQuote'
import Services from '../components/Services'
import Clients from '../components/Clients'
import styles from '../styles/Home.module.scss'
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function Home() {
	return (
		<Container>
			<MessengerCustomerChat
				pageId="944479732728027"
				appId="1470277913016171"
			/>,
			<Header />
			<GetQuote />
			<Services />
			<Clients />
		</Container>
	)
}
