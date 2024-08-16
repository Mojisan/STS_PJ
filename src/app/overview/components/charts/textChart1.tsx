import { PopupType } from '@/enums/popup'
import {
  Box,
  Divider,
  Stack,
  Typography
} from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface ChartType {
  id: string
  label: string
  value: number
}

interface ITextChart1 {
  width: number
  height: number
  label: string
  data: ChartType[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setPopup: React.Dispatch<React.SetStateAction<PopupType | undefined>>
  popup: PopupType
  line?: boolean
}

const TextChart1: React.FC<ITextChart1> = ({ width,
  height,
  label,
  data,
  setOpen,
  setPopup,
  popup,
  line = false }) => {
  const handleOpen = () => {
    setOpen(true)
    setPopup(popup)
  }

  const style = {
    border: '1px solid #E6EBF4',
    borderRadius: 8,
    padding: "24px",
    boxSizing: 'border-box'
  }

  return (
    <Stack
      width={width}
      height={height}
      sx={line ? style : {}}
      overflow={'hidden'}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        marginBottom={"16px"}
        alignItems={'center'}
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

      <Stack direction={'column'}>
        {data.map((item: ChartType) => (
          <Box key={item.id}>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              padding={'12px 0px'}
              boxSizing={'border-box'}
            >
              <Typography
                variant='button'
                fontWeight={400}
              >
                {item.id}. {item.label}
              </Typography>
              <Typography
                variant='button'
                fontWeight={500}
              >
                {item.value} คน
              </Typography>
            </Stack>

            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default TextChart1