import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { NextUIProvider, createTheme } from '@nextui-org/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {  
const darkTheme = createTheme({type: "dark"});
  return (
    <SessionProvider session={session}>
      <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  )
}