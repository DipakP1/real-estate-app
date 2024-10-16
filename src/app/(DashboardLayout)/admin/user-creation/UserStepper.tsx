"use client";
import HorizontalLinearAlternativeLabelStepper from "@/components/Mui-Stepper";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCreation from "./components/UserCreation";
import UserPermission from "./components/Permission";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { postData } from "@/services/apiService";
import { uniqueId } from "lodash";
import { enqueueSnackbar } from "notistack";

// Validation schema
// const validationSchema: any = yup.object().shape({
//   userName: yup.string().required("User Name is required"),
//   companyName: yup.string().required("Company Name is required"),
//   emailId: yup.string().email("Invalid email").required("Email is required"),
//   dateOfBirth: yup.string().required("Date of Birth is required"),
//   siteLocation: yup.string().required("Site Location is required"),
//   phoneNumber: yup.string().required("Phone Number is required"),
//   departmentName: yup.string().required("Department Name is required"),
//   designationName: yup.string().required("Designation is required"),
//   aadharId: yup.string().required("Aadhar Number is required"),
//   userPhoto: yup.mixed().required("Photo is required"),
//   userSignature: yup.mixed().required("Signature is required"),
// });

const UserManagment = () => {
  const [step, setStep] = useState<any>(1);
  const [prev, setPrev] = useState<any>(false);
  const [formData, setFormData] = useState<any>({
    userId: 23,
    password: "",
    companyName: "",
    siteLocation: "",
    userName: "",
    employeeCode: "",
    departmentId: "",
    departmentName: "",
    designationId: "",
    designationName: "",
    userTypeId: "",
    userTypeName: "",
    dateOfBirth: "",
    phoneNumber: "",
    emailId: "",
    aadharId: "",
    userPhoto: "",
    userSignature: "",
  });
  const [error, setError] = useState({});

  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });

  const submitUSer = async () => {
    try {
      const res = await postData("/v1/user/register", {
        userId: uniqueId(),
        employeeCode: "1234",
        departmentId: 122,
        designationId: 2,
        userTypeId: 56,
        userTypeName: "User",
        ...formData,
      });
      enqueueSnackbar(res.message, { variant: "success" });
      // reset();
    } catch (error) {
      console.error(error);
    }
    console.log(formData, "USER DATA");
  };

  const handleStep = (event: any) => {
    const name: any = event.target.name;

    setStep((prev: any) => {
      if (name == "prev" && prev > 0) {
        // submitUSer();
        return prev - 1;
      }
      if (name == "next" && prev < 1) {
        // submitUSer();
        return prev + 1;
      } else {
        return prev + 1;
      }
    });

    if (name == "submit" && step === 1) {
      submitUSer();
    }

    // if (step === 2 && name == "next") {
    //   setPrev(true);
    // }
    // setStep((prev: any) => {
    //   if (name == "prev" && prev > 0) {
    //     return prev - 1;
    //   }
    //   if (name == "next" && prev < 1) {
    //     if (!errors) {
    //       handleSubmit(submitUSer);
    //       return prev + 1;
    //     }
    //   } else {
    //     return prev + 1;
    //   }
    // });
  };

  console.log(step, "STEP");

  return (
    <div className="grid grid-cols-1 gap-9 ">
      <HorizontalLinearAlternativeLabelStepper step={step} />
      <div className="flex flex-col gap-9">
        <div className="rounded-[10px] border border-stroke bg-white  p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          {/* <Box component={"form"} onSubmit={handleSubmit(submitUSer)}> */}
          <div>
            {step === 0 && (
              <UserCreation
                formData={formData}
                setFormData={setFormData}
                step={step}
                setStep={setStep}
                setPrev={setPrev}
                setError={setError}
                error={error}
              />
            )}
            {step === 1 && (
              <UserPermission
                formData={formData}
                setFormData={setFormData}
                step={step}
                setStep={setStep}
                setPrev={setPrev}
                setError={setError}
                error={error}
              />
            )}
          </div>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {step > 0 ? (
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
                type="submit"
                name={step == 1 ? "submit" : "next"}
                variant="contained"
                onClick={handleStep}
                sx={{ m: 2, backgroundColor: "#022213" }}
              >
                {step === 1 ? "Submit" : "Next"}
              </Button>
            )}
            {/* </Box> */}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default UserManagment;
