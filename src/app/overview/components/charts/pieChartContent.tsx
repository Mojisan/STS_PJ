import { PopupType } from '@/app/overview/enums/popup'
import {
  Box,
  Stack,
  Typography
} from '@mui/material'
import { PieChart } from '@mui/x-charts'
import Link from 'next/link'
import React from 'react'

interface PieType {
  id: string
  label: string
  value: number
  color: string
}

interface IPieChartContent {
  data: PieType[]
  radius: number
  width: number
  height: number
  label: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setPopup: React.Dispatch<React.SetStateAction<PopupType | undefined>>
  head?: boolean
  popup: PopupType
}

const PieChartContent: React.FC<IPieChartContent> = ({
  data,
  radius,
  width,
  height,
  label,
  setOpen,
  setPopup,
  head = false,
  popup }) => {
  const colors = data.map((item: PieType) => item.color)

  const handleOpen = () => {
    setOpen(true)
    setPopup(popup)
  }

  return (
    <Stack
      border={'1px solid #E6EBF4'}
      borderRadius={8}
      height={height}
      width={width}
      padding={"24px"}
      boxSizing={'border-box'}
      sx={head ? { justifyContent: 'space-between' } : {}}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        marginBottom={"24px"}
      >
        <Typography variant='h5'>
          {label}
        </Typography>

        <Link
          href={''}
          style={{ textDecoration: "none" }}
          onClick={handleOpen}
        >
          <Typography
            variant='h6'
            fontWeight={600}
            color={'primary'}
          >
            ดูรายชื่อ
          </Typography>
        </Link>
      </Stack>

      {head ?
        <Stack direction={'row'}>
          {data.map((item: PieType) => (
            <Stack
              spacing={1}
              width={'344px'}
            >
              <Typography
                variant='h6'
                color={'#616366'}
              >
                {item.label}
              </Typography>
              <Typography
                variant='h5'
                fontWeight={500}
              >
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
        : <></>
      }

      <Stack
        width={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={!head && label == 'วุฒิการศึกษา' ? {} : !head ? { marginTop: '70px' } : {}}>
        <PieChart
          colors={colors}
          series={[
            {
              data,
              innerRadius: radius / 4,
              outerRadius: radius / 2,
            },
          ]}
          margin={{ right: 5 }}
          width={radius}
          height={radius}
          slotProps={{
            legend: { hidden: true },
          }}
        />

        <Stack
          direction={'row'}
          spacing={1}
          paddingTop={`${radius / 10}px`}
        >
          {data.map((item: PieType) => (
            <Stack
              key={item.id}
              direction={'row'}
              spacing={0.5}
              alignItems={'center'}
            >
              <Box
                width={'8px'}
                height={'8px'}
                bgcolor={item.color}
                borderRadius={'9999px'}
              >

              </Box>

              <Typography
                variant='h6'
                color={'#475467'}
              >
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default PieChartContent