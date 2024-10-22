import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
function UserProfile({ userData }: any) {
  console.log("---profileeee", userData);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ position: "relative", top: 50 }}>
            <IconButton>
              <Avatar
                sx={{ width: "140px", height: "140px" }}
                alt="Profile Avatar"
                src={userData?.sub?.userPhoto}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default UserProfile;
