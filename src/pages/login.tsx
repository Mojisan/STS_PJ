import { ThemeProvider } from '@emotion/react'
import { Stack } from '@mui/material'
import React from 'react'
import LeftLogin from './components/leftLogin'
import LoginContent from './components/loginContent'
import theme from '@/styles/theme'

const Login = () => {
  return (
    <>
        <ThemeProvider theme={theme}>
          <Stack direction={'row'}>
            <LeftLogin/>
            <LoginContent/>
          </Stack>
        </ThemeProvider>
    </>
  )
}

export default Login