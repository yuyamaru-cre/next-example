import '@/styles/globals.scss'
import '@/styles/initialization.scss'
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { AppProps } from "next/app";
import { useEffect } from 'react';
import Head from 'next/head'

function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    console.log(router)
    // TODO: ログインチェック
    router.push('/home/login')
  },[router])

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