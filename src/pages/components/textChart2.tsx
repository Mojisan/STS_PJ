import theme from '@/styles/theme'
import { Box, Divider, Stack, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type UseAppType = {
    id: string,
    label: string,
    value: number,
    logo: string,
    per: number
}

const TextChart2 = ({ width, height, label, setOpen, setPopup, data, popup }:any) => {
    const handleOpen = () => {
        setOpen(true)
        setPopup(popup)
    }

  return (
    <ThemeProvider theme={theme}>
        <Stack height={height} width={width}>
            <Stack direction={'row'} justifyContent={'space-between'} marginBottom={"16px"} alignItems={'center'}>
                <Typography variant='h5'>การใช้งานแอปพลิเคชัน</Typography>
                <Link href={''} style={{textDecoration: "none"}} onClick={handleOpen}>
                    <Typography variant='h6' fontWeight={600} color={'primary'}>ดูรายชื่อ</Typography>
                </Link>
            </Stack>
            <Stack direction={'column'}>
                {data.map((item:UseAppType) => (
                    <Box key={item.id}>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack direction={'row'} alignItems={'center'} spacing={1} padding={'12px 0px'}>
                                <Box padding={'2px 0px'}>
                                    <Image src={item.logo} alt={'logo'} width={40} height={40}/>
                                </Box>
                                <Box>
                                    <Typography variant='h6' color={'#616366'} marginBottom={'4px'}>{item.label}</Typography>
                                    <Typography variant='button'>{item.value} คน</Typography>
                                </Box>
                            </Stack>
                            <Stack>
                                <Typography variant='button' color={'#A3A7AD'} fontWeight={400}>{item.per}%</Typography>
                            </Stack>
                        </Stack>
                        <Divider/>
                    </Box>
                ))}
            </Stack>
        </Stack>
    </ThemeProvider>
  )
}

export default TextChart2