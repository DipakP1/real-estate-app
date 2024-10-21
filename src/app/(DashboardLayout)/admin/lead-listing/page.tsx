"use client"
import { Box } from "@mui/material";
import React from "react";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/DashboardCard";
import CreationForm from "../lead-creation/LeadForm";
import { DataGrid } from '@mui/x-data-grid';
import LeadLists from "./LeadLists"
const page = () => {
  return (
    <PageContainer title="Order Table" description="master-crm">
      <DashboardCard title="Lead Listing" subtitle="">
        <>
          <Box>
            <LeadLists />
          </Box>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default page;
