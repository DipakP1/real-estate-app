"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Menu,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FiLogOut } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import "./header.css";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const router = useRouter();

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="small"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          m: "0 15px",
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <IconUser
          style={{
            color: "black",
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
            color: "#131121",
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <FiUnlock width={20} />{" "}
          </ListItemIcon>

          <Link href={"/profile"} className="profileuser">
            <ListItemText> Profile </ListItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FiUnlock width={20} />{" "}
          </ListItemIcon>

          <Link href={"/changePassword"} className="profileuser">
            <ListItemText> Change Password </ListItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FiLogOut width={20} />{" "}
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              Cookies.remove("token", { path: "/" });
              router.push("/");
            }}
          >
            Logout
          </ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
