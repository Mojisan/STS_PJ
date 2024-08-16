"use client"

import {
  Box,
  Button,
  Stack,
  Tab,
  Typography
} from '@mui/material'
import React,
{ useState } from 'react'
import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab'

// import Dashboard from './dashboard'
import info from '@public/data/info.json'
import Image from 'next/image'
import {
  Dashboard1,
  Dashboard2,
  Dashboard3,
  Dashboard4,
  Dashboard5
} from './dashboard'

interface Tab {
  label: string,
  contents: (data: any) => JSX.Element
}

function getIconByName(name: string) {
  return `/images/icons/${name}.png`
}

const OverviewUI = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState<string>("ภาพรวม")

  const tabList: Tab[] = [
    { label: "ภาพรวม", contents: (data: any) => <Dashboard1 data={data} /> },
    { label: "การประกอบอาชีพ", contents: (data: any) => <Dashboard2 data={data} /> },
    { label: "ทักษะพื้นฐาน", contents: (data: any) => <Dashboard3 data={data} /> },
    { label: "การสนับสนุนจากรัฐ", contents: (data: any) => <Dashboard4 data={data} /> },
    { label: "การศึกษา", contents: (data: any) => <Dashboard5 data={data} /> },
  ]

  const handleChangeTab = (newTabIndex: string) => {
    setCurrentTabIndex(newTabIndex)
  }

  return (
    <Stack
      direction={'column'}
      spacing={2}
      padding="32px"
    >
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Typography variant='h3'>
          หน่วยงาน โรงเรียนกรุงเทพมหานคร
        </Typography>

        <Box>
          <Button>
            <Image
              src={getIconByName("calendar")}
              alt='icon'
              width={20}
              height={20}
            />
            <Typography
              variant='button'
              marginLeft="6px"
            >
              เลือกวันที่
            </Typography>
          </Button>
        </Box>

        <Box
          sx={{
            width: '100%',
            typography: 'button',
            fontWeight: 500
          }}>
          <TabContext value={currentTabIndex}>
            <TabList onChange={(_, newTabIndex) => handleChangeTab(newTabIndex)}>
              {tabList.map((tab) => (
                <Tab label={tab.label} value={tab.label} />
              ))}
            </TabList>

            {tabList.map((tab) => (
              <TabPanel value={tab.label}>
                {tab.contents(info)}

              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </Stack>
    </Stack>
  )
}

export default OverviewUI