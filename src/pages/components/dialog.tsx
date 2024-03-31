import theme from '@/styles/theme'
import { Autocomplete, Box, Button, Dialog, Divider, FormControl, IconButton, InputBase, Pagination, PaginationItem, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import SearchBar from './searchBar';
import Dropdown from './dropdown';
import Popup from './popup';

type data = {
    id: string,
    name: string,
    img: string,
    file: string,
    age: number,
    educate: string,
    type: string[],
    app: string,
    benefit: string[]
}

const HaveCard = ({ info, close, num }:any) => {
    return(
        <Popup 
        info={info} 
        close={close} 
        num={num}  
        label={'ผู้มีบัตรพิการ'}/>
    );
}

const RateAges = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.rateAge} 
        auto={true}
        label={'อายุเฉลี่ยผู้มีบัตร'} 
        label2={'เลือกช่วงอายุ'} 
        label3={'อายุ'}
        />
    )
}

const Educate = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.educate} 
        auto={true}
        label={'วุฒิการศึกษา'} 
        label2={'เลือกวุฒิการศึกษา'} 
        label3={'วุฒิการศึกษา'}
        />
    )
}
const TypeS = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ประเภทความพิการ'} 
        label2={'เลือกประเภทความพิการ'} 
        label3={'ประเภทความพิการ'}
        />
    )
}
const UseApp = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'การใช้แอปพลิเคชัน'} 
        label2={'เลือกแอปพลิเคชัน'} 
        label3={'แอปพลิเคชัน'}
        />
    )
}
const Benefit = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'สวัสดิการที่ได้รับ'} 
        label2={'เลือกสวัสดิการที่ได้รับ'} 
        label3={'สวัสดิการที่ได้รับ'}
        />
    )
}
const Career = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'การประกอบอาชีพ'} 
        label2={'เลือกประเภทอาชีพ'} 
        label3={'ประเภทอาชีพ'}
        />
    )
}
const InComeNum = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'จำนวนรายได้ผู้พิการ'} 
        label2={'เลือกจำนวนรายได้'} 
        label3={'รายได้ (บาท)'}
        />
    )
}
const InCome = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'รายได้ผู้พิการ'} 
        label2={'เลือกรายได้'} 
        label3={'รายได้'}
        />
    )
}
const Career2 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ข้อมูลอาชีพ'} 
        label2={'เลือกอาชีพ'} 
        label3={'อาชีพ'}
        />
    )
}
const Skill1 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ทักษะพื้นฐานการดำรงชีวิต'} 
        label2={'เลือกทักษะพื้นฐานการดำรงชีวิต'} 
        label3={'ทักษะพื้นฐานการดำรงชีวิต'}
        />
    )
}
const Skill2 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ทักษะเทคโนโลยี'} 
        label2={'เลือกทักษะเทคโนโลยี'} 
        label3={'ทักษะเทคโนโลยี'}
        />
    )
}
const Skill3 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ทักษะความสามารถพิเศษ'} 
        label2={'เลือกทักษะความสามารถพิเศษ'} 
        label3={'ทักษะความสามารถพิเศษ'}
        />
    )
}
const Skill4 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ทักษะที่ต้องการการสนับสนุน'} 
        label2={'เลือกทักษะที่ต้องการการสนับสนุน'} 
        label3={'ทักษะที่ต้องการการสนับสนุน'}
        />
    )
}
const Health = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'สาธารณสุข'} 
        label2={'เลือกสาธารณสุข'} 
        label3={'สาธารณสุข'}
        />
    )
}
const Health2 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'สภาพความเดือดร้อน'} 
        label2={'เลือกสภาพความเดือดร้อน'} 
        label3={'สภาพความเดือดร้อน'}
        />
    )
}
const Health4 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'สวัสดิการสังคม'} 
        label2={'เลือกสวัสดิการสังคม'} 
        label3={'สวัสดิการสังคม'}
        />
    )
}
const Home1 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ปรับปรุงบ้าน'} 
        label2={'เลือกปรับปรุงบ้าน'} 
        label3={'ปรับปรุงบ้าน'}
        />
    )
}
const Home2 = ({ info, close, num, option }:any) => {
    return(
        <Popup
        info={info} 
        close={close} 
        num={num} 
        option={option.typeS} 
        auto={true}
        label={'ส่วนที่ปรับปรุงบ้าน'} 
        label2={'เลือกส่วนที่ปรับปรุงบ้าน'} 
        label3={'ส่วนที่ปรับปรุงบ้าน'}
        />
    )
}

const DialogList = ({ open, close, type, info }:any) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    const handleChange = (event: React.ChangeEvent<unknown>, value: any) => {
        setPage(value);
    };

    const pageOptions = Array.from({ length: Math.ceil(info.dataUser.length / 6) }, (_, i) => i + 1);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = info.dataUser.slice(startIndex, endIndex);

    const [selectedPage, setSelectedPage] = useState(page);

    useEffect(() => {
    setSelectedPage(page);
    }, [page]);

  return (
    <ThemeProvider theme={theme}>
        <Dialog open={open} onClose={close}
        maxWidth="md" // กำหนดขนาดสูงสุดให้เป็น medium
        PaperProps={{ style: { width: '640px', height: '720px', borderRadius: '12px', padding: '16px 24px 24px 24px'}}}
        >
            {type == 'haveCard'
                ? <HaveCard close={close} info={paginatedData} num={info.num}/> 
            : type == "rateAges"  
                ? <RateAges close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "educate"  
                ? <Educate close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "typeS"  
                ? <TypeS close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "useApp"  
                ? <UseApp close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "benefit"  
                ? <Benefit close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "career"  
                ? <Career close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "incomeNum"  
                ? <InComeNum close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "income"  
                ? <InCome close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "career2"  
                ? <Career2 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "skill1"  
                ? <Skill1 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "skill2"  
                ? <Skill2 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "skill3"  
                ? <Skill3 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "skill4"  
                ? <Skill4 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "health1"  
                ? <Health close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "health2"  
                ? <Health2 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "health3"  
                ? <Career close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "health4"  
                ? <Health4 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "health5"  
                ? <Educate close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "home1"  
                ? <Home1 close={close} info={paginatedData} num={info.num} option={info}/>
            : type == "home2"  
                ? <Home2 close={close} info={paginatedData} num={info.num} option={info}/>
            : "Hello"     
            }
            <Stack spacing={2} width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} marginTop={'10px'} justifyContent={'end'}>
                <Divider sx={{width: '107%'}}/>
                <Stack width={'100%'} justifyContent={'space-between'} direction={'row'} alignItems={'center'}>
                    <Stack>
                        <Autocomplete
                        options={pageOptions}
                        value={selectedPage}
                        onChange={(event, newValue) => handleChange(event, newValue)}
                        size='small'
                        sx={{ width: '88px' }}
                        renderInput={(params) => <TextField {...params} sx={{fontSize: "20px"}}/>}
                        />
                    </Stack>
                    <Stack>
                        <Pagination
                            count={Math.ceil(info.dataUser.length / 6)}
                            page={page}
                            onChange={handleChange}
                            size='large'
                        />
                    </Stack>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography variant='body2'>ไปยังหน้า</Typography>
                        <TextField variant='outlined' style={{borderRadius: '16px'}} sx={{width: '64px'}} size='small' value={page} onChange={(e) => setPage(e.target.value !== ''? parseInt(e.target.value) : 0)} />
                    </Stack>
                </Stack>
            </Stack>
        </Dialog>
    </ThemeProvider>
  )
}

export default DialogList