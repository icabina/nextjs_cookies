import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Layout } from '../components/layouts'
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next'
import axios from 'axios';



interface Props{
    theme: string;
}

const ThemeChanger:FC<Props> = ({theme}) => {

    const[currentTheme, setCurrentTheme] = useState(theme)


    const onThemeChange =(e:ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = (e.target.value)

        setCurrentTheme(selectedTheme)

        localStorage.setItem('theme cookie', selectedTheme)
        Cookies.set('theme', selectedTheme)
    }

    const onClick = async() =>{
        const {data} = await axios.get('/api/hello')
        console.log({data})
    }

useEffect(()=>{
    console.log('localStorage: ', localStorage.getItem('theme'))
    console.log('Cookies: ', Cookies.get('theme'))
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
                <Button onClick={onClick}>Solicitud</Button>
            </CardContent>
        </Card>
    </Layout>
  )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    // const cookies = req.cookies
    const {theme = 'light', name='No name'} = req.cookies;
    const validThemes = ['light', 'dark', 'custom']
    return {
        props: {
            theme: validThemes.includes(theme) ? theme : 'dark',
            mame: name
        }
    }
}





export default ThemeChanger