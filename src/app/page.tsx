"use client";
import { Box } from "@mui/material";
import LoginComponent from "./(DashboardLayout)/(auth)/register/component/AuthLogin";
import { useState } from "react";
import React from "react";
import { loginUser } from "@/services/loginService";

const Login = () => {
  const [formData, setFormData] = useState<any>({
    emailId: "",
    mobileNo:"",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [value1, setValue1] = React.useState(0);

  return (
    <>
      <LoginComponent
        setFormData={setFormData}
        formData={formData}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        value1={value1}
        setValue1={setValue1}
      />
    </>
  );
};
export default Login;
