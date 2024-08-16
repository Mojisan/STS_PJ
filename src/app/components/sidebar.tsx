import {
  AppBar,
  Box,
  Button,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PATH } from "../path";

interface Page {
  icon: string
  name: string
  href: string
}

function getIconByName(name: string) {
  return `/images/icons/${name}.png`
}

const Sidebar = () => {
  const pageList: Page[] = [
    { icon: getIconByName("bar-chart"), name: "ภาพรวมระบบ", href: PATH.OVERVIEW },
    { icon: getIconByName("name-tag"), name: "เจ้าหน้าที่", href: PATH.PRACTICE },
    { icon: getIconByName("users-01"), name: "สมาชิก", href: "/" },
    { icon: getIconByName("user-01"), name: "ข้อมูลส่วนตัว", href: "/" },
    { icon: getIconByName("map"), name: "แผนที่", href: "/" },
  ]

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        bottom: 0,
        left: 0,
        width: "312px",
        bgcolor: "#fff",
        zIndex: 1000
      }}
    >
      <Box
        width={312}
        padding="32px 16px"
        boxSizing={"border-box"}
        height="100%"
      >
        <Box
          display="flex"
          boxSizing="border-box"
          flexDirection="column"
          justifyContent={"space-between"}
          height="100%"
        >
          <Box>
            <Stack
              direction={"row"}
              marginLeft="8px"
              spacing={1}
            >
              <Image
                src={"/images/logo/logo1.png"}
                alt="logo"
                width={53}
                height={38.12}
              />

              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  lineHeight="12px"
                >
                  ระบบสำรวจ <br /> และการคัดกรองเบื้องต้น
                </Typography>
                <Typography
                  variant="caption"
                  color={"#616366"}
                >
                  มูลนิธิออทิสติกไทย
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction={"column"}
              marginTop="24px"
            >
              {pageList.map((page) => (
                <Button
                  href={page.href}
                  key={page.name}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}>
                  <Stack
                    direction={"row"}
                    alignItems="center"
                  >
                    <Box padding="8px 12px">
                      <Image
                        src={page.icon}
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    </Box>

                    <Typography variant="button">
                      {page.name}
                    </Typography>
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Box>

          <Link
            href={"/"}
            style={{ textDecoration: "none" }}
          >
            <Stack
              direction={"row"}
              alignItems="center"
            >
              <Box padding="8px 12px">
                <Image
                  src={"/images/icons/log-out.png"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </Box>

              <Typography variant="button">
                ออกจากระบบ
              </Typography>
            </Stack>
          </Link>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Sidebar
