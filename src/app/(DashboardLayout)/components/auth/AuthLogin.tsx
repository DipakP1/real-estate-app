"use client"
import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  TextField,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "../forms/CustomTextfield";
import { loginUser } from "@/services/loginService";
import { VariantType, useSnackbar } from "notistack"
import { useRouter } from "next/navigation";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  setFormData: any;
  formData: any
}

const AuthLogin = ({ title, subtitle, subtext, setFormData, formData }: loginType) => {

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter()

  const handleChange = (e: any, name: any) => {
    const { value } = e.target

    setFormData((prev: any) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleLoginUser = async (e: any) => {

    e.preventDefault()

    try {
      const res = await loginUser("/api/user/login", formData)
      console.log(res, "RESPONSE")
      if (res?.data?.error) {
        enqueueSnackbar(res?.data?.message, { variant: "error" })
      }
      enqueueSnackbar(res?.message, { variant: "success" })
      router.push("/home")
    } catch (error: any) {
      console.error(error, "ERROOOOOr")
    }
  }

  console.log(formData)
  return <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}
    <Box component={"form"} onSubmit={handleLoginUser}>
      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Email Id
          </Typography>
          <TextField name="emailId" type="email" size="small" onChange={(e: any) => handleChange(e, "emailId")} value={formData.emailId} variant="outlined" fullWidth />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          <TextField name="password" size="small" onChange={(e: any) => handleChange(e, "password")} value={formData.password} type="password" variant="outlined" fullWidth />
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox
                defaultChecked />}
              label="Remeber this Device"
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/"
            fontWeight="500"
            fontSize={'14px'}
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Sign In
        </Button>
      </Box>
    </Box>
    {subtitle}
  </>
}


export default AuthLogin;
