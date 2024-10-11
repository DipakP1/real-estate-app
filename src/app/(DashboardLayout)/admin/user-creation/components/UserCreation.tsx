"use client";
import React from "react";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReusableFormInput from "@/components/forms/ReusableHookForm";
import { useForm, Controller } from "react-hook-form";
import { postData } from "@/services/apiService";
import { useSnackbar } from "notistack";
import { uniqueId } from "lodash";

// Validation schema
const validationSchema: any = yup.object().shape({
  userName: yup.string().required("User Name is required"),
  companyName: yup.string().required("Company Name is required"),
  emailId: yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: yup.string().required("Date of Birth is required"),
  siteLocation: yup.string().required("Site Location is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  departmentName: yup.string().required("Department Name is required"),
  designationName: yup.string().required("Designation is required"),
  aadharId: yup.string().required("Aadhar Number is required"),
  userPhoto: yup.mixed().required("Photo is required"),
  userSignature: yup.mixed().required("Signature is required"),
});

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

const UserCreation = ({ step, setStep, setPrev }: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: any) => {
    try {
      const res = await postData("/v1/user/register", {
        userId: uniqueId(),
        employeeCode: "1234",
        departmentId: 122,
        designationId: 2,
        userTypeId: 56,
        userTypeName: "User",
        password: "pass@123",
        ...data,
      });
      enqueueSnackbar(res.message, { variant: "success" });
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleStep = (event: any) => {
    const name: any = event.target.name;

    if (step === 2 && name == "next") {
      setPrev(true);
    }
    setStep((prev: any) => {
      if (name == "prev" && prev > 0) {
        return prev - 1;
      }
      if (name == "next" && prev < 1) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  return (
    <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="userName"
              label="User Name"
              control={control}
              error={errors.userName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="emailId"
              label="Email"
              control={control}
              error={errors.emailId}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="phoneNumber"
              label="Phone Number"
              type="string"
              control={control}
              error={errors.phoneNumber}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="dateOfBirth"
              label="Date of Birth"
              type="date"
              control={control}
              error={errors.dateOfBirth}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="companyName"
              label="Company Name"
              type="string"
              control={control}
              error={errors.companyName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="siteLocation"
              label="Site Location"
              type="string"
              control={control}
              error={errors.siteLocation}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="departmentName"
              label="Department Name"
              type="string"
              control={control}
              error={errors.departmentName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="designationName"
              label="Designation Name"
              type="string"
              control={control}
              error={errors.designationName}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="aadharId"
              label="Aadhar Number"
              type="string"
              control={control}
              error={errors.aadharId}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="userPhoto"
              label="Photo"
              type="file"
              control={control}
              error={errors.userPhoto}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReusableFormInput
              name="userSignature"
              label="Signature"
              type="file"
              control={control}
              error={errors.userSignature}
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
          <Button
            type="submit"
            variant="contained"
            sx={{ m: 2, backgroundColor: "#022213" }}
          >
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserCreation;
