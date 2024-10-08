"use client";

import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Typography,
  Badge,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

// components
import Profile from "./Profile";
import { IconBellRinging, IconMenu, IconHome, IconUser, IconSettingsFilled } from "@tabler/icons-react";
import Image from "next/image";

import LogoImg from "../../../../../public/images/logos/Vector.png"

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: "#ffffff",
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    borderBottom: "2px solid #ececec",
    width: "100%",
    height: '70px',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(() => ({
    width: "100%",
    height: "60px",
  }));

  return (
    <AppBarStyled position="fixed" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "18px",
                cursor: "pointer",
                letterSpacing: "-0.8px",
                fontFamily: "Nunito, sans-serif",
                mr: 2
              }}
            >
              {/* <Image src={LogoImg} alt="LOGO" width={20} height={20} /> */}

            </Typography>

            <Typography>
            </Typography>

            <Typography
              sx={{
                color: "#000",
                fontWeight: "500",
                fontSize: "18px",
                cursor: "pointer",
                letterSpacing: "-0.8px",
                fontFamily: "Nunito, sans-serif",
                display: {
                  lg: "none",
                  xs: "inline",
                },
              }}
            >

              Real Estate Portal
            </Typography>
          </Box>
        </Box>

        <Box width="280px"></Box>

        <Box flexGrow={1} sx={{
          textAlign: "center",

          // pr: 80
        }} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              color: "#000",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
              // letterSpacing: "-0.8px",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Super Admin
          </Typography>
        </Box>

        <Stack>
          <TextField sx={{ borderRadius: "10px" }} size="small" placeholder="Search here..." />
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
        <Stack>
          <IconButton
            size="large"
            color="inherit"
            aria-controls="msgs-menu"
          >
            <IconSettingsFilled size="21" stroke="1.5" />
          </IconButton>
        </Stack>
        <Stack>
          <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
          >
            <Badge variant="dot" color="primary">
              <IconBellRinging size="21" stroke="1.5" />
            </Badge>

          </IconButton>
        </Stack>


      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
