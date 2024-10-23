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
import EmojiPicker from "emoji-picker-react";

const RootWrapper = styled(Box)(
  ({ theme }: any) => `
         height: 90vh;
         display: flex;
         justify-content: center;
        //  border-radius: 10px;
  `
);

const Sidebar = styled(Box)(
  ({ theme }: any) => `
          width: 300px;
          // background: #4e8b3352;
          background: #fff;

          border-right: #ececec solid 2px;
          border-bottom: #ececec solid 2px;
  `
);

const ChatWindow = styled(Box)(
  () => `
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex: 1;
          background-color: #ffffff;
//           background-image: url(/images/backgrounds/login-bg.svg);
//           background-repeat: no-repeat;
//           background-attachment: fixed;
//           background-position: center;
//           background-size: cover;
  `
);

const ChatTopBar = styled(Box)(
  ({ theme }: any) => `
          background: #ffffff;
          border-bottom: #ececec solid 1px;
          padding: 10px;
          color: #000;
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
            display: { xs: "flex", lg: "inline-block" },
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
        {/* <Box width={"50%"} border={"1px solid red"} >
          <EmojiPicker />
        </Box> */}
        <Divider />
        <BottomBarContent />
      </ChatWindow>
    </RootWrapper>
  );
};

export default MessageComponent;
