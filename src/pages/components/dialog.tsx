import theme from '@/styles/theme'
import { Autocomplete, Box, Button, Dialog, Divider, FormControl, IconButton, InputBase, Pagination, PaginationItem, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import SearchBar from './searchBar';

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
        <Stack spacing={2}>
            <Stack spacing={2}>
                <Stack justifyContent={'space-between'} direction={'row'} alignContent={'flex-start'}>
                    <Stack spacing={1}>
                        <Typography variant='h5' fontWeight={500}>ผู้มีบัตรพิการ</Typography>
                        <Typography variant='button' color={'#616366'} fontWeight={400}>จำนวนทั้งหมด {num} คน</Typography>
                    </Stack>
                    <IconButton onClick={close}>
                        <CloseIcon/>
                    </IconButton>
                </Stack>
                <Stack direction={'row'} width={'100%'} justifyContent={'center'}>
                    <SearchBar/>
                </Stack>
            </Stack>
            <Stack>
                <Box padding={'8px 0px'}>
                    <Typography variant='body2' color={'#616366'}>ชื่อ-นามสกุล</Typography>
                </Box>
                <Stack marginBottom={'10px'} height={'442px'}>
                    {info.map((item:data) => (
                        <Box key={item.id}>
                            <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'} padding={'12px 0px'}>
                                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                    <Image src={item.img} alt='profile' width={48} height={48}/>
                                    <Typography variant='button' fontWeight={500}>{item.name}</Typography>
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
    );
}

const RateAges = ({ info, close, num }:any) => {
    return(
        <Stack spacing={2}>
            <Stack spacing={2}>
                <Stack justifyContent={'space-between'} direction={'row'} alignContent={'flex-start'}>
                    <Stack spacing={1}>
                        <Typography variant='h5' fontWeight={500}>ผู้มีบัตรพิการ</Typography>
                        <Typography variant='button' color={'#616366'} fontWeight={400}>จำนวนทั้งหมด {num} คน</Typography>
                    </Stack>
                    <IconButton onClick={close}>
                        <CloseIcon/>
                    </IconButton>
                </Stack>
                <Stack direction={'row'} width={'100%'} justifyContent={'center'}>
                    <SearchBar/>
                </Stack>
            </Stack>
            <Stack>
                <Box padding={'8px 0px'}>
                    <Typography variant='body2' color={'#616366'}>ชื่อ-นามสกุล</Typography>
                </Box>
                <Stack marginBottom={'10px'} height={'442px'}>
                    {info.map((item:data) => (
                        <Box key={item.id}>
                            <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'} padding={'12px 0px'}>
                                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                    <Image src={item.img} alt='profile' width={48} height={48}/>
                                    <Typography variant='button' fontWeight={500}>{item.name}</Typography>
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
                ? <RateAges close={close} info={paginatedData} num={info.num}/>
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