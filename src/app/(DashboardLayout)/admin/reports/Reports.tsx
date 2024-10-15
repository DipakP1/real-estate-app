"use client";
// components/CustomTable.tsx
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Typography,
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  TextField,
} from "@mui/material";
// pages/UsersList.tsx
import { Chip } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Add, FileDownload } from "@mui/icons-material";
import {
  CustomPagination,
  CustomPaginationNumber,
} from "@/components/DynamicTable/TablePagination";
import { useState } from "react";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: any) => string | JSX.Element;
}

interface Data {
  [key: string]: any;
}

interface CustomTableProps {
  columns: Column[];
  data: Data[];
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
  return (
    <TableContainer component={Box}>
      <Table stickyHeader aria-label="custom table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || "left"}
                style={{ minWidth: column.minWidth }}
              >
                <Typography variant="subtitle2" fontWeight="bold">
                  {column.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align || "left"}>
                    {column.format ? column.format(value) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Sample columns
const columns: any = [
  {
    id: "avatar",
    label: "Name",
    minWidth: 170,
    format: (value: any) => <Avatar src={value.src} alt={value.name} />,
  },
  { id: "name", label: "", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    format: (value: string) => (
      <Chip label={value} color={getStatusColor(value)} />
    ),
  },
  {
    id: "actions",
    label: "Actions",
    align: "center",
    format: () => (
      <>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <FileDownload />
        </IconButton>
      </>
    ),
  },
];

// Sample data
const data = [
  {
    avatar: { src: "/path-to-avatar1.jpg", name: "Tony Reichert" },
    name: "Tony Reichert",
    email: "tony.reichert@example.com",
    role: "CEO",
    status: "ACTIVE",
  },
  {
    avatar: { src: "/path-to-avatar2.jpg", name: "Zoey Lang" },
    name: "Zoey Lang",
    email: "zoey.lang@example.com",
    role: "Technical Lead",
    status: "PAUSED",
  },
  {
    avatar: { src: "/path-to-avatar3.jpg", name: "Jane Fisher" },
    name: "Jane Fisher",
    email: "jane.fisher@example.com",
    role: "Senior Developer",
    status: "ACTIVE",
  },
  {
    avatar: { src: "/path-to-avatar4.jpg", name: "William Howard" },
    name: "William Howard",
    email: "william.howard@example.com",
    role: "Community Manager",
    status: "VACATION",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "ACTIVE":
      return "success";
    case "PAUSED":
      return "warning";
    case "VACATION":
      return "default";
    default:
      return "primary";
  }
};

const UsersList = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Example, 5 rows per page

  // Handle page change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setRowsPerPage(parseInt(event.target.value as string, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="text.primary" href="/">
          Home
        </Link>
        <Link underline="hover" color="text.primary" href="/users">
          Users
        </Link>
        <Typography color="text.primary">List</Typography>
      </Breadcrumbs>

      {/* Title and Action Buttons */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
      >
        <Typography variant="h4">All Accounts</Typography>

        <Stack direction="row" spacing={2}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search users"
            InputProps={{
              sx: { width: 300 },
            }}
          />
          <Button variant="contained" startIcon={<Add />} color="primary">
            Add User
          </Button>
          <Button
            variant="outlined"
            startIcon={<FileDownload />}
            color="secondary"
          >
            Export to CSV
          </Button>
        </Stack>
      </Stack>

      {/* Table */}
      <Box marginTop={3}>
        <CustomTable columns={columns} data={data} />
      </Box>
      <Box display={"flex"} alignItems="center" marginTop={3}>
        <CustomPagination
          count={Math.ceil(data.length / rowsPerPage)} // Total pages
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          variant="outlined"
          color="primary"
        />
        <CustomPaginationNumber
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default UsersList;
