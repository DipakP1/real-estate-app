import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
function UserProfile() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{position:"absolute", top:"50%"}}>
            <IconButton>
              <Avatar
                sx={{ width: "140px", height: "140px" }}
                alt="Profile Avatar"
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default UserProfile;
