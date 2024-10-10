import { Box, TextField, Select, MenuItem, InputLabel } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const UserCreation = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"user-id"}>
            User ID
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="User ID"
            id="user-id"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"company-name"}>
            Company Name
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Company Name"
            type="date"
            // InpuplaceholderProps={{ shrink: true }}
            id="company-name"
          />

          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"user-name"}>
            User Name
          </InputLabel>
          <TextField
            size="small"
            select
            fullWidth
            placeholder="User Name"
            id="user-name"
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </TextField>

          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"department-name"}>
            Department Name
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Department Id"
            id="department-id"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"designation-id"}>
            Designation ID
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Designation Id"
            id="designation-id"
          />

          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"user-type-id"}>
            User Type ID
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="User Type ID"
            id="user-type-id"
          />

          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"dob"}>
            Date of Birth
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Date of Birth"
            type="date"
            // InputProps={{ shrink: true }}
            id="dob"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"email-id"}>
            Email ID
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Email Id"
            id="email-id"
          />
        </Grid>

        {/* Second Column */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"password"}>
            Password
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Password"
            type="password"
            id="password"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"site-location"}>
            Site Location
          </InputLabel>
          <TextField
            size="small"
            select
            fullWidth
            placeholder="Site Location"
            id="site-location"
          >
            <MenuItem selected disabled>
              Site Location
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </TextField>
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"employee-code"}>
            Employee Code
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Employee Code"
            id="employee-code"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"dep-name"}>
            Department Name
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Department Name"
            id="department-name"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"designation-name"}>
            Designation name
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Designation Name"
            id="designation-name"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"user-type-name"}>
            User Type Name
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="User Type Name"
            id="user-type-name"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"phone-number"}>
            Phone Number
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Phone Number"
            id="phone-number"
          />
          <InputLabel sx={{ color: "#000", mt:1 }} htmlFor={"aadhar-id"}>
            Aadhar ID
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Aadhar Id"
            id="aadhar-id"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserCreation;
