"use client";
import React, { useEffect } from "react";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReusableFormInput from "@/components/forms/ReusableHookForm";
import { useForm, Controller } from "react-hook-form";
import { postData } from "@/services/apiService";
import { useSnackbar } from "notistack";
import { uniqueId } from "lodash";

// "userId":23,
// "password": "Sa@12345",
// "companyName": "Company1",
// "siteLocation": "site 1",
// "userName": "salem",
// "employeeCode": "1234",
// "departmentId": 122,
// "departmentName": "Dept 1",
// "designationId": 2,
// "designationName": "Designation1",
// "userTypeId": 56,
// "userTypeName": "Usertype 1",
// "dateOfBirth": "20-12-2000",
// "phoneNumber": "8989878789",
// "emailId": "salemwws@gmail.com",
// "aadharId": "765151516171",
// "userPhoto": "photo 1",
// "userSignature": "sign 1"

const UserCreation = ({
  formData,
  setFormData,
  step,
  setStep,
  setPrev,
  control,
  errors = {},
  setError,
}: any) => {
  const { enqueueSnackbar } = useSnackbar();

 

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeFile = (e: any) => {
    const { name, value } = e.target;
    console.log(value, "VALUE");
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"User Name"}</InputLabel>
          <TextField
            name="userName"
            // label="User Name"
            type="string"
            error={errors?.userName}
            placeholder={"User Name"}
            onChange={handleChange}
            value={formData.userName}
            fullWidth
            size="small"
            // error={!!error}
            // helperText={error ? error.message : ""}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Email Id"}</InputLabel>
          <TextField
            name="emailId"
            // label="Email"
            type="email"
            error={errors?.emailId}
            placeholder={"EmailId"}
            onChange={handleChange}
            value={formData.emailId}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Phone Number"}</InputLabel>

          <TextField
            name="phoneNumber"
            // label="Phone Number"
            type="string"
            error={errors?.phoneNumber}
            placeholder={"Phone Number"}
            onChange={handleChange}
            value={formData.phoneNumber}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Date of Birth"}</InputLabel>
          <TextField
            name="dateOfBirth"
            // label="Date of Birth"
            type="date"
            error={errors?.dateOfBirth}
            placeholder={"Date of Birth"}
            onChange={handleChange}
            value={formData.dateOfBirth}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Company Name"}</InputLabel>

          <TextField
            name="companyName"
            // label="Company Name"
            type="string"
            error={errors?.companyName}
            placeholder={"Company Name"}
            onChange={handleChange}
            value={formData.companyName}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Site Location"}</InputLabel>

          <TextField
            name="siteLocation"
            // label="Site Location"
            type="string"
            error={errors?.siteLocation}
            placeholder={"Site Location"}
            onChange={handleChange}
            value={formData.siteLocation}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Email Id"}</InputLabel>

          <TextField
            name="departmentName"
            // label="Department Name"
            type="string"
            error={errors?.departmentName}
            placeholder={"Department Name"}
            onChange={handleChange}
            value={formData.departmentName}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Designation Name"}</InputLabel>

          <TextField
            name="designationName"
            // label="Designation Name"
            type="string"
            error={errors?.designationName}
            placeholder={"Designation Name"}
            onChange={handleChange}
            value={formData.designationName}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Aadhar Number"}</InputLabel>

          <TextField
            name="aadharId"
            // label="Aadhar Number"
            type="number"
            error={errors?.aadharId}
            placeholder={"Aadhar ID"}
            onChange={handleChange}
            value={formData.aadharId}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Photo"}</InputLabel>

          <TextField
            name="userPhoto"
            // label="Photo"
            type="file"
            error={errors?.userPhoto}
            placeholder={"User Photo"}
            onChange={handleChangeFile}
            value={formData.userPhoto}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InputLabel sx={{ color: "#000" }}>{"Signature"}</InputLabel>

          <TextField
            name="userSignature"
            // label="Signature"
            type="file"
            error={errors?.userSignature}
            placeholder={"Department Name"}
            onChange={handleChangeFile}
            value={formData.userSignature}
            fullWidth
            size="small"
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* {step > 0 ? (
            <Button
              name="prev"
              variant="contained"
              onClick={handleStep}
              sx={{ m: 2, backgroundColor: "#022213" }}
            >
              prev
            </Button>
          ) : (
            <Box></Box>
          )}

          {step !== 2 && (
            <Button
              name="next"
              variant="contained"
              onClick={handleSubmit}
              sx={{ m: 2, backgroundColor: "#022213" }}
            >
              {step === 1 ? "Submit" : "Next"}
            </Button>
          )} */}
        {/* <Button
            type="submit"
            variant="contained"
            sx={{ m: 2, backgroundColor: "#022213" }}
          >
            Next
          </Button> */}
      </Box>
      {/* </form> */}
    </Box>
  );
};

export default UserCreation;
