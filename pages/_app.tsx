import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'
import LayoutBody from '@src/layout/Body'
import Layout from '@src/layout/Layout'
import HeaderContextProvider from '@src/components/HeaderBreadcrumb/header.context'

axios.defaults.baseURL = process.env.HOST_API

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderContextProvider>
      <Layout>
        <LayoutBody>
          <Component {...pageProps} />
        </LayoutBody>
      </Layout>
    </HeaderContextProvider>
  )
}

export default MyApp
