import {
  Autocomplete,
  Dialog,
  Divider,
  Pagination,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React,
{
  useEffect,
  useState
} from 'react'

import Popup, { IDialog } from './popup';
import { PopupType } from '@/app/overview/enums/popup';

interface IDialogList {
  info: any
  open: any
  close: any
  type: PopupType | undefined
}

export const HaveCard: React.FC<IDialog> = ({
  info,
  close,
  num
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      label={'ผู้มีบัตรพิการ'} />
  );
}

export const RateAges: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.rateAge}
      auto={true}
      label={'อายุเฉลี่ยผู้มีบัตร'}
      label2={'เลือกช่วงอายุ'}
      label3={PopupType.Rates}
    />
  )
}

export const Educate: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.educate}
      auto={true}
      label={'วุฒิการศึกษา'}
      label2={'เลือกวุฒิการศึกษา'}
      label3={PopupType.Educate}
    />
  )
}
export const Types: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ประเภทความพิการ'}
      label2={'เลือกประเภทความพิการ'}
      label3={PopupType.Type}
    />
  )
}
export const UseApp: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'การใช้แอปพลิเคชัน'}
      label2={'เลือกแอปพลิเคชัน'}
      label3={PopupType.UseApp}
    />
  )
}
export const Benefit: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'สวัสดิการที่ได้รับ'}
      label2={'เลือกสวัสดิการที่ได้รับ'}
      label3={PopupType.Benefit}
    />
  )
}
export const Career: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'การประกอบอาชีพ'}
      label2={'เลือกประเภทอาชีพ'}
      label3={PopupType.Career}
    />
  )
}
export const InComeNum: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'จำนวนรายได้ผู้พิการ'}
      label2={'เลือกจำนวนรายได้'}
      label3={PopupType.IncomeNum}
    />
  )
}
export const InCome: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'รายได้ผู้พิการ'}
      label2={'เลือกรายได้'}
      label3={PopupType.Income}
    />
  )
}
export const Career2: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ข้อมูลอาชีพ'}
      label2={'เลือกอาชีพ'}
      label3={PopupType.Career2}
    />
  )
}
export const Skill1: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ทักษะพื้นฐานการดำรงชีวิต'}
      label2={'เลือกทักษะพื้นฐานการดำรงชีวิต'}
      label3={PopupType.Skill1}
    />
  )
}
export const Skill2: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ทักษะเทคโนโลยี'}
      label2={'เลือกทักษะเทคโนโลยี'}
      label3={PopupType.Skill2}
    />
  )
}
export const Skill3: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ทักษะความสามารถพิเศษ'}
      label2={'เลือกทักษะความสามารถพิเศษ'}
      label3={PopupType.Skill3}
    />
  )
}
export const Skill4: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ทักษะที่ต้องการการสนับสนุน'}
      label2={'เลือกทักษะที่ต้องการการสนับสนุน'}
      label3={PopupType.Skill4}
    />
  )
}
export const Health1: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'สาธารณสุข'}
      label2={'เลือกสาธารณสุข'}
      label3={PopupType.Health1}
    />
  )
}
export const Health2: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'สภาพความเดือดร้อน'}
      label2={'เลือกสภาพความเดือดร้อน'}
      label3={PopupType.Health2}
    />
  )
}
export const Health4: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'สวัสดิการสังคม'}
      label2={'เลือกสวัสดิการสังคม'}
      label3={PopupType.Health4}
    />
  )
}
export const Home1: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ปรับปรุงบ้าน'}
      label2={'เลือกปรับปรุงบ้าน'}
      label3={PopupType.Home1}
    />
  )
}
export const Home2: React.FC<IDialog> = ({
  info,
  close,
  num,
  option
}) => {
  return (
    <Popup
      info={info}
      close={close}
      num={num}
      option={option.typeS}
      auto={true}
      label={'ส่วนที่ปรับปรุงบ้าน'}
      label2={'เลือกส่วนที่ปรับปรุงบ้าน'}
      label3={PopupType.Home2}
    />
  )
}

const DialogList: React.FC<IDialogList> = ({
  open,
  close,
  type,
  info
}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = (value: any) => {
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
    <Dialog
      open={open}
      onClose={close}
      maxWidth="md"
      PaperProps={{
        style: {
          width: '640px',
          height: '720px',
          borderRadius: '12px',
          padding: '16px 24px 24px 24px'
        }
      }}
    >
      {(() => {
        switch (type) {
          case PopupType.HaveCard: {
            return <HaveCard
              close={close}
              info={paginatedData}
              num={info.num}
            />;
          }
          case PopupType.Rates: {
            return <RateAges
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />;
          }
          case PopupType.Educate: {
            return <Educate
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />;
          }
          case PopupType.Type: {
            return <Types
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />;
          }
          case PopupType.UseApp: {
            return <UseApp
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />;
          }
          case PopupType.Benefit: {
            return <Benefit
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />;
          }
          case PopupType.Career: {
            return <Career
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />;
          }
          case PopupType.IncomeNum: {
            return <InComeNum
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Income: {
            return <InCome
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Career2: {
            return <Career2
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Skill1: {
            return <Skill1
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Skill2: {
            return <Skill2
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Skill3: {
            return <Skill3
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Skill4: {
            return <Skill4
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Health1: {
            return <Health1
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Health2: {
            return <Health2
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Health3: {
            return <Career
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Health4: {
            return <Health4
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Health5: {
            return <Educate
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Home1: {
            return <Home1
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          case PopupType.Home2: {
            return <Home2
              close={close}
              info={paginatedData}
              num={info.num}
              option={info}
            />
          }
          default: {
            return <></>
          }
        }
      })()}

      <Stack
        spacing={2}
        width={'100%'}
        height={'100%'}
        display={'flex'}
        alignItems={'center'}
        marginTop={'10px'}
        justifyContent={'end'}>

        <Divider sx={{ width: '107%' }} />

        <Stack
          width={'100%'}
          justifyContent={'space-between'}
          direction={'row'}
          alignItems={'center'}>
          <Stack>
            <Autocomplete
              options={pageOptions}
              value={selectedPage}
              onChange={(newValue) => handleChange(newValue)}
              size='small'
              sx={{ width: '88px' }}
              renderInput={(params) => <TextField {...params} sx={{ fontSize: "20px" }} />}
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
          <Stack
            direction={'row'}
            spacing={2}
            alignItems={'center'}
          >
            <Typography
              variant='body2'
            >
              ไปยังหน้า
            </Typography>
            <TextField
              variant='outlined'
              style={{ borderRadius: '16px' }}
              sx={{ width: '64px' }}
              size='small' value={page}
              onChange={(e) => setPage(e.target.value !== '' ? parseInt(e.target.value) : 0)}
            />
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default DialogList