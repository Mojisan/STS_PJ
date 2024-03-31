import theme from '@/styles/theme'
import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import DialogList from './dialog';
import BarChartContent from './barChartContent';
import PieChartContent, { PieType } from './pieChartContent';
import TextChart1 from './textChart1';
import TextChart2 from './textChart2';
import Link from 'next/link';

const Dashboard1 = ({ data }:any) => {
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState("");
    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
        setPopup("haveCard")
    }
    const handleOpen2 = () => {
        setOpen(true)
        setPopup("rateAges")
    }

    return(
        <>
            <Stack direction={'column'} spacing={2}>
            <Stack direction={'row'} spacing={5}>
                <Box>
                    <Link href={""} style={{textDecoration: "none"}} onClick={handleOpen}>
                        <Typography variant='h6'>จำนวนผู้มีบัตรพิการ</Typography>
                        <Typography variant='h5' marginTop="8px">{data.numHaveCard} คน</Typography>
                    </Link>
                </Box>
                <Box>
                    <Link href={""} style={{textDecoration: "none"}} onClick={handleOpen2}>
                        <Typography variant='h6'>อายุเฉลี่ยของผู้มีบัตร</Typography>
                        <Typography variant='h5' marginTop="8px">{data.rateUser} ปี</Typography>
                    </Link>
                </Box>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <BarChartContent 
                width={1160} 
                height={296} 
                data={data.dataChart1} 
                label={'สวัสดิการ'} 
                setOpen={setOpen} 
                setPopup={setPopup} 
                popup="typeS"/>
                <PieChartContent 
                radius={160} 
                width={'360px'} 
                height={'296px'} 
                data={data.dataPie1} 
                label={'วุฒิการศึกษา'} 
                setOpen={setOpen} 
                setPopup={setPopup} 
                popup="educate"/>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <TextChart1 
                label={'สวัสดิการ'} 
                data={data.dataChart1} 
                width={'1160px'} 
                height={'296px'} 
                setOpen={setOpen} 
                setPopup={setPopup} 
                popup="benefit"/>
                <TextChart2 
                label={'การใช้งานแอปพลิเคชัน'} 
                data={data.dataUseApp1} 
                width={'360px'} 
                height={'296px'} 
                setOpen={setOpen} 
                setPopup={setPopup}
                popup={'useApp'}
                />
            </Stack>
        </Stack>
        <DialogList open={open} close={handleClose} type={popup} info={data}/>
        </>
    );
}

const Dashboard2 = ({ data }:any) => {
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState("");
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <>
            <Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={2}>
                    <PieChartContent 
                    data={data.dataCareer} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'จำนวนการประกอบอาชีพ'} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup="career"
                    head={true}
                    />
                    <BarChartContent 
                    width={760} 
                    height={560} 
                    data={data.dataIncomeNum.Chart}
                    label={'รายได้จากการประกอบอาชีพ'} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup='incomeNum'
                    rate={data.dataIncomeNum.rate}
                    />
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <PieChartContent 
                    data={data.dataIncome} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'รายได้'} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup="income"
                    head={true}
                    />
                    <TextChart1 
                    label={'ข้อมูลการประกอบอาชีพ'} 
                    data={data.dataSkill3} 
                    width={'760px'} 
                    height={'560px'} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup="career2"
                    line={true}
                    />
                </Stack>
            </Stack>
            <DialogList open={open} close={handleClose} type={popup} info={data}/>
        </>
    );
}

const Dashboard3 = ({ data }:any) => {
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState("");
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <>
            <Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={2}>
                    <PieChartContent 
                    data={data.dataSkill1} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'ทักษะพื้นฐานในการดำรงชีวิต'}
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    head={true} 
                    popup={'skill1'}/>
                    <TextChart1 
                    width={'760px'} 
                    height={'560px'} 
                    label={'ทักษะเทคโนโลยี'} 
                    data={data.dataSkill2} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup={'skill2'} 
                    line={true}/>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <BarChartContent
                    width={760}
                    height={560} 
                    data={data.dataSkill3} 
                    label={'ทักษะความสามารถพิเศษ'} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup={'skill3'} 
                    />
                    <BarChartContent
                    width={760}
                    height={560} 
                    data={data.dataSkill4} 
                    label={'ทักษะอาชีพที่ต้องการสนับสนุน'} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup={'skill4'} 
                    />
                </Stack>
            </Stack>
            <DialogList open={open} close={handleClose} type={popup} info={data}/>
        </>
    );
}

const Dashboard4 = ({ data }:any) => {
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState("");
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <>
            <Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={2}>
                    <PieChartContent 
                    data={data.dataHealth1} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'บริการทางการแพทย์และสาธารณสุข'}
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    head={true} 
                    popup={'health1'}/>
                    <PieChartContent 
                    data={data.dataHealth5} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'บริการด้านการศึกษา'}
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    head={true} 
                    popup={'health5'}/>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <PieChartContent 
                    data={data.dataHealth3} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'จำนวนการประกอบอาชีพ'}
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    head={true} 
                    popup={'health3'}/>
                    <TextChart1 
                    width={'760px'} 
                    height={'560px'} 
                    label={'สวัสดิการสังคม'} 
                    data={data.dataHealth4} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup={'health4'} 
                    line={true}/>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <TextChart1 
                    width={'760px'} 
                    height={'560px'} 
                    label={'สวัสดิการสังคม'} 
                    data={data.dataHealth2} 
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup={'health2'} 
                    line={true}/>
                </Stack>
            </Stack>
            <DialogList open={open} close={handleClose} type={popup} info={data}/>
        </>
    );
}

const Dashboard5 = ({ data }:any) => {
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState("");
    const handleClose = () => {
        setOpen(false)
    }
    return(
        <>
            <Stack direction={'column'} spacing={2}>
                <Stack direction={'row'} spacing={2}>
                    <PieChartContent 
                    data={data.dataPieEX} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'ปรับปรุงบ้าน'}
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup={'home1'}/>
                    <PieChartContent 
                    data={data.dataPieEX} 
                    radius={260} 
                    width={'760px'} 
                    height={'560px'} 
                    label={'ถ้าปรับปรุงได้ต้องการปรับปรุงส่วนใด'}
                    setOpen={setOpen} 
                    setPopup={setPopup} 
                    popup={'home2'}/>
                </Stack>
            </Stack>
            <DialogList open={open} close={handleClose} type={popup} info={data}/>
        </>
    );
}

const Dashboard = ({ tab, info }:any) => {
  return (
    <ThemeProvider theme={theme}>
        {tab==1 ?<Dashboard1 data={info}/>
        :tab==2 ?<Dashboard2 data={info}/>
        :tab==3 ?<Dashboard3 data={info}/>
        :tab==4 ?<Dashboard4 data={info}/>
        :tab==5 ?<Dashboard5 data={info}/>
        :""
        }
    </ThemeProvider>
  )
}

export default Dashboard