"use client";
import { Box, Button, IconButton, Modal, TableCell, Chip } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DynamicTableComponent from "../../components/DynamicTable/Table.component";

interface HeadCell<T> {
  id: any; // This ensures that id is one of the keys in your data type
  numeric: boolean;
  label: string;
}

interface Data {
  id: number;
  name: string;
  price: number;
}

const rows = [
  {
    id: 1,
    name: "Item 1",
    "site-location": "Site Location",
    status: "approved",
    "company-name": "Company A",
  },
  {
    id: 2,
    name: "Item 2",
    "site-location": "Site Location",
    status: "pending",
    "company-name": "Company B",
  },
  {
    id: 3,
    name: "Item 3",
    "site-location": "Site Location",
    status: "hold",
    "company-name": "Company C",
  },
  {
    id: 4,
    name: "Item 4",
    "site-location": "Site Location",
    status: "hold",
    "company-name": "Company D",
  },
  {
    id: 5,
    name: "Item 5",
    "site-location": "Site Location",
    status: "approved",
    "company-name": "Company E",
  },
  {
    id: 6,
    name: "Item 6",
    "site-location": "Site Location",
    status: "pending",
    "company-name": "Company F",
  },
  {
    id: 7,
    name: "Item 7",
    "site-location": "Site Location",
    status: "pending",
    "company-name": "Company G",
  },
  {
    id: 8,
    name: "Item 8",
    "site-location": "Site Location",
    status: "hold",
    "company-name": "Company H",
  },
  {
    id: 9,
    name: "Item 9",
    "site-location": "Site Location",
    status: "pending",
    "company-name": "Company I",
  },
];

const headCells: HeadCell<Data>[] = [
  { id: "id", numeric: true, label: "User ID" },
  { id: "name", numeric: false, label: "User Name" },
  { id: "site-location", numeric: true, label: "Site Location" },
  { id: "status", numeric: true, label: "Status" },
  { id: "company-name", numeric: true, label: "Company Name" },
  { id: "view", numeric: true, label: "View" },
];

// Map the status to color


const UserTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleView = (user: any) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//   const renderRow = (row: any) => {
//     return (
//       <>
//         <TableCell>{row.id}</TableCell>
//         <TableCell>{row.name}</TableCell>
//         <TableCell>{row["site-location"]}</TableCell>
//         <TableCell>{getStatusChip(row.status)}</TableCell>
//         <TableCell>{row["company-name"]}</TableCell>
//         <TableCell>
//           <IconButton onClick={() => handleView(row)}>
//             <VisibilityIcon />
//           </IconButton>
//         </TableCell>
//       </>
//     );
//   };

  return (
    <Box>
      <DynamicTableComponent
        rows={rows}
        headCells={headCells}
        title="User List"
        enableSelect={true}
        enablePagination={true}
        enableSorting={true}
        // renderRow={renderRow}
      />

      {/* Modal for showing user data */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedUser && (
            <div>
              <h2>User Details</h2>
              <p>
                <strong>ID:</strong> {selectedUser.id}
              </p>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Site Location:</strong> {selectedUser["site-location"]}
              </p>
              <p>
                <strong>Status:</strong> {selectedUser.status}
              </p>
              <p>
                <strong>Company Name:</strong> {selectedUser["company-name"]}
              </p>
            </div>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default UserTable;
