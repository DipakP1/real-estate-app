"use client";
import React, { useState } from "react";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/DashboardCard";
import { Box, Typography } from "@mui/material";
import { IconBoxAlignBottomLeft } from "@tabler/icons-react";
import ViewLeads from "@/components/LeadCreation/ViewLeads";
import LeadTable from "./LeadTable";
//import UserTable from "./UserTable";

interface HeadCell<T> {
  id: keyof T; // This ensures that id is one of the keys in your data type
  numeric: boolean;
  label: string;
}
interface Data {
  id: number;
  name: string;
  price: number;
}

const rows = [
  { id: 1, name: "Item 1", price: 50 },
  { id: 2, name: "Item 2", price: 30 },
  { id: 3, name: "Item 2", price: 30 },
  { id: 4, name: "Item 2", price: 30 },
  { id: 5, name: "Item 2", price: 30 },
  { id: 6, name: "Item 2", price: 30 },
  { id: 7, name: "Item 2", price: 30 },
  { id: 8, name: "Item 2", price: 30 },
  { id: 9, name: "Item 2", price: 30 },

  // More rows...
];

const headCells: HeadCell<Data>[] = [
  { id: "id", numeric: true, label: "ID" },
  { id: "name", numeric: false, label: "Name" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
  { id: "price", numeric: true, label: "Price" },
];

const Page = async () => {
  return (
    <PageContainer title="Users" description="users">
      <DashboardCard
        title="Leads Table"
        subtitle="User data"
        sx={{ padding: 0 }}
      >
        <>
          <Box>
            <LeadTable/>
            
          </Box>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default Page;
