import NextLink from 'next/link'
import {AppBar, IconButton, Link, Toolbar, Typography} from '@mui/material'
import {Menu, MenuOutlined} from '@mui/icons-material'

export const Navbar = () => {
    return(
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start">
                    <MenuOutlined/>
                </IconButton>
                <NextLink href="/" passHref>
                    <Link className="link">
                        <Typography variant='h6' color='white'>CookieMaster</Typography>
                    </Link>
                </NextLink>
            <div style={{flex: 1}}/>
                <NextLink href="/theme-changer" passHref>
                    <Link className="link">
                        <Typography variant='h6' color='white'>Cambiar Tema</Typography>
                    </Link>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}