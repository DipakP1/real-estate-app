"use client";
import BottomBarContent from "@/components/content/Applications/Messenger/BottomBarContent";
import ChatContent from "@/components/content/Applications/Messenger/ChatContent";
import SidebarContent from "@/components/content/Applications/Messenger/SidebarContent";
import TopBarContent from "@/components/content/Applications/Messenger/TopBarContent";
import Scrollbar from "@/components/content/Scrollbar";
import theme from "@/utils/theme";
import { Box, IconButton, Drawer, Divider } from "@mui/material";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";

const RootWrapper = styled(Box)(
  ({ theme }: any) => `
         height: 80vh;
         display: flex;
         border-radius: 10px;
  `
);

const Sidebar = styled(Box)(
  ({ theme }: any) => `
          width: 300px;
          background: #1B382A;
          border-right: grey solid 1px;
            border-radius: 10px 0 0 10px;

  `
);

const ChatWindow = styled(Box)(
  () => `
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex: 1;
          background-color: #f3f3f3;
        border-radius: 0 10px 10px 0;

  `
);

const ChatTopBar = styled(Box)(
  ({ theme }: any) => `
          background: #344E42;
          border-bottom: black solid 1px;
          padding: 10px;
          color: #fff;
          align-items: center;
  `
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }: any) => `
    width: 10px;
    height: 20px;
    background: blue;
  `
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
      width: 340px;
      flex-shrink: 0;
  
    & > .MuiPaper-root {
          width: 340px;
          z-index: 3;
    }
  `
);

const MessageComponent = () => {
  //   const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <RootWrapper className="Mui-FixedWrapper">
      <DrawerWrapperMobile
        sx={{
          display: { lg: "none", xs: "inline-block" },
        }}
        variant="temporary"
        anchor={"left"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Scrollbar>
          <SidebarContent />
        </Scrollbar>
      </DrawerWrapperMobile>

      <Sidebar
        sx={{
          display: { xs: "none", lg: "inline-block" },
        }}
      >
        <Scrollbar>
          <SidebarContent />
        </Scrollbar>
      </Sidebar>

      <ChatWindow>
        <ChatTopBar
          sx={{
            display: { xs: "flex", lg: "inline-block", borderRadius:"0 10px 0 0" },
          }}
        >
          <IconButtonToggle
            sx={{
              display: { lg: "none", xs: "flex" },
              mr: 2,
            }}
            color="primary"
            onClick={handleDrawerToggle}
            size="small"
          >
            <MenuTwoToneIcon />
          </IconButtonToggle>
          <TopBarContent />
        </ChatTopBar>
        <Box flex={1}>
          <Scrollbar>
            <ChatContent />
          </Scrollbar>
        </Box>
        <Divider />
        <BottomBarContent />
      </ChatWindow>
    </RootWrapper>
  );
};

export default MessageComponent;
