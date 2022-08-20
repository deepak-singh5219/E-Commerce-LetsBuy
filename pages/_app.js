import '../styles/globals.css'
import { Layout } from '../components';
import { client } from '../lib/client';

function MyApp({ Component, pageProps }) {
  return(

  <Layout>
    <Component {...pageProps} />

  </Layout>
  )
}


export default MyApp;
