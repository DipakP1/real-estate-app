"use client";
import React from "react";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSnackbar } from "notistack";

const UserCreation = ({ formData, setFormData, errors }: any) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files }: any = e.target;
    const file = files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prev: any) => ({
          ...prev,
          [name]: reader.result, // Store the Base64 string directly in the state
        }));
      };

      reader.readAsDataURL(file); // This will trigger the onloadend event
    }
  };

  console.log(formData);
  return (
    <Box sx={{ p: 2 }}>
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
            error={!!errors?.userName}
            helperText={errors?.userName}
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
            onChange={handleChange}
            value={formData.emailId}
            fullWidth
            size="small"
            error={!!errors?.emailId}
            helperText={errors?.emailId}
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
            onChange={handleChange}
            value={formData.phoneNumber}
            fullWidth
            size="small"
            error={!!errors?.phoneNumber}
            helperText={errors?.phoneNumber}
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
            onChange={handleChange}
            value={formData.dateOfBirth}
            fullWidth
            size="small"
            error={!!errors?.dateOfBirth}
            helperText={errors?.dateOfBirth}
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
            onChange={handleChange}
            value={formData.companyName}
            fullWidth
            size="small"
            error={!!errors?.companyName}
            helperText={errors?.companyName}
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
            onChange={handleChange}
            value={formData.siteLocation}
            fullWidth
            size="small"
            error={!!errors?.siteLocation}
            helperText={errors?.siteLocation}
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
            onChange={handleChange}
            value={formData.departmentName}
            fullWidth
            size="small"
            error={!!errors?.departmentName}
            helperText={errors?.departmentName}
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
            onChange={handleChange}
            value={formData.designationName}
            fullWidth
            size="small"
            error={!!errors?.designationName}
            helperText={errors?.designationName}
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
            onChange={handleChange}
            value={formData.aadharId}
            fullWidth
            size="small"
            error={!!errors?.aadharId}
            helperText={errors?.aadharId}
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
            onChange={handleChangeFile}
            fullWidth
            size="small"
            error={!!errors?.userPhoto}
            helperText={errors?.userPhoto}
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
            onChange={handleChangeFile}
            fullWidth
            size="small"
            error={!!errors?.userSignature}
            helperText={errors?.userSignature}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        {/* Add buttons for navigation or submission here */}
      </Box>
    </Box>
  );
};

export default UserCreation;
