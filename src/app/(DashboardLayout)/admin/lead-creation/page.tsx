import { Box } from "@mui/material";
import React from "react";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/DashboardCard";
import CreationForm from "./LeadForm";
const page = () => {
  return (
    <PageContainer title="Order Table" description="master-crm">
      <DashboardCard title="Lead Creation" subtitle="">
        <>
          <Box>
            <CreationForm />
          </Box>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default page;
