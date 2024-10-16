"use client";
import ControlledSwitches from "@/components/MUI-Switch/Switch";
import {
  Box,
  Grid,
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
  Container,
} from "@mui/material";
import React from "react";
import { configureList } from "./configPermission";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#022213",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const EnablePermission = ({
  formData,
  setFormData,
  parendFormData,
  setParendFormData,
  permission,
}: any) => {
  const initialFormData = {
    "site-visit-mng": {
      create: false,
      read: false,
      update: false,
      delete: false,
    },
    "project-mng": { create: false, read: false, update: false, delete: false },
    "project-mng-1": {
      create: false,
      read: false,
      update: false,
      delete: false,
    },
    "user-1": { create: false, read: false, update: false, delete: false },
  };

  const handleConfigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, "FORM DATA");
  };

  // const handleSwitchChange = (name: string, permissionType: string) => {
  //   setFormData({
  //     ...formData,
  //     [name]: {
  //       ...formData[name],
  //       [permissionType]: !formData[name][permissionType],
  //     },
  //   });
  // };

  console.log(formData, "FORMDA");

  return (
    <Container>
      <Box display="grid" gridTemplateColumns="1fr" gap={2}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box borderRadius="10px" border="1px solid grey" bgcolor="white">
            {/* <Box
              sx={{
                borderRadius: "10px 10px 0px 0px",
                height: 8,
                bgcolor: "#acdd33",
              }}
            ></Box> */}
            <Box
              component={"form"}
              onSubmit={handleConfigSubmit}
              sx={{ flexGrow: 1, p: 3, margin: "10px 0" }}
            >
              <Box component={Paper}>
                <Table sx={{ minWidth: 700 }}>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Modules</StyledTableCell>
                      <StyledTableCell align="center">Create</StyledTableCell>
                      <StyledTableCell align="center">Read</StyledTableCell>
                      <StyledTableCell align="center">Update</StyledTableCell>
                      <StyledTableCell align="center">Delete</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {permission?.moduleDetails?.map((module: any) => (
                      <>
                        {/* <Typography
                            // component={Typography}
                            fontWeight={"bold"}
                            variant="body1"
                            ml={1}
                            mt={2}
                          > */}
                        <p style={{ fontWeight: "bold" }}>
                          {module?.moduleType}
                        </p>
                        {/* </Typography> */}
                        {module?.subModule?.map((subModule:any) => (
                          <StyledTableRow key={subModule.name}>
                            <StyledTableCell component="th" scope="row">
                              {subModule.title}
                            </StyledTableCell>
                            {["create", "read", "update", "delete"]?.map(
                              (permissionName) => (
                                <StyledTableCell
                                  align="center"
                                  key={permission}
                                >
                                  <ControlledSwitches
                                    name={subModule?.name}
                                    subModuleName={subModule.title}
                                    setState={setFormData}
                                    state={formData}
                                    Switchvalue={
                                      formData[subModule?.name]?.[permissionName] ||
                                      false
                                    }
                                    permissionType={permissionName}
                                    // onChange={() =>
                                    //   handleSwitchChange(
                                    //     subModule.name,
                                    //     permission
                                    //   )
                                    // }
                                    allPermisson={permission}
                                  />
                                </StyledTableCell>
                              )
                            )}
                          </StyledTableRow>
                        ))}
                      </>
                    ))}
                  </TableBody>
                </Table>
              </Box>
              <Box
                mt={2}
                sx={{ display: "flex", justifyContent: "right", gap: "1em" }}
              >
                <Button
                  variant="outlined"
                  onClick={() => setFormData(initialFormData)}
                >
                  Reset
                </Button>
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default EnablePermission;
