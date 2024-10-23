"use client";
import { useState } from "react";

import Head from "next/head";

import TopBarContent from "@/components/content/Applications/Messenger/TopBarContent";
import BottomBarContent from "@/components/content/Applications/Messenger/BottomBarContent";
import SidebarContent from "@/components/content/Applications/Messenger/SidebarContent";
import ChatContent from "@/components/content/Applications/Messenger/ChatContent";

import Scrollbar from "@/components/content/Scrollbar";

import {
  Box,
  styled,
  Divider,
  Drawer,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import MessageComponent from "./Message.component";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/DashboardCard";

function ApplicationsMessenger() {
  return (
    <Box
      sx={{
        padding: "10px",
        margin: "0",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <>
        {/* <Typography variant="h5" pb={2}>
          Message
        </Typography> */}
        <MessageComponent />
      </>
    </Box>
  );
}

export default ApplicationsMessenger;
