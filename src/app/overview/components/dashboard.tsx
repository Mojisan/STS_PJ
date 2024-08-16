import {
  Box,
  Stack,
  Typography
} from '@mui/material'
import React,
{ useState } from 'react'
import Link from 'next/link';

import DialogList from './dialog';
import BarChartContent from './charts/barChartContent';
import PieChartContent from './charts/pieChartContent';
import TextChart1 from './charts/textChart1';
import TextChart2 from './charts/textChart2';
import { PopupType } from '@/app/overview/enums/popup';

const Size = {
  width1: 1160,
  width2: 360,
  width3: 760,
  height1: 296,
  height2: 560,
  radius1: 160,
  radius2: 260,
}

export const Dashboard1 = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType | undefined>();

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
    setPopup(PopupType.HaveCard)
  }

  const handleOpen2 = () => {
    setOpen(true)
    setPopup(PopupType.Rates)
  }

  return (
    <>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Stack
          direction={'row'}
          spacing={5}
        >
          <Box>
            <Link
              href={""}
              style={{ textDecoration: "none" }}
              onClick={handleOpen}
            >
              <Typography
                variant='h6'
              >
                จำนวนผู้มีบัตรพิการ
              </Typography>
              <Typography
                variant='h5'
                marginTop="8px"
              >
                {data.numHaveCard} คน
              </Typography>
            </Link>
          </Box>

          <Box>
            <Link
              href={""}
              style={{ textDecoration: "none" }}
              onClick={handleOpen2}
            >
              <Typography
                variant='h6'
              >
                อายุเฉลี่ยของผู้มีบัตร
              </Typography>
              <Typography
                variant='h5'
                marginTop="8px"
              >
                {data.rateUser} ปี
              </Typography>
            </Link>
          </Box>
        </Stack>

        <Stack
          direction={'row'}
          spacing={2}
        >
          <BarChartContent
            width={Size.width1}
            height={Size.height1}
            data={data.dataChart1}
            label={'สวัสดิการ'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Type}
          />

          <PieChartContent
            radius={Size.radius1}
            width={Size.width2}
            height={Size.height1}
            data={data.dataPie1}
            label={'วุฒิการศึกษา'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Educate}
          />
        </Stack>

        <Stack
          direction={'row'}
          spacing={2}
        >
          <TextChart1
            label={'สวัสดิการ'}
            data={data.dataChart1}
            width={Size.width1}
            height={Size.height1}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Benefit}
          />

          <TextChart2
            label={'การใช้งานแอปพลิเคชัน'}
            data={data.dataUseApp1}
            width={Size.width2}
            height={Size.height1}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.UseApp}
          />
        </Stack>
      </Stack>

      <DialogList
        open={open}
        close={handleClose}
        type={popup}
        info={data}
      />
    </>
  );
}

export const Dashboard2 = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType | undefined>();

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Stack
          direction={'row'}
          spacing={2}
        >
          <PieChartContent
            data={data.dataCareer}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'จำนวนการประกอบอาชีพ'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Career}
            head={true}
          />

          <BarChartContent
            width={Size.width3}
            height={Size.height2}
            data={data.dataIncomeNum.Chart}
            label={'รายได้จากการประกอบอาชีพ'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.IncomeNum}
            rate={data.dataIncomeNum.rate}
          />
        </Stack>

        <Stack
          direction={'row'}
          spacing={2}
        >
          <PieChartContent
            data={data.dataIncome}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'รายได้'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Income}
            head={true}
          />

          <TextChart1
            label={'ข้อมูลการประกอบอาชีพ'}
            data={data.dataSkill3}
            width={Size.width3}
            height={Size.height2}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Career2}
            line={true}
          />
        </Stack>
      </Stack>

      <DialogList
        open={open}
        close={handleClose}
        type={popup}
        info={data}
      />
    </>
  );
}

export const Dashboard3 = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType | undefined>();

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Stack
          direction={'row'}
          spacing={2}
        >
          <PieChartContent
            data={data.dataSkill1}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'ทักษะพื้นฐานในการดำรงชีวิต'}
            setOpen={setOpen}
            setPopup={setPopup}
            head={true}
            popup={PopupType.Skill1}
          />

          <TextChart1
            width={Size.width3}
            height={Size.height2}
            label={'ทักษะเทคโนโลยี'}
            data={data.dataSkill2}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Skill2}
            line={true}
          />
        </Stack>

        <Stack
          direction={'row'}
          spacing={2}
        >
          <BarChartContent
            width={Size.width3}
            height={Size.height2}
            data={data.dataSkill3}
            label={'ทักษะความสามารถพิเศษ'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Skill3}
          />

          <BarChartContent
            width={Size.width3}
            height={Size.height2}
            data={data.dataSkill4}
            label={'ทักษะอาชีพที่ต้องการสนับสนุน'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Skill4}
          />
        </Stack>
      </Stack>

      <DialogList
        open={open}
        close={handleClose}
        type={popup}
        info={data}
      />
    </>
  );
}

export const Dashboard4 = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType | undefined>();

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Stack
          direction={'row'}
          spacing={2}
        >
          <PieChartContent
            data={data.dataHealth1}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'บริการทางการแพทย์และสาธารณสุข'}
            setOpen={setOpen}
            setPopup={setPopup}
            head={true}
            popup={PopupType.Health1}
          />

          <PieChartContent
            data={data.dataHealth5}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'บริการด้านการศึกษา'}
            setOpen={setOpen}
            setPopup={setPopup}
            head={true}
            popup={PopupType.Health5}
          />
        </Stack>

        <Stack
          direction={'row'}
          spacing={2}
        >
          <PieChartContent
            data={data.dataHealth3}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'จำนวนการประกอบอาชีพ'}
            setOpen={setOpen}
            setPopup={setPopup}
            head={true}
            popup={PopupType.Health3}
          />

          <TextChart1
            width={Size.width3}
            height={Size.height2}
            label={'สวัสดิการสังคม'}
            data={data.dataHealth4}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Health4}
            line={true}
          />
        </Stack>

        <Stack
          direction={'row'}
          spacing={2}
        >
          <TextChart1
            width={Size.width3}
            height={Size.height2}
            label={'สวัสดิการสังคม'}
            data={data.dataHealth2}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Health2}
            line={true}
          />
        </Stack>
      </Stack>

      <DialogList
        open={open}
        close={handleClose}
        type={popup}
        info={data}
      />
    </>
  );
}

export const Dashboard5 = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType | undefined>();

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Stack
        direction={'column'}
        spacing={2}
      >
        <Stack
          direction={'row'}
          spacing={2}
        >
          <PieChartContent
            data={data.dataPieEX}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'ปรับปรุงบ้าน'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Home1}
          />

          <PieChartContent
            data={data.dataPieEX}
            radius={Size.radius2}
            width={Size.width3}
            height={Size.height2}
            label={'ถ้าปรับปรุงได้ต้องการปรับปรุงส่วนใด'}
            setOpen={setOpen}
            setPopup={setPopup}
            popup={PopupType.Home2}
          />
        </Stack>
      </Stack>

      <DialogList
        open={open}
        close={handleClose}
        type={popup}
        info={data}
      />
    </>
  );
}