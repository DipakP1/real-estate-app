"use client";
import HorizontalLinearAlternativeLabelStepper from "@/components/Mui-Stepper";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCreation from "./components/UserCreation";
import { postData } from "@/services/apiService";
import { enqueueSnackbar } from "notistack";
import PermissionTable from "./components/Permission";

// Define initial permissions data for Broker and Builder (as provided)
const initialPermissions = [
  {
    moduleId: 1,
    moduleName: "User Management",
    moduleType: "broker",
    submodule: [
      {
        submoduleId: 101,
        submoduleName: "Create User",
        permissions: { read: 1, create: 1, edit: 0, delete: 0 },
      },
      {
        submoduleId: 102,
        submoduleName: "User update",
        permissions: { read: 1, create: 1, edit: 0, delete: 0 },
      },
    ],
  },
  {
    moduleId: 2,
    moduleName: "Marketing Management",
    moduleType: "broker",
    submodule: [
      {
        submoduleId: 101,
        submoduleName: "Analytics",
        permissions: { read: 1, create: 1, edit: 0, delete: 0 },
      },
    ],
  },
  {
    moduleId: 3,
    moduleName: "Sale Management",
    moduleType: "builder",
    submodule: [
      {
        submoduleId: 101,
        submoduleName: "Sale Analytics",
        permissions: { read: 1, create: 1, edit: 0, delete: 0 },
      },
    ],
  },
  {
    moduleId: 4,
    moduleName: "Project Management",
    moduleType: "builder",
    submodule: [
      {
        submoduleId: 102,
        submoduleName: "Project Tracking",
        permissions: { read: 1, create: 0, edit: 0, delete: 1 },
      },
    ],
  },
];
const userInitialData = {
  userId: "23",
  companyName: "",
  siteLocation: "",
  userName: "",
  employeeCode: "",
  departmentId: 9,
  departmentName: "",
  designationId: 69,
  designationName: "",
  userTypeId: 1129,
  userTypeName: "employee",
  dateOfBirth: "",
  phoneNumber: "",
  emailId: "",
  aadharId: "",
  userPhoto: "",
  userSignature: "",
};
const UserManagment = () => {
  const [step, setStep] = useState<number>(0); // Current step in the stepper
  const [formData, setFormData] = useState<any>(userInitialData);

  // const userData = JSON.parse(localStorage.getItem("user"))
  // console.log(userData, "USER DATA")


  const [permissions, setPermissions] = useState(initialPermissions);
  const [error, setError] = useState<any>({}); // To track form validation errors

  // Validation function
  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.userName) newErrors.userName = "User Name is required";
    if (!formData.emailId || !/\S+@\S+\.\S+/.test(formData.emailId)) {
      newErrors.emailId = "A valid Email ID is required";
    }
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.employeeCode)
      newErrors.employeeCode = "Employee code is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.siteLocation)
      newErrors.siteLocation = "Site Location is required";
    if (!formData.departmentName)
      newErrors.departmentName = "Department Name is required";
    if (!formData.designationName)
      newErrors.designationName = "Designation Name is required";
    if (!formData.aadharId || !/^\d{12}$/.test(formData.aadharId)) {
      newErrors.aadharId = "Aadhar ID must be 12 digits";
    }
    if (!formData.userPhoto) newErrors.userPhoto = "User Photo is required";
    if (!formData.userSignature)
      newErrors.userSignature = "User Signature is required";

    setError(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  // Function to submit user data along with permissions
  const submitUser = async () => {
    try {
      const payload = {
        ...formData,
        permissions: permissions,
      };

      const res = await postData("/v1/user/register", {
        userId: "11222",
        // employeeCode: "123",
        departmentId: 9,
        designationId: 69,
        userTypeId: 96,
        userTypeName: "Employee",
        ...payload,
      });

      if (!res?.error) {
        enqueueSnackbar(res.message, { variant: "success" });
        setFormData(userInitialData);
        setPermissions(initialPermissions);
        setStep(0);
      } else {
        enqueueSnackbar(res.message, { variant: "error" });
      }
    } catch (error: any) {
      console.error(error);
      enqueueSnackbar(error.response?.data?.message, {
        variant: "error",
      });
    }
  };

  // Handle step changes

  console.log(error, "ERROR");
  const handleStep = (event: any) => {
    const name = event.target.name;
    setStep((prevStep: number) => {
      if (name === "prev" && prevStep > 0) {
        return prevStep - 1; // Go back to the previous step
      }
      if (name === "next" && prevStep === 0) {
        if (validateForm()) {
          return prevStep + 1; // Proceed to the next step if form is valid
        } else {
          return prevStep; // Stay on the same step if form is invalid
        }
      }

      if (name === "submit" && prevStep === 1) {
        submitUser(); // Call submitUser when the "Submit" button is clicked on the final step
        return prevStep;
      }
      return prevStep;
    });
  };


  return (
    <div className="grid grid-cols-1 gap-9">
      {/* Stepper Component */}
      <HorizontalLinearAlternativeLabelStepper step={step} />

      <div className="flex flex-col gap-9">
        <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div>
            {/* Step 0 - User Creation */}
            {step === 0 && (
              <UserCreation
                formData={formData}
                setFormData={setFormData}
                errors={error} // Pass error object to the form
                validateForm={validateForm}
                setError={setError}
              />
            )}

            {/* Step 1 - Permissions */}
            {step === 1 && (
              <PermissionTable
                permissions={permissions}
                setPermissions={setPermissions}
              />
            )}
          </div>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {step > 0 ? (
              <Button
                name="prev"
                variant="contained"
                onClick={handleStep}
                sx={{ m: 2, backgroundColor: "#022213" }}
              >
                Prev
              </Button>
            ) : (
              <Box />
            )}

            {step !== 2 && (
              <Button
                type="submit"
                name={step === 1 ? "submit" : "next"}
                variant="contained"
                onClick={handleStep}
                sx={{ m: 2, backgroundColor: "#022213" }}
              >
                {step === 1 ? "Submit" : "Next"}
              </Button>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default UserManagment;
