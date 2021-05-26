import '../styles/globals.scss'
import '../styles/mixin.scss'
import Layout from '../components/Layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <Layout> <Head>
    <title>Formec Gamma</title>
  </Head><Component {...pageProps} /></Layout>
}

export default MyApp
