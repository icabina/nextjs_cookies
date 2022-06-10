import { useEffect, useState } from 'react'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { customTheme, darkTheme, lightTheme } from '../themes'
import '../styles/globals.css'
import { GetServerSideProps } from 'next'
import Cookies from 'js-cookie'

interface Props extends AppProps{
  theme: string;
}
function MyApp({ Component, pageProps, theme = "dark"}: Props) {

const[currentTheme, setCurrentTheme] = useState(lightTheme)

useEffect(()=>{
  const cookieTheme = Cookies.get('theme') || 'light';
  const selectedTheme = cookieTheme ==='light' ? lightTheme : (cookieTheme === 'dark') ? darkTheme : customTheme;

  setCurrentTheme(selectedTheme)
},[])



  return(
<ThemeProvider theme={currentTheme}>
    <CssBaseline/>
  <Component {...pageProps} />
</ThemeProvider>
  
  )
}



// MyApp.getInitialProps = async(appContext: AppContext) => {

//   //obtener la Cookie
//   const {theme} = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'}

//   const validThemes = ['light', 'dark', 'custom']

//   // console.log('getInitialProps: ', cookies)

//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',

//   }
// }
export default MyApp
