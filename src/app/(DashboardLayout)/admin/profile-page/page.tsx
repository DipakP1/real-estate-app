"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./profile.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Editform from "./Editform";
import ResetPassword from "./ResetPassword";
import BasicDetails from "./BasicDetails";
import UserProfile from "./UserProfile";
import { Tab, Tabs } from "@mui/material";
import DashboardCard from "@/components/shared/DashboardCard";
function page() {
  const [open, setOpen] = React.useState<any>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //tab
  const [value, setValue] = React.useState<any>("1");
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <DashboardCard>
      <Box sx={{ ml: 1 }}>
        <Box>
          <UserProfile />
        </Box>

        <Box sx={{ mt: 7, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Sushama Yadav</Typography>
          <IconButton onClick={handleClickOpen}>
            <ModeEditOutlinedIcon />
          </IconButton>
        </Box>

        <Editform open={open} handleClose={handleClose} />
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              sx={{ color: "black !important" }}
              label="Basic Details"
              value="1"
            />
            <Tab
              sx={{ color: "black !important" }}
              label="Change Password"
              value="2"
            />
          </Tabs>
          {value === "1" && (
            <Box sx={{ mt: 2 }}>
              <BasicDetails />
            </Box>
          )}
          {value === "2" && (
            <Box>
              <ResetPassword />
            </Box>
          )}
        </Box>
      </Box>
    </DashboardCard>
  );
}

export default page;
