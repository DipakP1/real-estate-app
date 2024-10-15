import React from "react";
import UsersList from "./Reports";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/DashboardCard";

const accounts = () => {
  return (
    <PageContainer title="Report Table" description="master-crm">
      <DashboardCard title="Reports" subtitle="">
        <UsersList />
      </DashboardCard>
    </PageContainer>
  );
};

export default accounts;
