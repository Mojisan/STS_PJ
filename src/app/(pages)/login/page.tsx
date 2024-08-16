import { Stack } from '@mui/material'
import React from 'react'
import LeftLogin from './components/leftLogin'
import LoginContent from './components/loginContent'

const Login = () => {
  return (
    <>
      <Stack direction={'row'}>
        <LeftLogin />

        <LoginContent />
      </Stack>
    </>
  )
}

export default Login