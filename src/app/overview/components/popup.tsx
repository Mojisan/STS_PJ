import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from './searchBar';
import Dropdown from './dropdown';
import Image from 'next/image';
import { PopupType } from '@/app/overview/enums/popup';

type data = {
  id: string,
  name: string,
  img: string,
  file: string,
  age: number,
  educate: string,
  type: string[],
  app: string,
  benefit: string[],
  incomeNum: string,
  income: string,
  career: string,
  careerType: string,
  skill1: string,
  skill2: string,
  skill3: string[],
  skill4: string[],
  health1: string,
  health2: string,
  benefit2: string,
  home1: string,
  home2: string
}

export interface IDialog {
  info: any
  close: any
  num: number
  option?: any
  auto?: boolean
  label?: string
  label2?: any
  label3?: PopupType
}

const ArrayData = ({ data }: any) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      spacing={2}
    >
      {data.map((item: any) => (
        <Typography
          variant='button'
          fontWeight={500}
          key={item}
        >
          {item}
        </Typography>
      ))}
    </Stack>
  );
}

const Popup: React.FC<IDialog> = ({
  info,
  close,
  num,
  option,
  auto = false,
  label,
  label2,
  label3
}) => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Stack
          justifyContent={'space-between'}
          direction={'row'}
          alignContent={'flex-start'}
        >
          <Stack spacing={1}>
            <Typography
              variant='h5'
              fontWeight={500}
            >
              {label}
            </Typography>

            <Typography
              variant='button'
              color={'#616366'}
              fontWeight={400}
            >
              จำนวนทั้งหมด {num} คน
            </Typography>
          </Stack>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack
          direction={'row'}
          width={'100%'}
          spacing={2}
          justifyContent={'center'}
        >
          <SearchBar />
          {auto ?
            <Dropdown
              options={option}
              label={label2}
            />
            : <></>
          }
        </Stack>
      </Stack>

      <Stack>
        <Stack
          direction={'row'}
          padding={'8px 0px'}
        >
          <Typography
            variant='body2'
            color={'#616366'}
            width={'440px'}
          >
            ชื่อ-นามสกุล
          </Typography>
          {auto ?
            <Typography
              variant='body2'
              color={'#616366'}
            >
              {label3}
            </Typography>
            : <></>
          }
        </Stack>

        <Stack
          marginBottom={'10px'}
          height={'442px'}
        >
          {info.map((item: data) => (
            <Box key={item.id}>
              <Stack
                justifyContent={'space-between'}
                direction={'row'}
                alignItems={'center'}
                padding={'12px 0px'}
              >
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                >
                  <Stack
                    direction={'row'}
                    width={'440px'}
                    alignItems={'center'}
                    spacing={2}
                  >
                    <Image
                      src={item.img}
                      alt='profile'
                      width={48}
                      height={48}
                    />

                    <Typography
                      variant='button'
                      fontWeight={500}
                    >
                      {item.name}
                    </Typography>
                  </Stack>

                  {(() => {
                    switch (label3) {
                      case PopupType.Rates: {
                        return <Typography variant='button' fontWeight={500}>{item.age}</Typography>
                      }
                      case PopupType.Educate: {
                        return <Typography variant='button' fontWeight={500}>{item.educate}</Typography>
                      }
                      case PopupType.Type: {
                        return <ArrayData data={item.type} />
                      }

                      case PopupType.UseApp: {
                        return <Typography variant='button' fontWeight={500}>{item.app}</Typography>
                      }
                      case PopupType.Benefit: {
                        return <ArrayData data={item.benefit} />
                      }
                      case PopupType.Career: {
                        return <Typography variant='button' fontWeight={500}>{item.careerType}</Typography>
                      }
                      case PopupType.IncomeNum: {
                        return <Typography variant='button' fontWeight={500}>{item.incomeNum}</Typography>
                      }
                      case PopupType.Income: {
                        return <Typography variant='button' fontWeight={500}>{item.income}</Typography>
                      }
                      case PopupType.Career2: {
                        return <Typography variant='button' fontWeight={500}>{item.career}</Typography>
                      }
                      case PopupType.Skill1: {
                        return <Typography variant='button' fontWeight={500}>{item.skill1}</Typography>
                      }
                      case PopupType.Skill2: {
                        return <Typography variant='button' fontWeight={500}>{item.skill2}</Typography>
                      }
                      case PopupType.Skill3: {
                        return <ArrayData data={item.skill3} />
                      }
                      case PopupType.Skill4: {
                        return <ArrayData data={item.skill4} />
                      }
                      case PopupType.Health1: {
                        return <Typography variant='button' fontWeight={500}>{item.health1}</Typography>
                      }
                      case PopupType.Health2: {
                        return <Typography variant='button' fontWeight={500}>{item.health2}</Typography>
                      }
                      case PopupType.Health4: {
                        return <Typography variant='button' fontWeight={500}>{item.benefit2}</Typography>
                      }
                      case PopupType.Home1: {
                        return <Typography variant='button' fontWeight={500}>{item.home1}</Typography>
                      }
                      case PopupType.Home2: {
                        return <Typography variant='button' fontWeight={500}>{item.home2}</Typography>
                      }
                      default: {
                        return <></>
                      }
                    }
                  })()}
                </Stack>

                <IconButton>
                  <Image
                    src={'/images/icons/download.png'}
                    alt='icon'
                    width={20}
                    height={20}
                  />
                </IconButton>
              </Stack>

              <Divider />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Popup