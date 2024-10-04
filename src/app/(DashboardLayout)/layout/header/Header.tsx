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
    background: "#D4F6FB",
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    // borderBottom: "2px solid #f5f5f5",
    width: "80%",
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
                fontWeight: "700",
                fontSize: "16px",
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

        <Box flexGrow={1} sx={{
          textAlign: "center",

          // pr: 80
        }} alignItems="center">
          <Typography
            variant="body2"
            sx={{
              color: "#7B809A",
              display: "flex",
              // width:"50%"
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              cursor: "pointer",
              letterSpacing: "-0.8px",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            <IconHome width="15" height="15" /> / Pages /
          </Typography>
        </Box>

        <Stack>
          <TextField size="small" placeholder="Search here..." />
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
