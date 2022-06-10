import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from '../themes'
import '../styles/globals.css'
import { GetServerSideProps } from 'next'

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return(
<ThemeProvider theme={darkTheme}>
    <CssBaseline/>
  <Component {...pageProps} />
</ThemeProvider>
  
  )
}



MyApp.getInitialProps = async(appContext: AppContext) => {

  //obtener la Cookie
  const {theme} = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'}

  const validThemes = ['light', 'dark', 'custom']

  // console.log('getInitialProps: ', cookies)

  return {
    theme: validThemes.includes(theme) ? theme : 'dark',

  }
}
export default MyApp
