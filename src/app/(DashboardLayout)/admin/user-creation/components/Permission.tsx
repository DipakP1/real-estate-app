"use client";
import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Checkbox,
  Grid,
  Button,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; 
import PeopleIcon from "@mui/icons-material/People"; // Icon for User Management
import AddIcon from "@mui/icons-material/Add"; // Icon for Add New Role

const PermissionsTable = ({ permissions }: { permissions: any }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography sx={{ fontWeight: "bold" }}>Module</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ fontWeight: "bold" }}>Create</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ fontWeight: "bold" }}>Update</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ fontWeight: "bold" }}>Delete</Typography>
        </Grid>
      </Grid>
      {permissions.map((perm: any, index: number) => (
        <Grid container spacing={2} key={index} sx={{ mt: 1 }}>
          <Grid item xs={3}>
            <Typography>{perm.module}</Typography>
          </Grid>
          {perm.permissions.map((p: any, idx: number) => (
            <Grid item xs={3} key={idx}>
              <Checkbox
                checked={p.checked}
                onChange={() => perm.togglePermission(p.name)}
                sx={{ color: "#000" }} // Changed checkbox color to black
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

// Tab Panel component to manage different tab views
const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const UserPermission = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [permissions, setPermissions] = useState([
    {
      module: "Create new job and stages",
      permissions: [
        { name: "create", checked: false },
        { name: "update", checked: false },
        { name: "delete", checked: false },
      ],
      togglePermission(name: string) {
        this.permissions = this.permissions.map((perm: any) =>
          perm.name === name ? { ...perm, checked: !perm.checked } : perm
        );
        setPermissions([...permissions]);
      },
    },
    {
      module: "Edit job and stages",
      permissions: [
        { name: "create", checked: false },
        { name: "update", checked: false },
        { name: "delete", checked: false },
      ],
      togglePermission(name: string) {
        this.permissions = this.permissions.map((perm: any) =>
          perm.name === name ? { ...perm, checked: !perm.checked } : perm
        );
        setPermissions([...permissions]);
      },
    },
  ]);

  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ececec", borderRadius: "5px" }}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Icon Label Tabs Example"
        indicatorColor="primary"
        // textColor=""
        variant="fullWidth"
      >
        <Tab
          icon={<WorkIcon sx={{ color: "#000" }} />}
          label={<Typography sx={{ color: "#000" }}>Broker</Typography>}
        />
        <Tab
          icon={<PeopleIcon sx={{ color: "#000" }} />}
          label={<Typography sx={{ color: "#000" }}>User</Typography>}
        />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        {/* <Typography variant="h6">Broker</Typography> */}
        <PermissionsTable permissions={permissions} />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        {/* <Typography variant="h6">User</Typography> */}
        <PermissionsTable permissions={permissions} />
      </TabPanel>

      {/* Add New Role Button */}
      {/* <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: "#000", color: "#fff" }}
        >
          Add New Role
        </Button>
      </Box> */}
    </Box>
  );
};

export default UserPermission;
