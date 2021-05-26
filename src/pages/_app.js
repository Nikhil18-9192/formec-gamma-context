import '../styles/globals.scss'
import '../styles/mixin.scss'
import Layout from '../components/Layout';
import Head from 'next/head'
import Provider from '../components/context/provider';

function MyApp({ Component, pageProps }) {
  return <Provider><Layout> <Head>
    <title>Formec Gamma</title>
  </Head><Component {...pageProps} /></Layout></Provider>
}

export default MyApp
