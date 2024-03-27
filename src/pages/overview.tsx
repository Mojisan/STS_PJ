import { Box, Button, Grid, Stack } from "@mui/material";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import Overview_ui from "./components/overview_ui";

export default function Overview() {
  

  return (
    <>
        <Sidebar/>
        <Stack direction={"row"} width="100%" height={"100%"}>
            <Box width="312px">Hello</Box>
            <Overview_ui/>
        </Stack>
    </>
)}