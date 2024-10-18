"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Button,
  Grid2,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

 const ResetPassword=({ passwordFormClose})=> {
  const [currentPassword, setCurrentPassword] = React.useState({
    curpassword: "abdeffasd56789@",
  });

  const inputHandler = (e) => {
    setCurrentPassword({ ...currentPassword, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Box sx={{ mt: 2, ml: 2 }}>
        <Typography variant="h6" fontWeight={600}>
          Password
        </Typography>
        <Typography variant="body2">
          Here you can changed the password to your account
        </Typography>
      </Box>
      <Box sx={{ boxShadow: 2, p: 2, mt: 3 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
            <InputLabel
              sx={{ color: "#000", mb: 1 }}
              htmlFor={"current-password"}
            >
              Current Password
            </InputLabel>
            <TextField
              type="password"
              fullWidth
              placeholder="Current Password"
              name="currentpassword"
              onChange={inputHandler}
              value={currentPassword.curpassword}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
            <InputLabel
              sx={{ color: "#000", mb: 1 }}
              htmlFor={"current-password"}
            >
              New Password
            </InputLabel>
            <TextField
              name="newpassword"
              placeholder="New Password"
              type="password"
              fullWidth
              onChange={inputHandler}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
            <InputLabel
              sx={{ color: "#000", mb: 1 }}
              htmlFor={"confirm-new-password"}
            >
              Confirm New Password
            </InputLabel>
            <TextField
              name="newpassword"
              placeholder=" Confirm New Password"
              type="password"
              fullWidth
              onChange={inputHandler}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="outlined"
                onClick={passwordFormClose}
                color="error"
                sx={{ mr: 2, textTransform: "capitalize" }}
              >
                Cancel
              </Button>
              <Button
                sx={{ textTransform: "capitalize" }}
                type="submit"
                variant="outlined"
              >
                Update Password
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
export default ResetPassword
