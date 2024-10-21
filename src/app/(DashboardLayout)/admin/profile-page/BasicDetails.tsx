
import React, { useEffect, useState } from "react";
import { Box, Grid2, Typography } from "@mui/material";
//import Grid2 from "@mui/material/Unstable_Grid2";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DomainIcon from "@mui/icons-material/Domain";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import RepeatOneOnIcon from "@mui/icons-material/RepeatOneOn";
import BusinessIcon from "@mui/icons-material/Business";
import WebIcon from "@mui/icons-material/Web";

function BasicDetails({ userData }: any) {
  //console.log('user data',userData)
  return (
    <div>
      <Grid2
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{ border: "1px solid #ccc", p: 4, borderRadius: 2 }}
      >
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Email:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.emailId}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AddIcCallOutlinedIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Phone No.:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.phoneNumber}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CalendarMonthIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Date Of Birth:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.dateOfBirth}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DomainIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Department:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.departmentName}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <RepeatOneOnIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Aadhar No.:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.aadharId}
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PermContactCalendarIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Designation:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.designationName}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BusinessIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Company Name:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.companyName}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <WebIcon />
            <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
              Site Location:
            </Typography>
            <Typography component="span" sx={{ pl: 1 }}>
              {userData?.sub?.siteLocation}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default BasicDetails;
