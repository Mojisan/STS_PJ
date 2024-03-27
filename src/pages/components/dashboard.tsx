import theme from '@/styles/theme'
import { Box, Button, Divider, Stack, ThemeProvider, Typography } from '@mui/material'
import { AxisConfig, BarChart, PieChart } from '@mui/x-charts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type ChartType = {
    id: string,
    label: string,
    value: number
}

type PieType = {
    id: string,
    label: string,
    value: number,
    color: string
}

type UseAppType = {
    id: string,
    label: string,
    value: number,
    logo: string,
    per: number
}

const Bar = ({ data }:any) => {
    const uData = data.map((item:ChartType) => item.value);
    const xLabels = data.map((item:ChartType) => item.label);

    return(
        <BarChart
        width={1160}
        height={296}
        colors={['#00338D']}
        layout="vertical"
        grid={{horizontal: true}}
        series={[
            { data: uData },
        ]}
        xAxis={[{ 
            data: xLabels, 
            scaleType: 'band',
            categoryGapRatio: 0.6,
        }]}
        />
    );
}

const BarText = ({ data }:any) => {
    return(
        <Stack direction={'column'}>
            {data.map((item:ChartType) => (
                <Box key={item.id}>
                    <Stack direction={'row'} justifyContent={'space-between'} padding={'12px 0px'} boxSizing={'border-box'}>
                        <Typography variant='button' fontWeight={400}>{item.id}. {item.label}</Typography>
                        <Typography variant='button' fontWeight={500}>{item.value} คน</Typography>
                    </Stack>
                    <Divider/>
                </Box>
            ))}
        </Stack>
    );
}

const Pie = ({ data }:any) => {
    const colors = data.map((item:PieType) => item.color)

    return(
        <PieChart
        colors={colors}
        series={[
            {
              data,
              innerRadius: 40,
              outerRadius: 80,
            },
          ]}
        margin={{ right: 5 }}
        width={160}
        height={160}
        slotProps={{
            legend: { hidden: true },
        }}
        />
    );
}

const LabelPie = ({ data }:any) => {
    return(
        <Stack direction={'row'} spacing={1} paddingTop={'16px'}>
            {data.map((item:PieType) => (
                <Stack key={item.id} direction={'row'} spacing={0.5} alignItems={'center'}>
                    <Box width={'8px'} height={'8px'} bgcolor={item.color} borderRadius={'9999px'}></Box>
                    <Typography variant='h6' color={'#475467'}>{item.label}</Typography>
                </Stack>
            ))}
        </Stack>
    );
}

const UseAppText = ({ data }:any) => {
    return(
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
    );
}

const Dashboard = (/*{ tab, info }:any*/) => {
    const dataChart:ChartType[] = [
        {id: '1' ,label: 'การมองเห็น', value: 500},
        {id: '2' ,label: 'ได้ยินหรือสื่อความหมาย', value: 420},
        {id: '3' ,label: 'เคลื่อนไหวหรือทางร่างกาย', value: 820},
        {id: '4' ,label: 'จิตใจหรือพฤติกรรม', value: 500},
        {id: '5' ,label: 'สติปัญญา', value: 400},
        {id: '6' ,label: 'การเรียนรู้', value: 600},
        {id: '7' ,label: 'ออทิสติก', value: 700},
    ]
    const dataPie: PieType[] = [
        { id: "1", value: 30, label: 'ระดับการศึกษา', color: '#00338D' },
        { id: "2", value: 20, label: 'กำลังศึกษา', color: '#5476B3' },
        { id: "3", value: 40, label: 'ไม่ได้เรียน', color: '#E6EBF4' },
    ];
    const dataUseApp: UseAppType[] = [
        { id: '1' ,label: 'Daily Tasks', value: 128, logo: '/images/icons/logoex.png', per: 34 },
        { id: '2' ,label: 'Trace & Share', value: 128, logo: '/images/icons/logoex.png', per: 34 },
        { id: '3' ,label: 'Kare Application', value: 128, logo: '/images/icons/logoex.png', per: 34 },
        { id: '4' ,label: 'Communications', value: 128, logo: '/images/icons/logoex.png', per: 34 },
    ]

  return (
    <ThemeProvider theme={theme}>
        <Stack direction={'column'} spacing={2}>
            <Stack direction={'row'} spacing={5}>
                <Box>
                    <Typography variant='h6'>จำนวนผู้มีบัตรพิการ</Typography>
                    <Typography variant='h5' marginTop="8px">30 คน</Typography>
                </Box>
                <Box>
                    <Typography variant='h6'>อายุเฉลี่ยของผู้มีบัตร</Typography>
                    <Typography variant='h5' marginTop="8px">16 ปี</Typography>
                </Box>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <Stack border={'1px solid #E6EBF4'} borderRadius={8} padding={"24px"} width={"1160px"} height={"296px"} boxSizing={'border-box'}>
                    <Stack direction={'row'} justifyContent={'space-between'} marginBottom={"24px"}>
                        <Typography variant='h5'>สวัสดิการ</Typography>
                        <Button variant='text'>
                            <Typography variant='h6' fontWeight={600} color={'primary'}>ดูรายชื่อ</Typography>
                        </Button>
                    </Stack>
                    <Bar data={dataChart}/>
                </Stack>
                <Stack border={'1px solid #E6EBF4'} borderRadius={8} height={"296px"} width={"360px"} padding={"24px"} boxSizing={'border-box'}>
                    <Stack direction={'row'} justifyContent={'space-between'} marginBottom={"24px"}>
                        <Typography variant='h5'>วุฒิการศึกษา</Typography>
                        <Button variant='text'>
                            <Typography variant='h6' fontWeight={600} color={'primary'}>ดูรายชื่อ</Typography>
                        </Button>
                    </Stack>
                    <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
                        <Pie data={dataPie}/>
                        <LabelPie data={dataPie}/>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <Stack width={"1160px"} height={"296px"}>
                    <Stack direction={'row'} justifyContent={'space-between'} marginBottom={"16px"} alignItems={'center'}>
                        <Typography variant='h5'>สวัสดิการ</Typography>
                        <Link href={'/'} style={{textDecoration: "none"}}>
                            <Typography variant='h6' fontWeight={600} color={'primary'} textAlign={'right'}>ดูรายชื่อ</Typography>
                        </Link>
                    </Stack>
                    <BarText data={dataChart}/>
                </Stack>
                <Stack height={"296px"} width={"360px"}>
                    <Stack direction={'row'} justifyContent={'space-between'} marginBottom={"16px"} alignItems={'center'}>
                        <Typography variant='h5'>การใช้งานแอปพลิเคชัน</Typography>
                        <Link href={'/'} style={{textDecoration: "none"}}>
                            <Typography variant='h6' fontWeight={600} color={'primary'}>ดูรายชื่อ</Typography>
                        </Link>
                    </Stack>
                    <UseAppText data={dataUseApp}/>
                </Stack>
            </Stack>
        </Stack>
    </ThemeProvider>
  )
}

export default Dashboard