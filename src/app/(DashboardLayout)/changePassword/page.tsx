'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import NoEncryptionOutlinedIcon from '@mui/icons-material/NoEncryptionOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import './changePassword.css'

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [captchaSvg, setCaptchaSvg] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40">
                   <text x="0" y="30" font-size="30" fill="black">${randomNum}</text>
                 </svg>`;
    setCaptchaSvg('data:image/svg+xml;base64,' + btoa(svg));
    setCaptchaValue(randomNum.toString());
  };

  const handleClickShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangeCurrentPassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCurrentPassword(event.target.value);
  };

  const handleChangeNewPassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setConfirmPassword(event.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

   
    if (!currentPassword || !newPassword || !confirmPassword || !captchaInput) {
      setSnackbarMessage('All fields are required!');
      setSnackbarOpen(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setSnackbarMessage('New password and confirm password do not match!');
      setSnackbarOpen(true);
      return;
    }

    if (captchaInput !== captchaValue) {
      setSnackbarMessage('Captcha input is incorrect!');
      setSnackbarOpen(true);
      generateCaptcha(); 
      return;
    }

   
    console.log('Password change request submitted', { currentPassword, newPassword, captchaValue });
    setSnackbarMessage('Password changed successfully!');
    setSnackbarOpen(true);

   
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setCaptchaInput('');
    generateCaptcha(); 
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 430,
        mx: 'auto',
        mt: 1,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        m:{xs:3, md:"auto"}
      }}
      className='main'
    >
      <Typography variant="h4" align="center" gutterBottom>
        <NoEncryptionOutlinedIcon className='changePasswordIcon' /> <Box>Change Password</Box>
      </Typography>
      
      <Box className="newPassword"><LockOpenOutlinedIcon className="newPassword1" /> <Typography>Current Password</Typography> </Box>
   
      <TextField
        fullWidth
        size="small"
        type={showCurrentPassword ? 'text' : 'password'}
        margin="dense"
        variant="outlined"
        placeholder='Current Password'
        value={currentPassword}
        onChange={handleChangeCurrentPassword}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClickShowCurrentPassword}>
              {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <Box className="newPassword"><EnhancedEncryptionOutlinedIcon className="newPassword1" /> <Typography>New Password</Typography> </Box>
     
      <TextField
        fullWidth
        size="small"
        type={showNewPassword ? 'text' : 'password'}
        margin="dense"
        variant="outlined"
        placeholder='New Password'
        value={newPassword}
        onChange={handleChangeNewPassword}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClickShowNewPassword}>
              {showNewPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
            <Box className="newPassword"><HttpsOutlinedIcon className="newPassword1" /> <Typography>Confirm New Password</Typography> </Box>
 
      <TextField
        fullWidth
        size="small"
        type={showConfirmPassword ? 'text' : 'password'}
        margin="dense"
        variant="outlined"
        placeholder='Confirm New Password'
        value={confirmPassword}
        onChange={handleChangeConfirmPassword}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClickShowConfirmPassword}>
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <Box sx={{ textAlign: 'center', display:"flex", marginTop:"12px"}}>
        <Box className="captchaFlex">
        <img src={captchaSvg} alt="Captcha" className="image" />
        <Button
          variant="text"
          onClick={generateCaptcha}
    
        >
         <ReplayOutlinedIcon className='reloader' />
        </Button>
        </Box>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          placeholder="Enter captcha"
        />
      </Box>

      <Button
        type="submit"
        variant="contained"

        fullWidth
        sx={{ mt: 2 , backgroundColor:"#ACDD33", color:"black"}}
      >
        <LockResetOutlinedIcon className='changePass' /> Change Password
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity="info">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ChangePassword;
