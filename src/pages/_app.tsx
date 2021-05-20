import '../styles/globals.scss'
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import {AppProps} from "next/app";
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Example2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp