import ControlledSwitches from "@/components/MUI-Switch/Switch";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
  Container,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  // formData,
  // setFormData,
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

  const [formData, setFormData] = useState([]);

  // Transform configureList into the required payload format
  const transformConfigureList = () => {
    const transformedData: any = configureList.map((config: any) => ({
      moduleId: config.moduleId,
      moduleName: config.userType,
      moduleType: config.moduleDetails.map((module: any) => ({
        moduleType: module.moduleType,
        submodule: module.subModule.map((subModule: any) => ({
          submoduleId: subModule.submoduleId,
          submoduleName: subModule.title,
          permissions: {
            read: subModule.permission.read ? 1 : 0,
            create: subModule.permission.create ? 1 : 0,
            edit: subModule.permission.update ? 1 : 0,
            delete: subModule.permission.delete ? 1 : 0,
          }, 
        })),
      })),
    }));
    setFormData(transformedData);
  };
  useEffect(() => {
    transformConfigureList();
  }, []);

  const handleConfigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, "FORM DATA");
  };

  return (
    <Container>
      <Box display="grid" gridTemplateColumns="1fr" gap={2}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box borderRadius="10px" border="1px solid grey" bgcolor="white">
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
                    {permission.moduleDetails.map((module: any) => (
                      <React.Fragment key={module.moduleType}>
                        <p style={{ fontWeight: "bold" }}>
                          {module.moduleType}
                        </p>
                        {module.subModule.map((subModule: any) => (
                          <StyledTableRow key={subModule.name}>
                            <StyledTableCell component="th" scope="row">
                              {subModule.title}
                            </StyledTableCell>
                            {["create", "read", "update", "delete"].map(
                              (permissionName) => (
                                <StyledTableCell
                                  align="center"
                                  key={permissionName}
                                >
                                  <ControlledSwitches
                                    name={subModule?.name}
                                    setState={setFormData}
                                    state={formData}
                                    Switchvalue={
                                      subModule.permission[permissionName] ||
                                      false
                                    }
                                    permissionType={permissionName}
                                    allPermisson={permission}
                                    moduleId={module.moduleId}
                                    subModuleId={subModule.submoduleId}
                                  />
                                </StyledTableCell>
                              )
                            )}
                          </StyledTableRow>
                        ))}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default EnablePermission;
