import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body className='bg-white transition-all dark:bg-zinc-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}