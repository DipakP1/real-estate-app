"use client";
import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Divider,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Grid2,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function EditPopupForm({
  rows,
  editRow,
  editLeads,
  closeEditLeads,
  editUser,
}: any) {
  const userKey = {
    entryType: "",
    entryNo: "",
    entryDate: "",
    visitThrough: "",
    agentName: "",
    applicationNo: "",
    applicantName: "",
    fatherName: "",
    address: "",
    addressII: "",
    cityName: "",
    pinNo: "",
    mobileNo: "",
    phoneNo: "",
    customerEmail: "",
    panNo: "",
    aadharNo: "",
    project: "",
    unitCategory: "",
    floor: "",
    discussions: "",
    nextFollowUp: "",
    selectiveRemark: "",
    sssignedTo: "",
    status: "",
    furtherAction: "",
    createdBy: "",
    modifiedBy: "",
  };
  console.log("---rows", rows, "--editUser", editUser);
  const [Data, setData] = React.useState<any>(userKey);
  const [isChanged, setIsChanged] = React.useState(false);
  const [errors, setErrors] = React.useState<any>({});
  const [initialData, setInitialData] = React.useState<any>(userKey);

  React.useEffect(() => {
    if (editUser) {
      setData(editUser);
      setInitialData(editUser);
      setIsChanged(false);
    }
  }, [editUser]);
  const validateField = (name: any, value: any) => {
    const regexes: any = {
      applicationNo: /^\d{12}$/,
      mobileNo: /^\d{10}$/,
      panNo: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      aadharNo: /^\d{12}$/,
      pinCode: /^\d{6}$/,
      customerEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    };
    if (name === "applicationNo" && (value.length < 12 || value.length > 12)) {
      return "Application no. must be exactly 12 digits";
    }
    if (name === "aadharNo" && (value.length < 12 || value.length > 12)) {
      return "Aadhar no. must be exactly 12 digits";
    }
    if (name === "mobileNo" && (value.length < 10 || value.length > 10)) {
      return "Mobile no. must be exactly 10 digits";
    }
    if (name === "pinNo" && (value.length < 6 || value.length > 6)) {
      return "Invalid Pincode";
    }
    // eg of panno.BOSPC9911H,23ZAABN18J
    if (regexes[name] && !regexes[name].test(value)) {
      return `${name} not valid`;
    }
    return "";
  };
  const inputHandler = (e: any) => {
    const fieldName = e.target.name;
    const newValue = e.target.value;
    setData({ ...Data, [fieldName]: newValue });

    const error = validateField(fieldName, newValue);
    setErrors({ ...errors, [fieldName]: error });

    if (newValue === "" || newValue !== initialData[fieldName]) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  };

  return (
    <Box>
      <Dialog open={editLeads} sx={{ width: "100%" }}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: 1,
            pt: 1,
            pl: 1,
            pr: 1,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Edit info
          </Typography>
          <IconButton onClick={closeEditLeads}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ pt: 2 }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Personal Details:
            </Typography>
            <Grid2
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ border: "1px solid #ccc", p: 2, borderRadius: 2 }}
            >
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"application-no"}
                >
                  Application No.
                </InputLabel>
                <TextField
                  size="small"
                  type="number"
                  fullWidth
                  placeholder="Application No"
                  name="applicationNo"
                  value={Data.applicationNo}
                  onChange={inputHandler}
                  error={!!errors.applicationNo}
                  helperText={errors.applicationNo}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"applicant-name"}
                >
                  Applicant Name
                </InputLabel>
                <TextField
                  size="small"
                  type="text"
                  fullWidth
                  placeholder="Applicant Name"
                  name="applicantName"
                  value={Data.applicantName}
                  onChange={inputHandler}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"father-name"}
                >
                  Father Name
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Father Name"
                  name="fatherName"
                  value={Data.fatherName}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"pan-no"}>
                  Pan No
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Pan No"
                  name="panNo"
                  value={Data.panNo}
                  onChange={inputHandler}
                  error={!!errors.panNo}
                  helperText={errors.panNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"aadhar-no"}>
                  Aadhar No
                </InputLabel>
                <TextField
                  size="small"
                  type="number"
                  fullWidth
                  placeholder="Aadhar No"
                  name="aadharNo"
                  value={Data.aadharNo}
                  onChange={inputHandler}
                  error={!!errors.aadharNo}
                  helperText={errors.aadharNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"city-name"}>
                  City Name
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="City Name"
                  name="cityName"
                  value={Data.cityName}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"pin-code"}>
                  Pin Code
                </InputLabel>
                <TextField
                  size="small"
                  type="number"
                  fullWidth
                  placeholder="Pin Code"
                  name="pinNo"
                  value={Data.pinNo}
                  onChange={inputHandler}
                  error={!!errors.pinNo}
                  helperText={errors.pinNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"mobile-no"}>
                  Mobile No
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Mobile No"
                  name="mobileNo"
                  value={Data.mobileNo}
                  onChange={inputHandler}
                  error={!!errors.mobileNo}
                  helperText={errors.mobileNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"phone-no"}>
                  Phone No
                </InputLabel>
                <TextField
                  size="small"
                  type="number"
                  fullWidth
                  placeholder="Phone No"
                  name="phoneNo"
                  value={Data.phoneNo}
                  onChange={inputHandler}
                />
              </Grid2>
            </Grid2>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Record Details:
            </Typography>

            <Grid2
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ border: "1px solid #ccc", p: 2, borderRadius: 2 }}
            >
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"entry-type"}
                >
                  Entry Type
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Entry Type"
                  name="entryType"
                  value={Data.entryType}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"entry-no"}>
                  Entry No
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder=" Entry No"
                  type="number"
                  name="entryNo"
                  value={Data.entryNo}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"entry-date"}
                >
                  Entry Date
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Entry Date"
                  type="date"
                  name="entryDate"
                  value={Data.entryDate}
                  onChange={inputHandler}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <FormControl fullWidth size="small" sx={{ mt: 3 }}>
                  <InputLabel sx={{ color: "#000" }} htmlFor={"agent-name"}>
                    Agent Name
                  </InputLabel>
                  <Select
                    label="Agent Name"
                    name="agentName"
                    value={Data.agentName}
                    onChange={inputHandler}
                  >
                    <MenuItem value="">Select Agent</MenuItem>
                    <MenuItem value="Agent 1">Agent 1</MenuItem>
                    <MenuItem value="Agent 2">Agent 2</MenuItem>
                    <MenuItem value="Agent 3">Agent 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"customer-email"}
                >
                  Customer Email
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Customer Email"
                  type="email"
                  name="customerEmail"
                  value={Data.customerEmail}
                  onChange={inputHandler}
                  error={!!errors.customerEmail}
                  helperText={errors.customerEmail}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"project"}>
                  Project
                </InputLabel>
                <TextField
                  size="small"
                  type="text"
                  fullWidth
                  placeholder="Project"
                  name="project"
                  value={Data.project}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"unit-category"}
                >
                  Unit Category
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Unit Category"
                  name="unitCategory"
                  value={Data.unitCategory}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"visit-through"}
                >
                  Visit Through
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Visit Through"
                  name="visitThrough"
                  value={Data.visitThrough}
                  onChange={inputHandler}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"address"}>
                  Address
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Address"
                  name="address"
                  value={Data.address}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"addressii"}>
                  AddressII
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="AddressII"
                  name="addressII"
                  value={Data.addressII}
                  onChange={inputHandler}
                />
              </Grid2>
            </Grid2>

            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Reports Details:
            </Typography>
            <Grid2
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ border: "1px solid #ccc", p: 2, borderRadius: 2 }}
            >
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"next-followup"}
                >
                  Next Follow Up
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Next Follow Up"
                  name="nextFollowUp"
                  value={Data.nextFollowUp}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"floor"}>
                  Floor
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Floor"
                  name="floor"
                  value={Data.floor}
                  onChange={inputHandler}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"selective-remark"}
                >
                  Selective Remark
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Selective Remark"
                  name="selectiveRemark"
                  value={Data.selectiveRemark}
                  onChange={inputHandler}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <FormControl fullWidth size="small" sx={{ mt: 4 }}>
                  <InputLabel sx={{ color: "#000" }} htmlFor={"status"}>
                    Status
                  </InputLabel>
                  <Select
                    label="Status"
                    name="status"
                    value={Data.status}
                    onChange={inputHandler}
                  >
                    <MenuItem value="">Select Status</MenuItem>
                    <MenuItem value="Open">Progress</MenuItem>
                    <MenuItem value="Closed">Done</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"sssigned-to"}
                >
                  SS Signed To
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="SS Signed To"
                  name="sssignedTo"
                  value={Data.sssignedTo}
                  onChange={inputHandler}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"further-action"}
                >
                  Further Action
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Further Action"
                  name="furtherAction"
                  value={Data.furtherAction}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"created-by"}
                >
                  Created By
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Created By"
                  name="createdBy"
                  type="date"
                  value={Data.createdBy}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"modified-by"}
                >
                  Modified By
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Modified By"
                  name="modifiedBy"
                  type="date"
                  value={Data.modifiedBy}
                  onChange={inputHandler}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                <InputLabel
                  sx={{ color: "#000", mt: 1 }}
                  htmlFor={"discussions"}
                >
                  Discussions
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Discussions"
                  name="discussions"
                  value={Data.discussions}
                  onChange={inputHandler}
                />
              </Grid2>
            </Grid2>
          </Box>
        </DialogContent>
        <DialogActions sx={{ mb: 2 }}>
          <Button
            onClick={closeEditLeads}
            variant="outlined"
            color="error"
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button variant="contained" sx={{ mr: 2 }} disabled={!isChanged}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default EditPopupForm;
