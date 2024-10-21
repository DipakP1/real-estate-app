"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import SendToMobileOutlinedIcon from "@mui/icons-material/SendToMobileOutlined";
import "./forgetPass.css";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [codeInputVisible, setCodeInputVisible] = useState(false);
  const [hideCodeField, setHideCodeField] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [codeError, setCodeError] = useState("");
  const [emailEditable, setEmailEditable] = useState(true);
  const [mobile1, setMobile1] = useState("");
  const [code1, setCode1] = useState("");
  const [snackbarOpen1, setSnackbarOpen1] = useState(false);
  const [snackbarMessage1, setSnackbarMessage1] = useState("");
  const [isMounted1, setIsMounted1] = useState(false);
  const [codeInputVisible1, setCodeInputVisible1] = useState(false);
  const [timer1, setTimer1] = useState(30);
  const [canResend1, setCanResend1] = useState(false);
  const [mobileError1, setMobileError1] = useState("");
  const [codeError1, setCodeError1] = useState("");
  const [hideCodeField1, setHideCodeField1] = useState(false);
  const [hideButton1, setHideButton1] = useState(true);
  const [mobileEditable1, setMobileEditable1] = useState(true);

  useEffect(() => {
    setIsMounted1(true);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let interval1: any = null;
    if (codeInputVisible1 && timer1 > 0) {
      interval1 = setInterval(() => {
        setTimer1((prev) => prev - 1);
      }, 1000);
    } else if (timer1 === 0) {
      setSnackbarMessage1("Time expired! Please request a new code.");
      setSnackbarOpen1(true);
      setCanResend1(true);
      setHideButton1(false);
    }
    return () => clearInterval(interval1);
  }, [codeInputVisible1, timer1]);
  useEffect(() => {
    let interval: any = null;
    if (codeInputVisible && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setSnackbarMessage("Time expired! Please request a new code.");
      setSnackbarOpen(true);
      setCanResend(true);
      setHideButton(false);
    }
    return () => clearInterval(interval);
  }, [codeInputVisible, timer]);

  const handleMobileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobile1(event.target.value);
    setMobileError1("");
  };

  const handleCodeChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode1(event.target.value);
    setCodeError1("");
  };

  const handleSnackbarClose1 = () => {
    setSnackbarOpen1(false);
  };

  const validateMobileNumber1 = (number: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(number);
  };

  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    setMobileError1("");
    setCodeError1("");

    if (!mobile1) {
      setMobileError1("Mobile field is required!");
      return;
    }

    if (!validateMobileNumber1(mobile1)) {
      setMobileError1("Please enter a valid 10-digit mobile number!");
      return;
    }

    console.log("Password reset request submitted", { mobile1 });
    setSnackbarMessage1("Password reset link sent successfully!");
    setSnackbarOpen1(true);
    setCodeInputVisible1(true);
    setHideCodeField1(true);
    setTimer1(30);
    setCanResend1(false);
    setMobileEditable1(false);
  };

  const handleVerifyCode1 = (event: React.FormEvent) => {
    event.preventDefault();
    setCodeError1("");

    if (!code1) {
      setCodeError1("Verification code is required!");
      return;
    }

    console.log("Verification code submitted", { code1 });
    setSnackbarMessage1("Code verified successfully!");
    setSnackbarOpen1(true);
    setCode1("");
    setCodeInputVisible1(false);
    setHideCodeField1(false);
    setTimer1(30);
  };

  const handleResendCode1 = () => {
    console.log("Resending verification code to", { mobile1 });
    setSnackbarMessage1("Verification code resent successfully!");
    setSnackbarOpen1(true);
    setTimer1(30);
    setCanResend1(false);
    setHideButton1(true);
  };

  const handleEditMobile1 = () => {
    setMobileEditable1(true);
    setCodeInputVisible1(false);
    setMobileError1("");
    setHideCodeField1(false);
  };

  if (!isMounted1) {
    return null;
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
    setCodeError("");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmailError("");
    setCodeError("");

    if (!email) {
      setEmailError("Email field is required!");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    }

    console.log("Password reset request submitted", { email });
    setSnackbarMessage("Password reset link sent successfully!");
    setSnackbarOpen(true);
    setCodeInputVisible(true);
    setHideCodeField(true);
    setEmailEditable(false);
    setTimer(30);
    setCanResend(false);
  };

  const handleVerifyCode = (event: React.FormEvent) => {
    event.preventDefault();
    setCodeError("");

    if (!code) {
      setCodeError("Verification code is required!");
      return;
    }

    console.log("Verification code submitted", { code });
    setSnackbarMessage("Code verified successfully!");
    setSnackbarOpen(true);
    setCode("");
    setCodeInputVisible(false);
    setHideCodeField(false);
    setTimer(30);
  };

  const handleResendCode = () => {
    console.log("Resending verification code to", { email });
    setSnackbarMessage("Verification code resent successfully!");
    setSnackbarOpen(true);
    setTimer(30);
    setCanResend(false);
    setHideButton(true);
    setEmailEditable(true);
  };

  const handleEditEmail = () => {
    setEmailEditable(true);
    setEmailError("");
    setCodeInputVisible(false);
    setHideCodeField(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: 450,
          mx: "auto",
          mt: 8,
          p: 1,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box className="editFlex">
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ textAlign: "center", width: "100%" }}
          >
            Forgot Password
          </Typography>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabFlex"
            textColor="inherit"
          >
            <Tab label="Forgot password with Email" {...a11yProps(0)} />
            <Tab label="Forgot password with Mobile" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box
            component="form"
            onSubmit={codeInputVisible ? handleVerifyCode : handleSubmit}
          >
            <Box className="editFlex">
              <Typography
                gutterBottom
                sx={{ textAlign: "start" }}
                className="resetlink"
              >
                {codeInputVisible
                  ? "Enter your verification code"
                  : "Enter your email address to receive a code."}
              </Typography>
              {codeInputVisible && (
                <Box className="editEmailFlex" onClick={handleEditEmail}>
                  <ModeEditOutlineOutlinedIcon className="editIcon" />{" "}
                  <Box>Edit Email</Box>
                </Box>
              )}
            </Box>
            <Box className="newPassword">
              <Typography className="newPassword">
                <EmailOutlinedIcon className="newPassword1" />
                <Typography>Enter Your Email Address</Typography>
              </Typography>
            </Box>
            <TextField
              error={!!emailError}
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              helperText={emailError}
              InputProps={{
                sx: { backgroundColor: "#F6F7F9", borderRadius: 1 },
                readOnly: !emailEditable,
              }}
            />

            {hideCodeField && (
              <>
                <TextField
                  error={!!codeError}
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Verification Code"
                  value={code}
                  onChange={handleCodeChange}
                  helperText={codeError}
                  InputProps={{
                    sx: { backgroundColor: "#F6F7F9", borderRadius: 1, mt: 1 },
                  }}
                />
                <Typography sx={{ textAlign: "center", mt: 1 }}>
                  Time remaining: {timer} seconds
                </Typography>
              </>
            )}

            {hideButton && (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: "#ACDD33",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#ACDD39",
                  },
                }}
              >
                {codeInputVisible ? "Verify Code" : "Send Code"}
              </Button>
            )}

            {canResend && (
              <Button
                variant="contained"
                fullWidth
                onClick={handleResendCode}
                sx={{
                  mt: 1,
                  backgroundColor: "#ACDD33",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#ACDD39",
                  },
                }}
              >
                Resend Code
              </Button>
            )}

            {!codeInputVisible && (
              <Typography mt={2} sx={{ textAlign: "center" }}>
                Remember your password?{" "}
                <Link href="/login" underline="hover" color="primary">
                  Log in
                </Link>
              </Typography>
            )}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert onClose={handleSnackbarClose} severity="info">
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Box
            component="form"
            onSubmit={codeInputVisible1 ? handleVerifyCode1 : handleSubmit1}
          >
            <Box className="editFlex">
              <Typography
                gutterBottom
                sx={{ textAlign: "start" }}
                className="resetlink"
              >
                {codeInputVisible1
                  ? "Enter your verification code"
                  : "Enter your mobile number to receive a code."}
              </Typography>
              {codeInputVisible1 && (
                <Box className="editEmailFlex" onClick={handleEditMobile1}>
                  <ModeEditOutlineOutlinedIcon className="editIcon" />{" "}
                  <Box>Edit Mobile No</Box>
                </Box>
              )}
            </Box>

            <Box className="newPassword">
              <Typography className="newPassword">
                <SendToMobileOutlinedIcon className="newPassword1" />
                <Typography>Enter Your Mobile Number</Typography>
              </Typography>
            </Box>
            <TextField
              error={!!mobileError1}
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Mobile Number"
              value={mobile1}
              onChange={handleMobileChange1}
              helperText={mobileError1}
              InputProps={{
                sx: { backgroundColor: "#F6F7F9", borderRadius: 1 },
                readOnly: !mobileEditable1,
              }}
            />

            {hideCodeField1 && (
              <>
                <TextField
                  error={!!codeError1}
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Verification Code"
                  value={code1}
                  onChange={handleCodeChange1}
                  helperText={codeError1}
                  InputProps={{
                    sx: { backgroundColor: "#F6F7F9", borderRadius: 1, mt: 1 },
                  }}
                />
                <Typography sx={{ textAlign: "center", mt: 1 }}>
                  Time remaining: {timer1} seconds
                </Typography>
              </>
            )}

            {hideButton1 && (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  backgroundColor: "#ACDD33",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#ACDD39",
                  },
                }}
              >
                {codeInputVisible1 ? "Verify Code" : "Send Code"}
              </Button>
            )}

            {canResend1 && (
              <Button
                variant="contained"
                fullWidth
                onClick={handleResendCode1}
                sx={{
                  mt: 1,
                  backgroundColor: "#ACDD33",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#ACDD39",
                  },
                }}
              >
                Resend Code
              </Button>
            )}

            {!codeInputVisible1 && (
              <Typography mt={2} sx={{ textAlign: "center" }}>
                Remember your password?{" "}
                <Link href="/login" underline="hover" color="primary">
                  Log in
                </Link>
              </Typography>
            )}
            <Snackbar
              open={snackbarOpen1}
              autoHideDuration={6000}
              onClose={handleSnackbarClose1}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert onClose={handleSnackbarClose1} severity="info">
                {snackbarMessage1}
              </Alert>
            </Snackbar>
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
