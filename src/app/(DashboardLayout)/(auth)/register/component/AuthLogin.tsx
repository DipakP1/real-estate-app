// "use client";
import PageContainer from "@/components/container/PageContainer";
import {
  Box,
  Card,
  Typography,
  Stack,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  Tab,
  Tabs,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import React, { useState } from "react";

import AuthLogin from "@/components/auth/AuthLogin";
import Visibility from "@mui/icons-material/Visibility";
import {
  IconBrandGoogleFilled,
  IconBrandAppleFilled,
  IconPhoneFilled,
  IconEyeOff,
  IconEye,
} from "@tabler/icons-react";
import { loginUser } from "@/services/loginService";
import { useSnackbar } from "notistack";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginComponent = ({
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  setValue1,
  value1,
}: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handleChange1 = (event: React.SyntheticEvent, newValue: number) => {
    setFormData({
      emailId: "",
      mobileNo: "",
      password: "",
    });
    setValue1(newValue);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmitEmail = async (e: any) => {
    e.preventDefault();
    try {
      const res = await loginUser("/v1/user/login", { type: 1, ...formData });

      const token = res.token.access.token;
      const expire = res.token.access.expires;

      const decodedToken = jwtDecode(token);

      localStorage.setItem("user", JSON.stringify(decodedToken));

      if (!res?.error) {
        enqueueSnackbar(res.message, { variant: "success" });
        router.push("/home");
      } else {
        enqueueSnackbar(res.message, { variant: "error" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmitMobile = async (e: any) => {
    e.preventDefault();
    try {
      const res = await loginUser("/v1/user/login", { type: 2, ...formData });

      localStorage.setItem("user", JSON.stringify(res.data));

      if (!res?.error) {
        enqueueSnackbar(res.message, { variant: "success" });
        router.push("/home");
      } else {
        enqueueSnackbar(res.message, { variant: "error" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Grid container sx={{ height: "98vh" }}>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: { xs: "none", md: "block", height: "100%" } }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundImage: `url('/images/backgrounds/back.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", px: 2 }}>
            Capturing Moments, Creating Memories
          </Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            px: 4,
            backgroundColor: "#022213",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Typography variant="h4" sx={{ mb: 2, color: "white" }}>
              Login with Email
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value1}
                  onChange={handleChange1}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab
                    label={
                      <Typography color="#fff">Login with Email</Typography>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={
                      <Typography color="#fff">Login with Mobile</Typography>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value1} index={0}>
                <form onSubmit={handleSubmitEmail}>
                  {/* Email */}
                  <TextField
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    name="emailId"
                    value={formData.emailId}
                    onChange={(e: any) => handleChange(e)}
                    sx={{ mb: 2, backgroundColor: "white" }}
                  />

                  {/* Password */}
                  <Box sx={{ position: "relative", mb: 2 }}>
                    <TextField
                      name="password"
                      value={formData.password}
                      onChange={(e: any) => handleChange(e)}
                      placeholder="Enter your password"
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      sx={{ backgroundColor: "white" }}
                    />
                    <IconButton
                      onClick={handleClickShowPassword}
                      sx={{ position: "absolute", right: 10, top: 10 }}
                    >
                      {showPassword ? <IconEye /> : <IconEyeOff />}
                    </IconButton>
                  </Box>

                  {/* Terms and Conditions */}
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <Typography variant="body2" sx={{ color: "white" }}>
                        I agree to the{" "}
                        <Link href="#" color="primary">
                          Terms & Conditions
                        </Link>
                      </Typography>
                    }
                  />

                  {/* Create Account Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#acdd33",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Button>
                </form>
              </CustomTabPanel>
              <CustomTabPanel value={value1} index={1}>
                <form onSubmit={handleSubmitMobile}>
                  {/* Email */}
                  <TextField
                    placeholder="Mobile Number"
                    variant="outlined"
                    fullWidth
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={(e: any) => handleChange(e)}
                    sx={{ mb: 2, backgroundColor: "white" }}
                  />

                  {/* Password */}
                  <Box sx={{ position: "relative", mb: 2 }}>
                    <TextField
                      name="password"
                      value={formData.password}
                      onChange={(e: any) => handleChange(e)}
                      placeholder="Enter your password"
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      sx={{ backgroundColor: "white" }}
                    />
                    <IconButton
                      onClick={handleClickShowPassword}
                      sx={{ position: "absolute", right: 10, top: 10 }}
                    >
                      {showPassword ? <IconEye /> : <IconEyeOff />}
                    </IconButton>
                  </Box>

                  {/* Terms and Conditions */}
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <Typography variant="body2" sx={{ color: "white" }}>
                        I agree to the{" "}
                        <Link href="#" color="primary">
                          Terms & Conditions
                        </Link>
                      </Typography>
                    }
                  />

                  {/* Create Account Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#acdd33",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Button>
                </form>
              </CustomTabPanel>
            </Box>

            {/* Or Register With */}
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "white", mb: 2 }}
            >
              Or Login with
            </Typography>

            {/* Google and Apple Buttons */}
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button
                variant="outlined"
                startIcon={<IconBrandGoogleFilled />}
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
              >
                Google
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoginComponent;

// const LoginComponent = () => {
//     const [showPassword, setShowPassword] = React.useState(false);

//     const handleClickShowPassword = () => setShowPassword(!showPassword);

//     return (
//       <Grid container sx={{ height: "100vh" }}>
//         {/* Left Image and Text Section */}
//         <Grid size={{xs:12, md:6}} sx={{ display: { xs: "none", md: "block" } }}>
//           <Box
//             sx={{
//               height: "100%",
//               backgroundImage: `url('/images/backgrounds/dashImg.png')`, // Replace with your image path
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               color: "white",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Typography variant="h4" sx={{ textAlign: "center", px: 2 }}>
//               Capturing Moments, Creating Memories
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Right Form Section */}
//         <Grid size={{xs:12, md:6}}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100%",
//               px: 4,
//               backgroundColor: "#2C2C48",
//             }}
//           >
//             <Box sx={{ width: "100%", maxWidth: 400 }}>
//               <Typography variant="h4" sx={{ mb: 2, color: "white" }}>
//                 Create an account
//               </Typography>

//               <Typography sx={{ mb: 3, color: "rgba(255, 255, 255, 0.7)" }}>
//                 Already have an account?{" "}
//                 <Link href="#" underline="hover" color="primary">
//                   Log in
//                 </Link>
//               </Typography>

//               {/* First Name and Last Name */}
//               <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//                 <TextField
//                   label="First Name"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ backgroundColor: "white" }}
//                 />
//                 <TextField
//                   label="Last Name"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ backgroundColor: "white" }}
//                 />
//               </Box>

//               {/* Email */}
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 sx={{ mb: 2, backgroundColor: "white" }}
//               />

//               {/* Password */}
//               <Box sx={{ position: "relative", mb: 2 }}>
//                 <TextField
//                   label="Enter your password"
//                   variant="outlined"
//                   type={showPassword ? "text" : "password"}
//                   fullWidth
//                   sx={{ backgroundColor: "white" }}
//                 />
//                 <IconButton
//                   onClick={handleClickShowPassword}
//                   sx={{ position: "absolute", right: 10, top: 15 }}
//                 >
//                   {showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </Box>

//               {/* Terms and Conditions */}
//               <FormControlLabel
//                 control={<Checkbox defaultChecked />}
//                 label={
//                   <Typography variant="body2" sx={{ color: "white" }}>
//                     I agree to the{" "}
//                     <Link href="#" underline="hover" color="primary">
//                       Terms & Conditions
//                     </Link>
//                   </Typography>
//                 }
//               />

//               {/* Create Account Button */}
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ mt: 2, mb: 2 }}
//               >
//                 Create account
//               </Button>

//               {/* Or Register With */}
//               <Typography variant="body2" align="center" sx={{ color: "white", mb: 2 }}>
//                 Or register with
//               </Typography>

//               {/* Google and Apple Buttons */}
//               <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
//                 <Button
//                   variant="outlined"
//                   startIcon={<GoogleIcon />}
//                   sx={{
//                     color: "white",
//                     borderColor: "white",
//                   }}
//                 >
//                   Google
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   startIcon={<AppleIcon />}
//                   sx={{
//                     color: "white",
//                     borderColor: "white",
//                   }}
//                 >
//                   Apple
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     );
//   };
