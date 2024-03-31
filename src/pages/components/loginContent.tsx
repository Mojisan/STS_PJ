import theme from '@/styles/theme'
import { InputAdornment, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

const LoginContent = () => {
  return (
    <ThemeProvider theme={theme}>
        <Stack width={'1120px'} height={'971px'} bgcolor={'#fff'} 
        justifyContent={'center'} 
        alignItems={'center'} 
        padding={'362.5px 380px'} 
        boxSizing={'border-box'}
        spacing={2}
        >
            <Stack>
                <Typography variant='h3'>ลงชื่อเข้าใช้บัญชี</Typography>
                <Typography variant='button' fontWeight={400} color={'#616366'}>กรุณากรอกรายละเอียดของคุณเพื่อเข้าสู่ระบบ</Typography>
            </Stack>
            <Stack>
            <TextField
            className='.MuiTextField-root'
            style={{borderRadius: '16px'}}
            placeholder='00-000-0000'
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    +66
                </InputAdornment>
                ),
            }}
            />
            </Stack>
        </Stack>
    </ThemeProvider>
  )
}

export default LoginContent