import { PopupType } from '@/enums/popup'
import {
  Box,
  Divider,
  Stack,
  Typography
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/* const columns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'ชื่อ-นามสกุล',
    sortable: false,
    filterable: false,
    hideable: false,
    flex: 1,
    renderCell: ({ value, row }) => {
      return (
        <Grid
          container
          alignItems="center"
          justifyContent="start"
          sx={{
            height: '100%',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <Box
              width={30}
              height={30}
              borderRadius={8}
              overflow="hidden"
              position="relative"
            >
              <Image
                src={row.profileImage ?? '/images/logos/Avatar.png'}
                alt={value}
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Typography>{value}</Typography>
          </Box>
        </Grid>
      )
    },
  },
  {
    field: 'phoneNumber',
    headerName: 'เบอร์โทร',
    sortable: false,
    filterable: false,
    hideable: false,
    flex: 1,
    renderCell: ({ value }) => value ?? '-',
  },
  {
    field: 'isAcceptedTerms',
    headerName: 'สถานะ',
    sortable: false,
    filterable: false,
    hideable: false,
    flex: 1,
    renderCell: ({ value }) => {
      return (
        <Grid
          container
          alignItems="center"
          justifyContent="start"
          sx={{
            height: '100%',
          }}
        >
          <Box
            bgcolor={value ? '#EAF2EB' : '#FDEAEB'}
            color={value ? '#2E7D32' : '#EA2839'}
            borderRadius={8}
            paddingX={1.5}
          >
            <Typography fontSize={14}>
              {value ? 'ยอมรับเงื่อนไข' : 'ไม่ยอมรับเงื่อนไข'}
            </Typography>
          </Box>
        </Grid>
      )
    },
  },
  {
    field: 'updatedBy',
    headerName: 'แก้ไขโดย',
    width: 300,
    sortable: false,
    filterable: false,
    hideable: false,
    flex: 1,
  },
  {
    field: 'lastUpdate',
    headerName: 'วันที่แก้ไข',
    sortable: false,
    filterable: false,
    hideable: false,
    flex: 1,
    renderCell: ({ value }) => {
      return value ? dayjs(value).format('DD/MM/YYYY HH:mm') : '-'
    },
  },
  {
    field: 'Actions',
    headerName: '',
    sortable: false,
    filterable: false,
    hideable: false,
    width: 100,
    align: 'right',
    renderCell: (params) => (
      <IconButton size="small" disabled>
        <Edit />
      </IconButton>
    ),
  },
] */

interface UseAppType {
  id: string
  label: string
  value: number
  logo: string
  per: number
}

interface ITextChart2 {
  width: number
  height: number
  label: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setPopup: React.Dispatch<React.SetStateAction<PopupType | undefined>>
  data: UseAppType[]
  popup: PopupType
}

const TextChart2: React.FC<ITextChart2> = ({
  width,
  height,
  label,
  setOpen,
  setPopup,
  data,
  popup }) => {
  const handleOpen = () => {
    setOpen(true)
    setPopup(popup)
  }

  return (
    <Stack
      height={height}
      width={width}
    >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        marginBottom={"16px"}
        alignItems={'center'}
      >
        <Typography
          variant='h5'
        >
          การใช้งานแอปพลิเคชัน
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
        {data.map((item: UseAppType) => (
          <Box key={item.id}>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={1}
                padding={'12px 0px'}
              >
                <Box padding={'2px 0px'}>
                  <Image
                    src={item.logo}
                    alt={'logo'}
                    width={40}
                    height={40}
                  />
                </Box>

                <Box>
                  <Typography
                    variant='h6'
                    color={'#616366'}
                    marginBottom={'4px'}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant='button'>
                    {item.value} คน
                  </Typography>
                </Box>
              </Stack>

              <Stack>
                <Typography
                  variant='button'
                  color={'#A3A7AD'}
                  fontWeight={400}
                >
                  {item.per}%
                </Typography>
              </Stack>
            </Stack>

            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default TextChart2