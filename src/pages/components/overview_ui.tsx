import theme from '@/styles/theme'
import { Box, Stack, Tab, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import Buttons from './buttons'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Dashboard from './dashboard'

const Overview_ui = () => {
    const [tabs, setTabs] = useState("1")

    const handleChange = (e: React.SyntheticEvent, tab: string) => {
        setTabs(tab);
      };

    const tab1 = () => {
        return(
            <Box width={500} height={500} bgcolor={"#000"}>Hello</Box>
        ); 
    }

  return (
    <ThemeProvider theme={theme}>
        <Stack direction={'column'} spacing={2} padding="32px">
            <Stack direction={'column'} spacing={2}>
                <Typography variant='h3'>หน่วยงาน โรงเรียนกรุงเทพมหานคร</Typography>
                <Box>
                    <Buttons icon="/images/icons/calendar.png" text="เลือกวันที่"/>
                </Box>
                <Box sx={{ width: '100%', typography: 'button', fontWeight: 500 }}>
                    <TabContext value={tabs}>
                        <TabList onChange={handleChange}>
                            <Tab label="ภาพรวม" value="1" />
                            <Tab label="การประกอบอาชีพ" value="2" />
                            <Tab label="ทักษะพื้นฐาน" value="3" />
                            <Tab label="การสนับสนุนจากรัฐ" value="4" />
                            <Tab label="ที่อยู่อาศัย" value="5" />
                        </TabList>
                        <TabPanel value="1"><Dashboard/></TabPanel>
                        <TabPanel value="2">Item 2</TabPanel>
                        <TabPanel value="3">Item 3</TabPanel>
                        <TabPanel value="4">Item 4</TabPanel>
                        <TabPanel value="5">Item 4</TabPanel>
                    </TabContext>
                </Box>
            </Stack>
        </Stack>
    </ThemeProvider>
  )
}

export default Overview_ui