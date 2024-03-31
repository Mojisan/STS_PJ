import theme from '@/styles/theme'
import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const LeftLogin = () => {
  return (
    <ThemeProvider theme={theme}>
        <Stack width={'800px'} height={'971px'} bgcolor={'#F4F6FA'} padding={'80px 141px'} justifyContent={'space-between'} boxSizing={'border-box'}>
            <Stack spacing={1}>
                <Typography variant='h1' lineHeight={'40px'}>ระบบสำรวจ <br/> และการคัดกรองเบื้องต้น</Typography>
                <Typography variant='h5' lineHeight={'28px'} fontWeight={500} color={'#616366'}>สำหรับบุคคลที่มีความต้องการจำเป็นพิเศษ</Typography>
                <Typography variant='h6' lineHeight={'20px'} fontWeight={600} color={'#00338D'}>มูลนิธิออทิสติกไทย</Typography>
            </Stack>
            <Stack justifyContent={'center'}>
                <Image src={'/images/props/Prop1.png'} alt='prop' width={518} height={480}/>
            </Stack>
            <Stack spacing={2}>
                <Typography variant='h6' color={'#616366'}>สนับสนุนโดย</Typography>
                <Image src={'/images/logo/logo2.png'} alt='logo' width={441.34} height={48.1}/>
            </Stack>
        </Stack>
    </ThemeProvider>
  )
}

export default LeftLogin