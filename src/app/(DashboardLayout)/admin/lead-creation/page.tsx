import { Box } from "@mui/material";
import React from "react";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import Creationform from "./Creationform";
const page = () => {
  return (
    <PageContainer title="Order Table" description="master-crm">
      <DashboardCard title="Lead Creation" subtitle="">
        <Creationform />
      </DashboardCard>
    </PageContainer>
  );
};

export default page;
