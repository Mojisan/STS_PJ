import { PopupType } from '@/app/overview/enums/popup'
import {
  Stack,
  Typography
} from '@mui/material'
import { BarChart } from '@mui/x-charts'
import Link from 'next/link'
import React from 'react'

interface ChartType {
  id: string
  label: string
  value: number
}

interface IBarChartContent {
  width: number
  height: number
  data: ChartType[]
  label: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setPopup: React.Dispatch<React.SetStateAction<PopupType | undefined>>
  popup: PopupType
  head?: boolean
  rate?: string
}

const BarChartContent: React.FC<IBarChartContent> = ({
  width,
  height,
  data,
  label,
  setOpen,
  setPopup,
  popup,
  head = false,
  rate }) => {
  const uData = data.map((item: ChartType) => item.value);
  const xLabels = data.map((item: ChartType) => item.label);

  const handleOpen = () => {
    setOpen(true)
    setPopup(popup)
  }

  return (
    <Stack
      border={'1px solid #E6EBF4'}
      borderRadius={8}
      padding={"24px"}
      width={width}
      height={height}
      boxSizing={'border-box'}
    >
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

        {head ?
          <Stack
            direction={'row'}
            marginBottom={'24px'}
          >
            <Typography
              variant='h6'
              color={'#616366'}
            >
              รายได้เฉลี่ย
            </Typography>
            <Typography
              variant='h5'
              fontWeight={500}
            >
              {rate}
            </Typography>
          </Stack>
          :
          <></>
        }
      </Stack>

      <BarChart
        width={width}
        height={height}
        colors={['#00338D']}
        layout="vertical"
        grid={{ horizontal: true }}
        series={[
          { data: uData },
        ]}
        xAxis={[{
          data: xLabels,
          scaleType: 'band',
          categoryGapRatio: 0.6,
        }]}
      />
    </Stack>
  )
}

export default BarChartContent