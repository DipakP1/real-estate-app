import React from "react";
import PageContainer from "@/components/container/PageContainer";
import DashboardCard from "@/components/shared/DashboardCard";
import { Box, Typography } from "@mui/material";
import { IconBoxAlignBottomLeft } from "@tabler/icons-react";
import UserTable from "./UserTable";
import { getData } from "@/services/apiService";

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
  const res = await getData("/v1/user/get-all");

  console.log(res, "RESPONSE");

  return (
    <PageContainer title="Users" description="users">
      <DashboardCard
        title="Users Table"
        subtitle="User data"
        sx={{ padding: 0 }}
      >
        <Box width={"100%"}>
          <UserTable resData={res} />
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default Page;
