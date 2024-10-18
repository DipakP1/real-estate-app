import { Box } from "@mui/material";
import React from "react";
<<<<<<< HEAD
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import Creationform from "./Creationform";
=======
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/DashboardCard";
import CreationForm from "./LeadForm";
>>>>>>> 6b56b01b769c0cdd47c25cffb5df45fde549d891
const page = () => {
  return (
    <PageContainer title="Order Table" description="master-crm">
      <DashboardCard title="Lead Creation" subtitle="">
<<<<<<< HEAD
        <Creationform />
=======
        <>
          <Box>
            <CreationForm />
          </Box>
        </>
>>>>>>> 6b56b01b769c0cdd47c25cffb5df45fde549d891
      </DashboardCard>
    </PageContainer>
  );
};

export default page;
