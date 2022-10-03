import '../styles/globals.css'
import 'reactflow/dist/style.css';

import type { AppProps } from 'next/app'
import axios from 'axios'
import LayoutBody from '@src/layout/Body'
import Layout from '@src/layout/Layout'
import HeaderContextProvider from '@src/components/HeaderBreadcrumb/header.context'
import { SWRConfig } from 'swr'
import ModalContextProvider from '@src/context/modal.context';
import { useRouter } from 'next/router';
import { StepType, TourProvider } from '@reactour/tour';
import { SelectContextProvider } from '@src/components/UI/Select';

axios.defaults.baseURL = process.env.HOST_API

const WELCOME_TOUR = "tour-welcome"
const steps: StepType[] = [
  {
    selector: '.menu-item:nth-child(3)',
    content: 'Welcome! You can manage your flows right here',
  },
  {
    selector: ".menu-item:nth-child(4)",
    content: 'Also here you can config your global checkout form'
  },
]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <TourProvider 
      steps={steps} 
      beforeClose={(c) => { 
        localStorage.setItem(WELCOME_TOUR, "1"); 
      }}
    >
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          refreshWhenOffline: false,
          refreshWhenHidden: false,
          refreshInterval: 0,
        }}
      >
        <SelectContextProvider>
          <ModalContextProvider>
            <HeaderContextProvider>
              <Layout>
                <LayoutBody>
                  <Component {...pageProps} />
                </LayoutBody>
              </Layout>
            </HeaderContextProvider>
          </ModalContextProvider>
        </SelectContextProvider>
      </SWRConfig>
    </TourProvider>
  )
}

export default MyApp
