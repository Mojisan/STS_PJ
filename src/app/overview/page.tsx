import { Stack } from "@mui/material";


import OverviewUI from "./components/overviewUI";
import Sidebar from "../components/sidebar";

const Overview = () => {
  return (
    <>
      <Sidebar />

      <Stack
        direction={"row"}
        marginLeft={"312px"}
      >
        <OverviewUI />
      </Stack>
    </>
  )
}

export default Overview