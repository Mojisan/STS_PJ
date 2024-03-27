import theme from "@/styles/theme";
import { AppBar, Box, Button, Drawer, Stack, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type page = {
    logo: string
    name: string,
    href: string
}

const Sidebar = () => {

    const drawnerList:page[] = [
        {logo: "/images/icons/bar-chart.png", name: "ภาพรวมระบบ", href: "/"},
        {logo: "/images/icons/name-tag.png", name: "เจ้าหน้าที่", href: "/"},
        {logo: "/images/icons/users-01.png", name: "สมาชิก", href: "/"},
        {logo: "/images/icons/user-01.png", name: "ข้อมูลส่วนตัว", href: "/"},
        {logo: "/images/icons/map.png", name: "แผนที่", href: "/"},
    ]

    const drawer = (
    <Box width={312} padding="32px 16px" boxSizing={"border-box"} height="100%">
        <Box display="flex" boxSizing="border-box" flexDirection="column" justifyContent={"space-between"} height="100%">
            <Box>
                <Stack direction={"row"} marginLeft="8px" spacing={1}>
                    <Image src={"/images/logo/logo1.png"} alt="logo" width={53} height={38.12}/>
                    <Box>
                        <Typography variant="h6" fontWeight={700} lineHeight="12px">ระบบสำรวจ <br/> และการคัดกรองเบื้องต้น</Typography>
                        <Typography variant="caption" color={"#616366"}>มูลนิธิออทิสติกไทย</Typography>
                    </Box>
                </Stack>
                <Stack direction={"column"} marginTop="24px">
                    {drawnerList.map((item) => (
                        <Link href={item.href} key={item.name} style={{textDecoration: "none"}}>
                            <Stack direction={"row"} alignItems="center">
                                <Box padding="8px 12px">
                                    <Image src={item.logo} alt="icon" width={24} height={24}/>
                                </Box>
                                <Typography variant="button">{item.name}</Typography>
                            </Stack>
                        </Link>
                    ))}
                </Stack>
            </Box>
            <Link href={"/"} style={{textDecoration: "none"}}>
            <Stack direction={"row"} alignItems="center">
                <Box padding="8px 12px">
                    <Image src={"/images/icons/log-out.png"} alt="icon" width={24} height={24}/>
                </Box>
                <Typography variant="button">ออกจากระบบ</Typography>
            </Stack>
            </Link>
        </Box>
    </Box>
    );

    return (
    <ThemeProvider theme={theme}>
        <AppBar position="fixed" sx={{ top: 0, bottom: 0, left: 0, width: "312px", bgcolor: "#fff", zIndex: 1000 }}>
            {drawer}
        </AppBar>
    </ThemeProvider>
    );
};

export default Sidebar;
