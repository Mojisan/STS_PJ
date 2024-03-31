import { Box, Button, Grid, Stack, ThemeProvider } from "@mui/material";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import Overview_ui from "./components/overview_ui";
import theme from "@/styles/theme";
import LeftLogin from "./components/leftLogin";
import LoginContent from "./components/loginContent";

export default function Home() {
  

  return (
    <>
        <ThemeProvider theme={theme}>
            <Sidebar/>
            <Stack direction={"row"} marginLeft={"312px"}>
                    <Overview_ui/>
            </Stack>
        </ThemeProvider>
    </>
)}
