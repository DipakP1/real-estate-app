import { Box } from "@mui/material";
import React from "react";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import Reports from "../reports/Reports";
import LeadManagment from "./LeadManagment";

const page = () => {
  return (
    <PageContainer title="Order Table" description="master-crm">
      <DashboardCard title="User Creation" subtitle="">
        <Box>
          <LeadManagment />
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default page;
