"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "@/utils/theme/DefaultColors";
// import { themeCreator } from "@/utils/theme/DefaultColors";
import { SnackbarProvider } from "notistack";
import Footer from "@/components/Footer/Footer";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh", // Ensure that the wrapper takes full viewport height
  width: "100%",
  flexDirection: "column", // Arrange content in column so footer can be positioned at bottom
  backgroundColor: "#ffffff",
  // borderRadius:"100px",
}));

const ContentWrapper = styled("div")(() => ({
  flexGrow: 1, // Allows content area to grow and push footer to bottom when needed
  display: "flex",
  flexDirection: "row", // Ensure that sidebar and main content are side-by-side
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
  width: "100%",
  paddingTop: "70px",
}));

const FooterWrapper = styled("div")(() => ({
  width: "100%", // Full width for footer
  position: "relative", // Make sure the footer is relative to its parent container
  // bottom: 0,
  backgroundColor: "#D4F6FB",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const path = usePathname();
  // const theme = themeCreator('NebulaFighterTheme');

  return (
    <>
      {path === "/" || path === "/register" ? (
        <Box
          sx={{
            width: "auto",
            height: "100vh",
          }}
        >
          <ThemeProvider theme={baselightTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Box>
      ) : (
        <ThemeProvider theme={baselightTheme}>
          <CssBaseline />

          <MainWrapper className="mainwrapper">
            {/* Sidebar & Header */}
            <Header
              toggleMobileSidebar={() => setMobileSidebarOpen(true)}
              sx={{ display: "none" }}
            />
            <ContentWrapper>
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
              />

              {/* Main Content */}
              <PageWrapper className="page-wrapper">
                {/* <Container
                  sx={{
                    flexGrow: 1,
                    ".css-17qm3xv-MuiContainer-root": {
                      maxWidth: "10%"
                    }
                  }}
                > */}
                <Box sx={{ minHeight: "calc(100vh - 190px)" }}>{children}</Box>
                {/* </Container> */}
              </PageWrapper>
            </ContentWrapper>
          </MainWrapper>

          {/* Footer */}

          {path !== "/message" && (
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          )}
        </ThemeProvider>
      )}
    </>
  );
}
