import type { AppProps } from 'next/app'
import { AuthProvider } from '@context/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { Navbar } from '@components/Navbar'
import { theme } from 'theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JS Frameworks CA</title>
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Navbar />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  )
}
