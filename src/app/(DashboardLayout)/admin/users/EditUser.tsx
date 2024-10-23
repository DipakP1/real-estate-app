import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import UserCreation from "../user-creation/components/UserCreation";
import { useSnackbar } from "notistack";
import { pathData } from "../../../../services/apiService";

const EditUser = ({ editUser, setOpenEditdialog }: any) => {
  const [formData, setFormData] = useState({ ...editUser[0] });

  const { enqueueSnackbar } = useSnackbar();

  const handleEditUser = async (e: any) => {
    e.preventDefault();

    try {
      const res = await pathData(
        `/v1/user/update/${editUser[0]?.userId}`,
        formData
      );

      if (!res.error) {
        enqueueSnackbar(res.message, { variant: "success" });
        setOpenEditdialog(false);
      } else {
        enqueueSnackbar(res.message, { variant: "error" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box component={"form"} onSubmit={handleEditUser}>
      <Grid container spacing={2}>
        {/* User Name */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            User Name{" "}
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="userName"
            placeholder="User Name"
            onChange={handleChange}
            value={formData.userName}
            fullWidth
            size="small"
            //   error={!!errors?.userName}
            //   helperText={errors?.userName}
          />
        </Grid>

        {/* Email ID */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Email Id
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="emailId"
            type="email"
            placeholder="Email Id"
            //   onChange={handleChange}
            value={formData.emailId}
            fullWidth
            size="small"
            //   error={!!errors?.emailId}
            //   helperText={errors?.emailId}
          />
        </Grid>

        {/* Phone Number */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Phone Number
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="phoneNumber"
            placeholder="Phone Number"
            //   onChange={handleChange}
            value={formData.phoneNumber}
            fullWidth
            size="small"
            //   error={!!errors?.phoneNumber}
            //   helperText={errors?.phoneNumber}
          />
        </Grid>

        {/* Employee Code */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Employee Code
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="employeeCode"
            placeholder="Employee Code"
            //   onChange={handleChange}
            value={formData.employeeCode}
            fullWidth
            size="small"
            //   error={!!errors?.employeeCode}
            //   helperText={errors?.employeeCode}
          />
        </Grid>

        {/* Date of Birth */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Date of Birth
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            //   onChange={handleChange}
            value={formData.dateOfBirth}
            fullWidth
            size="small"
            //   error={!!errors?.dateOfBirth}
            //   helperText={errors?.dateOfBirth}
          />
        </Grid>

        {/* Company Name */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Company Name
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="companyName"
            placeholder="Company Name"
            //   onChange={handleChange}
            value={formData.companyName}
            fullWidth
            size="small"
            //   error={!!errors?.companyName}
            //   helperText={errors?.companyName}
          />
        </Grid>

        {/* Site Location */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Site Location
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="siteLocation"
            placeholder="Site Location"
            //   onChange={handleChange}
            value={formData.siteLocation}
            fullWidth
            size="small"
            //   error={!!errors?.siteLocation}
            //   helperText={errors?.siteLocation}
          />
        </Grid>

        {/* Department Name */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Department Name
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="departmentName"
            placeholder="Department Name"
            //   onChange={handleChange}
            value={formData.departmentName}
            fullWidth
            size="small"
            //   error={!!errors?.departmentName}
            //   helperText={errors?.departmentName}
          />
        </Grid>

        {/* Designation Name */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Designation Name
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="designationName"
            placeholder="Designation Name"
            //   onChange={handleChange}
            value={formData.designationName}
            fullWidth
            size="small"
            //   error={!!errors?.designationName}
            //   helperText={errors?.designationName}
          />
        </Grid>

        {/* Aadhar Number */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Aadhar Number
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="aadharId"
            type="number"
            placeholder="Aadhar Number"
            //   onChange={handleChange}
            value={formData.aadharId}
            fullWidth
            size="small"
            //   error={!!errors?.aadharId}
            //   helperText={errors?.aadharId}
          />
        </Grid>

        {/* User Photo */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            User Photo
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="userPhoto"
            type="file"
            placeholder="User Photo"
            //   onChange={handleChangeFile}
            fullWidth
            size="small"
            //   error={!!errors?.userPhoto}
            //   helperText={errors?.userPhoto}
          />
        </Grid>

        {/* User Signature */}
        <Grid size={{ xs: 12, md: 6 }}>
          <InputLabel sx={{ color: "#000" }}>
            Signature
            <Typography component={"span"} style={{ color: "red" }}>
              *
            </Typography>
          </InputLabel>
          <TextField
            name="userSignature"
            type="file"
            placeholder="Signature"
            //   onChange={handleChangeFile}
            fullWidth
            size="small"
            //   error={!!errors?.userSignature}
            //   helperText={errors?.userSignature}
          />
        </Grid>

        <Box mt={2}>
          <Button
            variant="outlined"
            sx={{ border: "1px solid black", color: "black", mr: 2 }}
            onClick={() => setOpenEditdialog(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            Edit User
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default EditUser;
