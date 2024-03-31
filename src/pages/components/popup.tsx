import theme from '@/styles/theme'
import { Box, Divider, IconButton, Stack, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from './searchBar';
import Dropdown from './dropdown';
import Image from 'next/image';

type data = {
    id: string,
    name: string,
    img: string,
    file: string,
    age: number,
    educate: string,
    type: string[],
    app: string,
    benefit: string[],
    incomeNum: string,
    income: string,
    career: string,
    careerType: string,
    skill1: string,
    skill2: string,
    skill3: string[],
    skill4: string[],
    health1: string,
    health2: string,
    benefit2: string,
    home1: string,
    home2: string
}

const ArrayData = ({data}:any) => {
    return(
        <Stack direction={'row'} alignItems={'center'}>
            {data.map((item:string) => (
                <Typography variant='button' fontWeight={500} key={item}>{item}</Typography>
            ))}
        </Stack>
    );
}

const Popup = ({ info, close, num, option, auto=false, label, label2, label3, kw }:any) => {
  return (
    <ThemeProvider theme={theme}>
        <Stack spacing={2}>
            <Stack spacing={2}>
                <Stack justifyContent={'space-between'} direction={'row'} alignContent={'flex-start'}>
                    <Stack spacing={1}>
                        <Typography variant='h5' fontWeight={500}>{label}</Typography>
                        <Typography variant='button' color={'#616366'} fontWeight={400}>จำนวนทั้งหมด {num} คน</Typography>
                    </Stack>
                    <IconButton onClick={close}>
                        <CloseIcon/>
                    </IconButton>
                </Stack>
                <Stack direction={'row'} width={'100%'} spacing={2} justifyContent={'center'}>
                    <SearchBar width={'300px'}/>
                    {auto? <Dropdown options={option} label={label2}/>: <></>}
                </Stack>
            </Stack>
            <Stack>
                <Stack direction={'row'} padding={'8px 0px'}>
                    <Typography variant='body2' color={'#616366'} width={'440px'}>ชื่อ-นามสกุล</Typography>
                    {auto? <Typography variant='body2' color={'#616366'}>{label3}</Typography>: <></>}
                </Stack>
                <Stack marginBottom={'10px'} height={'442px'}>
                    {info.map((item:data) => (
                        <Box key={item.id}>
                            <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'} padding={'12px 0px'}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Stack direction={'row'} width={'440px'} alignItems={'center'} spacing={2}>
                                        <Image src={item.img} alt='profile' width={48} height={48}/>
                                        <Typography variant='button' fontWeight={500}>{item.name}</Typography>
                                    </Stack>
                                    {auto&&label3=='อายุ'?<Typography variant='button' fontWeight={500}>{item.age}</Typography>
                                    :auto&&label3=='วุฒิการศึกษา'?<Typography variant='button' fontWeight={500}>{item.educate}</Typography>
                                    :auto&&label3=='ประเภทความพิการ'?<Typography variant='button' fontWeight={500}>{item.type[0]}</Typography>
                                    :auto&&label3=='แอปพลิเคชัน'?<Typography variant='button' fontWeight={500}>{item.app}</Typography>
                                    :auto&&label3=='สวัสดิการที่ได้รับ'?<Typography variant='button' fontWeight={500}>{item.benefit[0]}</Typography>
                                    :auto&&label3=='ประเภทอาชีพ'?<Typography variant='button' fontWeight={500}>{item.careerType}</Typography>
                                    :auto&&label3=='รายได้ (บาท)'?<Typography variant='button' fontWeight={500}>{item.incomeNum}</Typography>
                                    :auto&&label3=='รายได้'?<Typography variant='button' fontWeight={500}>{item.income}</Typography>
                                    :auto&&label3=='อาชีพ'?<Typography variant='button' fontWeight={500}>{item.career}</Typography>
                                    :auto&&label3=='ทักษะพื้นฐานการดำรงชีวิต'?<Typography variant='button' fontWeight={500}>{item.skill1}</Typography>
                                    :auto&&label3=='ทักษะเทคโนโลยี'?<Typography variant='button' fontWeight={500}>{item.skill2}</Typography>
                                    :auto&&label3=='ทักษะความสามารถพิเศษ'?<Typography variant='button' fontWeight={500}>{item.skill3}</Typography>
                                    :auto&&label3=='ทักษะที่ต้องการการสนับสนุน'?<Typography variant='button' fontWeight={500}>{item.skill4}</Typography>
                                    :auto&&label3=='สาธารณสุข'?<Typography variant='button' fontWeight={500}>{item.health1}</Typography>
                                    :auto&&label3=='สภาพความเดือดร้อน'?<Typography variant='button' fontWeight={500}>{item.health2}</Typography>
                                    :auto&&label3=='ประเภทอาชีพ'?<Typography variant='button' fontWeight={500}>{item.careerType}</Typography>
                                    :auto&&label3=='สวัสดิการสังคม'?<Typography variant='button' fontWeight={500}>{item.benefit2}</Typography>
                                    :auto&&label3=='ปรับปรุงบ้าน'?<Typography variant='button' fontWeight={500}>{item.home1}</Typography>
                                    :auto&&label3=='ส่วนปรับปรุงบ้าน'?<Typography variant='button' fontWeight={500}>{item.home2}</Typography>
                                    :<></>
                                    }
                                </Stack>
                                <IconButton>
                                    <Image src={'/images/icons/download.png'} alt='icon' width={20} height={20}/>
                                </IconButton>
                            </Stack>
                            <Divider/>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    </ThemeProvider>
  )
}

export default Popup