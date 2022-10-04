import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className='bg-white transition-all dark:bg-zinc-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}