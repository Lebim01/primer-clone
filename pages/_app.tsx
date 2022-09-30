import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'

axios.defaults.baseURL = process.env.HOST_API

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
