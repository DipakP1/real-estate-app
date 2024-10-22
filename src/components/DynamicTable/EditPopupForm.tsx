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
  console.log("---rows", rows, "--editUser", editUser);
  /* const [editData, setEditData] = React.useState<any>({});

  const handleChange = (e: any) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }; */

  /*   const filterData = rows.filter(
    (item: any, ind: any) => item._id == editUser._id
  );
  console.log("----filterdata", filterData); */
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
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.applicationNo}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.applicantName}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.fatherName}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"pan-no"}>
                  Pan No
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Pan No"
                  name="panNo"
                  value={editUser?.panNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"aadhar-no"}>
                  Aadhar No
                </InputLabel>
                <TextField
                  size="small"
                  type="number"
                  fullWidth
                  placeholder="Aadhar No"
                  name="aadharNo"
                  value={editUser?.aadharNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"city-name"}>
                  City Name
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="City Name"
                  name="cityName"
                  value={editUser?.cityName}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"pin-code"}>
                  Pin Code
                </InputLabel>
                <TextField
                  size="small"
                  type="number"
                  fullWidth
                  placeholder="Pin Code"
                  name="pinNo"
                  value={editUser?.pinNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"mobile-no"}>
                  Mobile No
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Mobile No"
                  name="mobileNo"
                  value={editUser?.mobileNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"phone-no"}>
                  Phone No
                </InputLabel>
                <TextField
                  size="small"
                  type="number"
                  fullWidth
                  placeholder="Phone No"
                  name="phoneNo"
                  value={editUser?.phoneNo}
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
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.entryType}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"entry-no"}>
                  Entry No
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder=" Entry No"
                  type="number"
                  name="entryNo"
                  value={editUser?.entryNo}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.entryDate}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <FormControl fullWidth size="small" sx={{ mt: 3 }}>
                  <InputLabel sx={{ color: "#000" }} htmlFor={"agent-name"}>
                    Agent Name
                  </InputLabel>
                  <Select label="Agent Name" name="agentName">
                    <MenuItem value="">Select Agent</MenuItem>
                    <MenuItem value="Agent 1">Agent 1</MenuItem>
                    <MenuItem value="Agent 2">Agent 2</MenuItem>
                    <MenuItem value="Agent 3">Agent 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.customerEmail}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"project"}>
                  Project
                </InputLabel>
                <TextField
                  size="small"
                  type="text"
                  fullWidth
                  placeholder="Project"
                  name="project"
                  value={editUser?.project}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.unitCategory}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.visitThrough}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.address}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.addressII}
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
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.nextFollowUp}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"floor"}>
                  Floor
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Floor"
                  name="floor"
                  value={editUser?.floor}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.selectiveRemark}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
                <FormControl fullWidth size="small" sx={{ mt: 4 }}>
                  <InputLabel sx={{ color: "#000" }} htmlFor={"status"}>
                    Status
                  </InputLabel>
                  <Select label="Status" name="status">
                    <MenuItem value="">Select Status</MenuItem>
                    <MenuItem value="Open">Progress</MenuItem>
                    <MenuItem value="Closed">Done</MenuItem>
                  </Select>
                </FormControl>
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.sssignedTo}
                />
              </Grid2>

              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.furtherAction}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.createdBy}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.modifiedBy}
                />
              </Grid2>
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }}>
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
                  value={editUser?.discussions}
                />
              </Grid2>
            </Grid2>
          </Box>
        </DialogContent>
        <DialogActions sx={{ mb: 2 }}>
         
            <Button variant="outlined" color="error" sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button variant="contained" sx={{mr:2}}>Update</Button>
        
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default EditPopupForm;
