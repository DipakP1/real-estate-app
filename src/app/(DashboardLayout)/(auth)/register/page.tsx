"use client";
import { Box, Card, Typography, Stack, Button, Checkbox, FormControlLabel, IconButton, TextField } from "@mui/material";
import Link from "next/link";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthRegister from "./component/AuthRegister.";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import {IconBrandGoogleFilled, IconBrandAppleFilled} from "@tabler/icons-react"
// const Register2 = () => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", password: ""
//   })
//   const handleChange = (e: any, name: any) => {
//     const {value}:any = e.target;
//     setFormData((prev)=> {
//       return{
//         ...prev,
//         [name]:value
//       }
//     })
//   }  

//   console.log(formData, "FORM DATA")

//   const onSubmit = () => {

//   }

//   return (
//     <PageContainer title="Register" description="this is Register page">
//       <Box
//         sx={{
//           position: "relative",
//           "&:before": {
//             content: '""',
//             background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
//             backgroundSize: "400% 400%",
//             animation: "gradient 15s ease infinite",
//             position: "absolute",
//             height: "100%",
//             width: "100%",
//             opacity: "0.3",
//           },
//         }}
//       >
//         <Grid
//           container
//           spacing={0}
//           justifyContent="center"
//           sx={{ height: "100vh" }}
//         >
//           <Grid
//             size={{ xs: 12, sm: 12, lg: 4, xl: 3 }}
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Card
//               elevation={9}
//               sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
//             >
//               <Box display="flex" alignItems="center" justifyContent="center">
//               </Box>
//               <AuthRegister
//                 title=""
//                 onChange={handleChange}
//                 registerUser={onSubmit}
//                 subtext={
//                   <Typography
//                     variant="subtitle1"
//                     textAlign="center"
//                     color="textPrimary"
//                     fontWeight={"bold"}
//                     mb={1}
//                   >
//                     Register
//                   </Typography>
//                 } 
//                 subtitle={
//                   <Stack
//                     direction="row"
//                     justifyContent="center"
//                     spacing={1}
//                     mt={3}
//                   >
//                     <Typography
//                       color="textPrimary"
//                       variant="h6"
//                       fontSize={"14px"}
//                       fontWeight="400"
//                     >
//                       Already have an Account?
//                     </Typography>
//                     <Typography
//                       component={Link}
//                       href="/"
//                       fontWeight="500"
//                       fontSize={"14px"}
//                       sx={{
//                         textDecoration: "none",
//                         color: "primary.main",
//                       }}
//                     >
//                       Sign In
//                     </Typography>
//                   </Stack>
//                 }
//               />
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </PageContainer>
//   )
// }


const Register2 = () => {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword(!showPassword);
  
    return (
      <Grid container sx={{ height: "100vh" }}>
        {/* Left Image and Text Section */}
        <Grid size={{xs:12, md:6}} sx={{ display: { xs: "none", md: "block" ,height:"100%"} }}>
          <Box
            sx={{
              height: "100%",
              backgroundImage: `url('/images/backgrounds/back.jpg')`, // Replace with your image path
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
  
        {/* Right Form Section */}
        <Grid size={{xs:12, md:6}}>
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
                Create an account
              </Typography>
  
              <Typography sx={{ mb: 3, color: "rgba(255, 255, 255, 0.7)" }}>
                Already have an account?{" "}
                <Link href="#"  color="primary">
                  Log in
                </Link>
              </Typography>
  
              {/* First Name and Last Name */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField
                  placeholder="First Name"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: "white" }}
                />
                <TextField
                  placeholder="Last Name"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: "white" }}
                />
              </Box>
  
              {/* Email */}
              <TextField
                placeholder="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, backgroundColor: "white" }}
              />
  
              {/* Password */}
              <Box sx={{ position: "relative", mb: 2 }}>
                <TextField
                  placeholder="Enter your password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  sx={{ backgroundColor: "white" }}
                />
                <IconButton
                  onClick={handleClickShowPassword}
                  sx={{ position: "absolute", right: 10, top: 15 }}
                >
                  {showPassword ? <Visibility /> : <Visibility />}
                </IconButton>
              </Box>
  
              {/* Terms and Conditions */}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <Typography variant="body2" sx={{ color: "white" }}>
                    I agree to the{" "}
                    <Link href="#"  color="primary">
                      Terms & Conditions
                    </Link>
                  </Typography>
                }
              />
  
              {/* Create Account Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, mb: 2, backgroundColor:"#acdd33", color:"#000", fontWeight:"bold" }}
              >
                Create account
              </Button>
  
              {/* Or Register With */}
              <Typography variant="body2" align="center" sx={{ color: "white", mb: 2 }}>
                Or register with
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
                <Button
                  variant="outlined"
                  startIcon={<IconBrandAppleFilled />}
                  sx={{
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  Apple
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };

export default Register2;
