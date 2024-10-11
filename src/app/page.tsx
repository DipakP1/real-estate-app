"use client";
import { Box } from "@mui/material";
import LoginComponent from "./(DashboardLayout)/(auth)/register/component/AuthLogin";
import { useState } from "react";
import React from "react";
import { loginUser } from "@/services/loginService";

const Login = () => {
  const [formData, setFormData] = useState<any>({
    emailId: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <LoginComponent
        setFormData={setFormData}
        formData={formData}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </>
  );
};
export default Login;
