import '../styles/globals.css'
import 'reactflow/dist/style.css';

import type { AppProps } from 'next/app'
import axios from 'axios'
import LayoutBody from '@src/layout/Body'
import Layout from '@src/layout/Layout'
import HeaderContextProvider from '@src/components/HeaderBreadcrumb/header.context'
import { SWRConfig } from 'swr'

axios.defaults.baseURL = process.env.HOST_API

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
      }}
    >
      <HeaderContextProvider>
        <Layout>
          <LayoutBody>
            <Component {...pageProps} />
          </LayoutBody>
        </Layout>
      </HeaderContextProvider>
    </SWRConfig>
  )
}

export default MyApp
