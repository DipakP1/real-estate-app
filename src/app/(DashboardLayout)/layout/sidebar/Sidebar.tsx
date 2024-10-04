// "use client"

import { useMediaQuery, Box, Drawer, Typography, useTheme } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Sidebar, Logo } from 'react-mui-sidebar';
import LogoImg from "../../../../../public/images/logos/Vector.png"
import Image from "next/image";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebarr = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const sidebarWidth = "270px";
  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    backgroundColor: "#66A5AE",
    height:"90vh",

    '&::-webkit-scrollbar': {
      width: '270px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#eff2f7',
      borderRadius: '15px',
    },
  };

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              boxSizing: "border-box",
              margin: "20px",
              borderRadius: "12px",
              // width: "270px",
              ...scrollbarStyles,
            },
          }}
        >
          <Box
            sx={{
              // height: "100%",
            }}
          >

            <Sidebar
              // width={'270px'}
              collapsewidth="80px"
              open={isSidebarOpen}
              themeColor="#5d87ff"
              themeSecondaryColor="#49beff"
              showProfile={false}
            >
              <Box sx={{ display:"flex",alignItems:"center",gap:"1em", margin: "20px 20px", paddingBottom: "10px", fontSize: "14px", color: "white", fontWeight: "bold", borderBottom: "2px solid #fff" }} >
                <Image src={LogoImg} alt="LOGO" width={20} height={20} />
                Real Estate Portal</Box>
              <Box
                sx={{
                  height: "100%",
                }}
              >
                <SidebarItems />
              </Box>
            </Sidebar>
          </Box>

        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >

      <Typography
        sx={{
          color: "#000",
          fontWeight: "700",
          fontSize: "16px",
          cursor: "pointer",
          letterSpacing: "-0.8px",
          fontFamily: "Nunito, sans-serif",
          ml: 4,
          mt: 2
        }}
      >
        Real Estate Portal
      </Typography>
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebarr;
