"use client";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TableCell,
  Chip,
  Grid2,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Avatar,
  Stack,
  styled,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DynamicTableComponent from "@/components/DynamicTable/Table.component";
import {
  IconEyeFilled,
  IconX,
  IconMessageCircle,
  IconMail,
  IconPhone,
  IconCurrentLocation,
  IconCalendarDue,
} from "@tabler/icons-react";
import React from "react";
import { deepOrange, green } from "@mui/material/colors";
import Image from "next/image";

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

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: 1,
  color: "#000",
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(1),
  },
}));

const headCells: HeadCell<Data>[] = [
  { id: "id", numeric: true, label: "User ID" },
  { id: "userName", numeric: false, label: "User Name" },
  { id: "status", numeric: false, label: "Status" },

  { id: "emailId", numeric: true, label: "Email Address" },
  { id: "siteLocation", numeric: true, label: "Site Location" },
  { id: "phoneNumber", numeric: true, label: "Mobile No" },
  { id: "action", numeric: true, label: "Action" },
];


const UserTable = ({ resData }: any) => {
  const [open, setOpen] = React.useState(false);
  const [signleUser, setSingleUser] = React.useState<any>([]);

  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [signleUserEdit, setSingleUserEdit] = React.useState<any>([]);

  return (
    <Box width={"auto"}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: open ? 8 : 12 }}>
          <DynamicTableComponent
            rows={resData?.data}
            headCells={headCells}
            title="User List"
            enableSelect={true}
            enablePagination={true}
            enableSorting={true}
            userListDialog={open}
            setUserListDialog={setOpen}
            selectedUser={signleUser}
            setSelectedUser={setSingleUser}
            editUser={signleUserEdit}
            setEditUser={setSingleUserEdit}
            openEditdialog={openEditDialog}
            setOpenEditdialog={setOpenEditDialog}
          />
        </Grid2>
        {open ? (
          <Grid2 size={{ xs: 12, md: 4 }}>
            {signleUser.map((user: any) => (
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    position={"relative"}
                    gutterBottom
                    variant="h5"
                    component="div"
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <span>Profile</span>
                    <IconButton
                      aria-label="close"
                      onClick={() => setOpen(false)}
                      sx={() => ({
                        position: "absolute",
                        right: 0,
                        // bottom: "50%",
                        color: "#000",
                      })}
                    >
                      <IconX style={{ marginBottom: "10px" }} />
                    </IconButton>
                  </Typography>

                  <Divider />
                </CardContent>
                <CardActions>
                  <Stack
                    display={"flex"}
                    justifyContent={"center"}
                    width={"100%"}
                    alignItems={"center"}
                    spacing={1}
                  >
                    <Avatar
                      sx={{
                        bgcolor: deepOrange[500],
                        borderRadius: "10px",
                        width: 100,
                        height: 100,
                      }}
                      variant="square"
                    >
                      {user?.userName?.substring(0, 1)}
                    </Avatar>
                  </Stack>
                </CardActions>
                <Stack
                  width={"100%"}
                  direction={"row"}
                  spacing={12}
                  mt={2}
                  padding={"10px 20px"}
                >
                  <Box>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"18px"}
                      variant="body1"
                    >
                      {user?.userName}
                    </Typography>

                    <Typography fontSize={"14px"} variant="body1">
                      {`${user?.designationName} - ${user?.companyName}`}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      variant="outlined"
                      startIcon={<IconMessageCircle />}
                      href="/message"
                    >
                      Message
                    </Button>
                  </Box>
                </Stack>
                {/* <Divider textAlign="left">Contact Details</Divider> */}
                <Root>
                  <Divider textAlign="left"></Divider>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <Typography
                      sx={{ ml: 2, fontSize: "16px", fontWeight: "bold" }}
                    >
                      Personal Information
                    </Typography>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <ListItemAvatar>
                        <IconCalendarDue />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography fontWeight={"bold"}>
                            Date of Birth
                          </Typography>
                        }
                        secondary={
                          <Typography color="blue">
                            {user?.dateOfBirth}
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <IconCurrentLocation />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography fontWeight={"bold"}>
                            Site Locations
                          </Typography>
                        }
                        secondary={
                          <Typography >
                            {user?.siteLocation}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Root>
                <Root>
                  <Divider textAlign="left"></Divider>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <Typography
                      sx={{ ml: 2, fontSize: "16px", fontWeight: "bold" }}
                    >
                      Contact Details
                    </Typography>
                    <ListItem>
                      <ListItemAvatar>
                        <IconMail />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography fontWeight={"bold"}>
                            Email Address
                          </Typography>
                        }
                        secondary={
                          <Typography color="blue">{user?.emailId}</Typography>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <IconPhone />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography fontWeight={"bold"}>Phone</Typography>
                        }
                        secondary={
                          <Typography color="blue">
                            {user?.phoneNumber}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Root>
              </Card>
            ))}
          </Grid2>
        ) : null}
      </Grid2>
    </Box>
  );
};

export default UserTable;
