"use client";
import { Box, Card, Typography, Stack } from "@mui/material";
import Link from "next/link";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import AuthRegister from "./component/AuthRegister.";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { shadows } from '@mui/system';


const Register2 = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", password: ""
  })
  const handleChange = (e: any, name: any) => {
    const {value}:any = e.target;
    setFormData((prev)=> {
      return{
        ...prev,
        [name]:value
      }
    })
  }  

  console.log(formData, "FORM DATA")

  const onSubmit = () => {

  }

  return (
    <PageContainer title="Register" description="this is Register page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            size={{ xs: 12, sm: 12, lg: 4, xl: 3 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
              </Box>
              <AuthRegister
                title=""
                onChange={handleChange}
                registerUser={onSubmit}
                subtext={
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textPrimary"
                    fontWeight={"bold"}
                    mb={1}
                  >
                    Register
                  </Typography>
                } 
                subtitle={
                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                    mt={3}
                  >
                    <Typography
                      color="textPrimary"
                      variant="h6"
                      fontSize={"14px"}
                      fontWeight="400"
                    >
                      Already have an Account?
                    </Typography>
                    <Typography
                      component={Link}
                      href="/"
                      fontWeight="500"
                      fontSize={"14px"}
                      sx={{
                        textDecoration: "none",
                        color: "primary.main",
                      }}
                    >
                      Sign In
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Register2;
