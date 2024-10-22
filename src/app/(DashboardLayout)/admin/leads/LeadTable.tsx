"use client";
import {
  Box,
  Button,
  IconButton,
  Avatar,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  IconCalendarDue,
  IconCurrentLocation,
  IconEyeFilled,
  IconMail,
  IconMessageCircle,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import { getData } from "@/services/apiService";
import axios from "axios";
import LeadDynamicTable from "@/components/DynamicTable/LeadDynamicTable";
import { deepOrange } from "@mui/material/colors";
import styled from "styled-components";

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

/* const rows: any = [
  {
    id: 1,
    name: "Item 1",
    "site-location": "Site Location",
    status: "active",
    "company-name": "Company A",
    view: "",
  },
  {
    id: 2,
    name: "Item 2",
    "site-location": "Site Location",
    status: "active",
    "company-name": "Company B",
    view: "",
  },
  {
    id: 3,
    name: "Item 3",
    "site-location": "Site Location",
    status: "inactive",
    "company-name": "Company C",
  },
  {
    id: 4,
    name: "Item 4",
    "site-location": "Site Location",
    status: "inactive",
    "company-name": "Company D",
  },
  {
    id: 5,
    name: "Item 5",
    "site-location": "Site Location",
    status: "active",
    "company-name": "Company E",
  },
  {
    id: 6,
    name: "Item 6",
    "site-location": "Site Location",
    status: "inactive",
    "company-name": "Company F",
  },
  {
    id: 7,
    name: "Item 7",
    "site-location": "Site Location",
    status: "inactive",
    "company-name": "Company G",
  },
  {
    id: 8,
    name: "Item 8",
    "site-location": "Site Location",
    status: "active",
    "company-name": "Company H",
  },
  {
    id: 9,
    name: "Item 9",
    "site-location": "Site Location",
    status: "active",
    "company-name": "Company I",
  },
];
 */
const headCells: HeadCell<Data>[] = [
  { id: "id", numeric: true, label: "Id" },
  { id: "agentName", numeric: true, label: "Agent Name" },
  { id: "status", numeric: false, label: "Status" },
  { id: "applicantName", numeric: false, label: "Applicant name" },
  { id: "cityName", numeric: true, label: "City Name" },
  { id: "visitThrough", numeric: true, label: "Visit Through" },
  { id: "action", numeric: true, label: "Action" },
];

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: 1,
  color: "#000",
  "& > :not(style) ~ :not(style)": {
    marginTop: 1,
  },
}));

const LeadTable = () => {
  const [rows, setRows] = useState<any>([]);

  const [openLeadDialog, setOpenLeadDialog] = useState(false);
  const [singleLead, setSingleLead] = useState<any>([]);
  const [viewItem, setViewItem] = useState<any>();
  const [displayViewItem, setDisplayViewItem] = useState<any>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/v1/getLead/getUserData"
        );
        setRows(res.data.data);
        console.log("response--->", res.data.data);
      } catch (error) {
        console.log("error-->", error);
      }
    };

    fetchUserData();
  }, []);

  console.log(rows, "ROWS");

  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: openLeadDialog ? 8 : 12 }}>
          <LeadDynamicTable
            rows={rows}
            headCells={headCells}
            title="User List"
            enableSelect={true}
            enablePagination={true}
            enableSorting={true}
            openLeadDialog={openLeadDialog}
            setOpenLeadDialog={setOpenLeadDialog}
            singleLead={singleLead}
            setSingleLead={setSingleLead}
          />
        </Grid2>
        {openLeadDialog ? (
          <Grid2 size={{ xs: 12, md: 4 }}>
            {singleLead.map((user: any) => (
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
                      onClick={() => setOpenLeadDialog(false)}
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
                      {user?.applicantName?.substring(0, 1)}
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
                      {user?.applicantName}
                    </Typography>

                    <Typography fontSize={"14px"} variant="body1">
                      {`${user?.cityName} - ${user?.unitCategory}`}
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
                           Aadhar Nummber
                          </Typography>
                        }
                        secondary={
                          <Typography color="blue">
                            {user?.aadharNo}
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
                            Address
                          </Typography>
                        }
                        secondary={
                          <Typography>{user?.address}</Typography>
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
                            Customer Email Address
                          </Typography>
                        }
                        secondary={
                          <Typography color="blue">{user?.customerEmail}</Typography>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <IconPhone />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography fontWeight={"bold"}>Mobile Number</Typography>
                        }
                        secondary={
                          <Typography color="blue">
                            {user?.mobileNo}
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

export default LeadTable;
