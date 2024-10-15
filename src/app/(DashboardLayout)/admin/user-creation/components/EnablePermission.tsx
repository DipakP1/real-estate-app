import ControlledSwitches from "@/components/MUI-Switch/Switch";
import {
  Box,
  Grid,
  InputLabel,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import { configureList } from "./configPermission";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight:"bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const EnablePermission = ({ formData, setFormData }: any) => {
  const configureList1 = [
    {
      moduleType: "Pre-Sales",
      subModule: [
        {
          title: "Site Visit Management",
          name: "site-visit-mng",
          permission: [
            { create: false },
            { read: false },
            { update: false },
            { delete: false },
          ],
        },
        {
          title: "Project Management",
          name: "project-mng",
          permission: [
            { create: false },
            { read: false },
            { update: false },
            { delete: false },
          ],
        },
      ],
    },
    {
      moduleType: "Tele Caller",
      subModule: [
        {
          title: "User 1",
          name: "user-1",
          permission: [
            { create: false },
            { read: false },
            { update: false },
            { delete: false },
          ],
        },
      ],
    },
  ];
  const handleConfigSubmit = async (e: any) => {
    e.preventDefault();
    // const response: any = await
    console.log(formData, "FORM DATA");
  };

  return (
    <div>
      <Box display="grid" gridTemplateColumns="1fr" gap={2}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box
            borderRadius="10px"
            // border="1px solid #E0E0E0"
            // boxShadow="1"
            border="1px solid grey"
            bgcolor="white"
          >
            <Box
              sx={{
                borderRadius: "10px 10px 0px 0px",
                height: 8,
              }}
            ></Box>
            <Box
              component={"form"}
              onSubmit={handleConfigSubmit}
              sx={{ flexGrow: 1, p: 3, margin: "10px 0" }}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Modules</StyledTableCell>
                      <StyledTableCell align="right">Create</StyledTableCell>
                      <StyledTableCell align="right">Read</StyledTableCell>
                      <StyledTableCell align="right">Update</StyledTableCell>
                      <StyledTableCell align="right">Delete</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {configureList.map((row) =>
                      row.moduleDetails.map((module) => (
                        <>
                          <Typography fontWeight={"bold"} variant="body1" ml={1}>{module.moduleType}</Typography>

                          {module.subModule.map((e) => (
                            <StyledTableRow key={e.title}>
                              <StyledTableCell component="th" scope="row">
                                {e.title}
                              </StyledTableCell>
                              {e.permission.map((per, index) => (
                                <>
                                  <StyledTableCell align="right">
                                    <ControlledSwitches
                                      name={e?.name}
                                      setState={setFormData}
                                      state={formData}
                                      Switchvalue={formData[`${e.name}`] || false}
                                    />
                                  </StyledTableCell>
                                </>
                              ))}
                            </StyledTableRow>
                          ))}
                        </>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* {configureList1.map((el: any, i: any) => {
                return (
                  <>
                    <Grid container>
                      <Grid xs={2.4}>
                        <Typography variant="h5" fontSize={"18px"}>
                          Module
                        </Typography>
                      </Grid>
                      <Grid xs={2.4}>
                        <Typography variant="body2" fontSize={"16px"}>
                          Create
                        </Typography>
                      </Grid>
                      <Grid xs={2.4}>
                        <Typography variant="body2" fontSize={"16px"}>
                          Read
                        </Typography>
                      </Grid>
                      <Grid xs={2.4}>
                        <Typography variant="body2" fontSize={"16px"}>
                          Update
                        </Typography>
                      </Grid>
                      <Grid xs={2.4}>
                        <Typography variant="body2" fontSize={"16px"}>
                          Delete
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box>
                      <Grid key={i} spacing={2} container>
                        {el?.subModule?.map((module: any, i: any) => {
                          return (
                            <>
                              <Grid
                                item
                                key={i}
                                md={2.4}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "1%",
                                }}
                              >
                                <InputLabel
                                  sx={{ color: "black", fontWeight: "500" }}
                                >
                                  {module.title}
                                </InputLabel>
                              </Grid>
                              {module?.permission?.map((__: any, i: any) => {
                                return (
                                  <Grid item md={2.4}>
                                    <ControlledSwitches
                                      name={module?.name}
                                      setState={setFormData}
                                      state={formData}
                                      Switchvalue={
                                        formData[module.name] || false
                                      }
                                    />
                                  </Grid>
                                );
                              })}
                            </>
                          );
                        })}
                      </Grid>
                    </Box>
                  </>
                );
              })} */}

              <Box
                mt={1}
                sx={{ display: "flex", justifyContent: "right", gap: "1em" }}
              >
                <Button variant="contained">Reset</Button>
                <Button type="submit" variant="contained">
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default EnablePermission;
