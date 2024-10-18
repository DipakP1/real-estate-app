import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DomainIcon from "@mui/icons-material/Domain";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import RepeatOneOnIcon from "@mui/icons-material/RepeatOneOn";
import { Box, Grid2, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import WebIcon from "@mui/icons-material/Web";
function BasicDetails() {
  const fields = [
    { icon: <EmailIcon />, label: "Email", value: "abc123@gmail.com" },
    {
      icon: <AddIcCallOutlinedIcon />,
      label: "Mobile No.",
      value: "9453924427",
    },
    {
      icon: <CalendarMonthIcon />,
      label: "Date Of Birth",
      value: "12-09-2000",
    },
    {
      icon: <DomainIcon />,
      label: "Department",
      value: "Information Technology",
    },
    {
      icon: <PermContactCalendarIcon />,
      label: "Designation",
      value: "Software Developer",
    },
    { icon: <RepeatOneOnIcon />, label: "Aadhar No.", value: "430016102959" },

    {
      icon: <BusinessIcon />,
      label: "Company Name",
      value: "Innoblooms info services pvt Ltd",
    },
    {
      icon: <WebIcon />,
      label: "Site Location",
      value: "Noida,Delhi,Bangalore",
    },
  ];
  return (
    <div>
      <Grid2
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{ border: "1px solid #ccc", p: 4, borderRadius: 2 }}
      >
        {fields.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {item.icon}
              <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
                {item.label}:
              </Typography>

              <Typography component="span" sx={{ pl: 1 }}>
                {item.value}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default BasicDetails;
