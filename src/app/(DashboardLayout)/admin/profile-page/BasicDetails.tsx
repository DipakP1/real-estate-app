/* import React, { useEffect, useState } from "react";
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
  let data: any;
  let parseData: any;
  if (typeof window !== "undefined") {
    data = localStorage.getItem("user") || {};
    parseData = JSON.parse(data);
  }
  //const [userData, setUserData] = useState<any>(parseData);
  console.log("---->", parseData, "----id");
  const fields = [
    { icon: <EmailIcon />, label: "Email", value: "abc123@gmail.com" },
    {
      icon: <AddIcCallOutlinedIcon />,
      label: "Mobile No.",
      value: {parseData.phoneNumber},
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
        {fields.map((ele: any, index: any) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box sx={{ display: "flex", aligneles: "center" }}>
              {ele.icon}
              <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
                {ele.label}:
              </Typography>
              <Typography component="span" sx={{ pl: 1 }}>
                {ele.value}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default BasicDetails;
 */
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
