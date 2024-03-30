import theme from '@/styles/theme'
import { Button, ThemeProvider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function Buttons({icon = "none", text}:any) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained' color='secondary' sx={{borderRadius: "999px", border: "1px solid #E6EBF4", boxShadow: 0, bgcolor: "#fff", padding: "12px 20px"}}>
        {icon != "none"? <Image src={icon} alt='icon' width={20} height={20}/> : ""}
        <Typography variant='button' marginLeft="6px">{text}</Typography>
      </Button>
    </ThemeProvider>
  )
}

export default Buttons