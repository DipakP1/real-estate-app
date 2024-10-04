"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { SnackbarProvider } from 'notistack';

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#D4F6FB"
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
  // border:'2px solid gray',
  width: '100%'
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const path = usePathname();

  return (
    <>

      {path === "/" || path === "/register" ? (
        <Box
          sx={{
            // minHeight: "calc(100vh - 170px)",
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
        <>
          <ThemeProvider theme={baselightTheme}>
            <CssBaseline />

            <MainWrapper className="mainwrapper">
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
              />
              <Header
                toggleMobileSidebar={() => setMobileSidebarOpen(true)}
                sx={{ display: "none" }}
              />
              <PageWrapper className="page-wrapper">
                <Container
                  sx={{
                    paddingTop: "100px",
                    width: "100%",
                  }}
                >

                  <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
                </Container>
              </PageWrapper>
            </MainWrapper>
          </ThemeProvider>
        </>
      )}


    </>
  );
}
