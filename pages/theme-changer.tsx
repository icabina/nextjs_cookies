import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Layout } from '../components/layouts'
import Cookies from 'js-cookie';

const ThemeChanger:FC = (props) => {

    const[currentTheme, setCurrentTheme] = useState('custom')


    const onThemeChange =(e:ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = (e.target.value)

        setCurrentTheme(selectedTheme)

        localStorage.setItem('theme cookie', selectedTheme)
        Cookies.set('theme', selectedTheme)
    }

useEffect(()=>{
    console.log('localStorage: ', localStorage.getItem('theme'))
},[])

  return (
    <Layout> 
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Tema</FormLabel>
                    <RadioGroup value={currentTheme} onChange={onThemeChange}>
                        <FormControlLabel value="light" control={<Radio/>} label="light" />
            
                        <FormControlLabel value="dark" control={<Radio/>} label="dark" />
              
                        <FormControlLabel value="custom" control={<Radio/>} label="custom" />
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    </Layout>
  )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    // const cookies = req.cookies
    const {theme = 'light', name='No name'} = req.cookies;

    return {
        props: {
            theme: theme,
            mame: name
        }
    }
}





export default ThemeChanger