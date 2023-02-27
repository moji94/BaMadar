import '@/styles/globals.css'
import '../public/fonts/Vazir/font.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Vazir !important;
    .swal2-styled {
      font-family: Vazir !important;

    }
    background-color: rgb(245, 245, 245);
  }
  .swal2-confirm {
    background-color: #0095ff !important;
  }
  .swal2-deny {
    background-color: #fff !important;
    border: 1px solid #0095ff !important;
    color: #0095ff !important;
  }
`
