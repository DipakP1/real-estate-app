"use client";
import {
  Box,
  TextField,
  InputLabel,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Grid2,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
const CreationForm = () => {
  const [data, setData] = useState<any>([]);
  const [inputData, setInputData] = useState<any>({
    entryType: "",
    entryNo: "",
    entryDate: "",
    visitThrough: "",
    agentName: "",
    applicationNo: "",
    applicantName: "",
    fatherName: "",
    address: "",
    // addressII: "",
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
  });
  const [errors, setErrors] = useState<any>({});
  const inputHandler = (e: any) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitDetails = () => {
    // Validation: Check if any field in inputData is empty
    const newErrors: any = {};
    Object.entries(inputData).forEach(([key, value]: any) => {
      if (value.trim() === "") {
        newErrors[key] = "This field is required";
      }
    });
    // If there are errors, set the error state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If all fields are filled, add data to the state
    setData((prevData: any) => [
      ...prevData,
      { ...inputData, id: Math.floor(Math.random() * 10000) },
    ]);
    setInputData({
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
    });
    console.log("Updated data array ->", data);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Personal Details:
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ border: "1px solid #ccc", p: 2, borderRadius: 2 }}
      >
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"application-no"}>
            Application No
          </InputLabel>
          <TextField
            size="small"
            type="number"
            fullWidth
            placeholder="Application No"
            name="applicationNo"
            onChange={inputHandler}
            value={inputData.applicationNo}
            error={!!errors.applicationNo}
          />
          {errors.applicationNo && (
            <Typography variant="caption" color="error">
              {errors.applicationNo}
            </Typography>
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"applicant-name"}>
            Applicant Name
          </InputLabel>
          <TextField
            size="small"
            type="text"
            fullWidth
            placeholder="Applicant Name"
            name="applicantName"
            onChange={inputHandler}
            value={inputData.applicantName}
            error={!!errors.applicantName}
          />
          {errors.applicantName && (
            <Typography variant="caption" color="error">
              {errors.applicantName}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"father-name"}>
            Father Name
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Father Name"
            name="fatherName"
            onChange={inputHandler}
            value={inputData.fatherName}
            error={!!errors.fatherName}
          />
          {errors.fatherName && (
            <Typography variant="caption" color="error">
              {errors.fatherName}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"pan-no"}>
            Pan No
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Pan No"
            name="panNo"
            onChange={inputHandler}
            value={inputData.panNo}
            error={!!errors.panNo}
          />
          {errors.panNo && (
            <Typography variant="caption" color="error">
              {errors.panNo}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"aadhar-no"}>
            Aadhar No
          </InputLabel>
          <TextField
            size="small"
            type="number"
            fullWidth
            placeholder="Aadhar No"
            name="aadharNo"
            onChange={inputHandler}
            value={inputData.aadharNo}
            error={!!errors.aadharNo}
          />
          {errors.aadharNo && (
            <Typography variant="caption" color="error">
              {errors.aadharNo}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"city-name"}>
            City Name
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="City Name"
            name="cityName"
            onChange={inputHandler}
            value={inputData.cityName}
            error={!!errors.cityName}
          />
          {errors.cityName && (
            <Typography variant="caption" color="error">
              {errors.cityName}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"pin-no"}>
            Pin No
          </InputLabel>
          <TextField
            size="small"
            type="number"
            fullWidth
            placeholder="Pin No"
            name="pinNo"
            onChange={inputHandler}
            value={inputData.pinNo}
            error={!!errors.pinNo}
          />
          {errors.pinNo && (
            <Typography variant="caption" color="error">
              {errors.pinNo}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"mobile-no"}>
            Mobile No
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Mobile No"
            name="mobileNo"
            onChange={inputHandler}
            value={inputData.mobileNo}
            error={!!errors.mobileNo}
          />
          {errors.mobileNo && (
            <Typography variant="caption" color="error">
              {errors.mobileNo}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"phone-no"}>
            Phone No
          </InputLabel>
          <TextField
            size="small"
            type="number"
            fullWidth
            placeholder="Phone No"
            name="phoneNo"
            onChange={inputHandler}
            value={inputData.phoneNo}
            error={!!errors.phoneNo}
          />
          {errors.phoneNo && (
            <Typography variant="caption" color="error">
              {errors.phoneNo}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Record Details:
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ border: "1px solid #ccc", p: 2, borderRadius: 2 }}
      >
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"entry-type"}>
            Entry Type
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Entry Type"
            name="entryType"
            onChange={inputHandler}
            value={inputData.entryType}
            error={!!errors.entryType}
          />
          {errors.entryType && (
            <Typography variant="caption" color="error">
              {errors.entryType}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"entry-no"}>
            Entry No
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder=" Entry No"
            type="number"
            name="entryNo"
            onChange={inputHandler}
            value={inputData.entryNo}
            error={!!errors.entryNo}
          />
          {errors.entryNo && (
            <Typography variant="caption" color="error">
              {errors.entryNo}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"entry-date"}>
            Entry Date
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Entry Date"
            type="date"
            name="entryDate"
            onChange={inputHandler}
            value={inputData.entryDate}
            error={!!errors.entryDate}
          />
          {errors.entryDate && (
            <Typography variant="caption" color="error">
              {errors.entryDate}
            </Typography>
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <FormControl fullWidth size="small" sx={{ mt: 3 }}>
            <InputLabel sx={{ color: "#000" }} htmlFor={"agent-name"}>
              Agent Name
            </InputLabel>
            <Select
              label="Agent Name"
              name="agentName"
              value={inputData.agentName}
              onChange={inputHandler}
              error={!!errors.agentName}
            >
              <MenuItem value="">Select Agent</MenuItem>
              <MenuItem value="Agent 1">Agent 1</MenuItem>
              <MenuItem value="Agent 2">Agent 2</MenuItem>
              <MenuItem value="Agent 3">Agent 3</MenuItem>
            </Select>
            {errors.agentName && (
              <Typography variant="caption" color="error">
                {errors.agentName}
              </Typography>
            )}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"customer-email"}>
            Customer Email
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Customer Email"
            type="email"
            name="customerEmail"
            onChange={inputHandler}
            value={inputData.customerEmail}
            error={!!errors.customerEmail}
          />
          {errors.customerEmail && (
            <Typography variant="caption" color="error">
              {errors.customerEmail}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"project"}>
            Project
          </InputLabel>
          <TextField
            size="small"
            type="text"
            fullWidth
            placeholder="Project"
            name="project"
            onChange={inputHandler}
            value={inputData.project}
            error={!!errors.project}
          />
          {errors.project && (
            <Typography variant="caption" color="error">
              {errors.project}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"unit-category"}>
            Unit Category
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Unit Category"
            name="unitCategory"
            onChange={inputHandler}
            value={inputData.unitCategory}
            error={!!errors.unitCategory}
          />

          {errors.unitCategory && (
            <Typography variant="caption" color="error">
              {errors.unitCategory}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"visit-through"}>
            Visit Through
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Visit Through"
            name="visitThrough"
            onChange={inputHandler}
            value={inputData.visitThrough}
            error={!!errors.visitThrough}
          />
          {errors.visitThrough && (
            <Typography variant="caption" color="error">
              {errors.visitThrough}
            </Typography>
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
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
            onChange={inputHandler}
            value={inputData.address}
            error={!!errors.address}
          />
          {errors.address && (
            <Typography variant="caption" color="error">
              {errors.address}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Reports Details:
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ border: "1px solid #ccc", p: 2, borderRadius: 2 }}
      >
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"next-followup"}>
            Next Follow Up
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Next Follow Up"
            name="nextFollowUp"
            onChange={inputHandler}
            value={inputData.nextFollowUp}
            error={!!errors.nextFollowUp}
          />

          {errors.nextFollowUp && (
            <Typography variant="caption" color="error">
              {errors.nextFollowUp}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"floor"}>
            Floor
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Floor"
            name="floor"
            onChange={inputHandler}
            value={inputData.floor}
            error={!!errors.floor}
          />

          {errors.floor && (
            <Typography variant="caption" color="error">
              {errors.floor}
            </Typography>
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
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
            onChange={inputHandler}
            value={inputData.selectiveRemark}
            error={!!errors.selectiveRemark}
          />
          {errors.selectiveRemark && (
            <Typography variant="caption" color="error">
              {errors.selectiveRemark}
            </Typography>
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <FormControl fullWidth size="small" sx={{ mt: 4 }}>
            <InputLabel sx={{ color: "#000" }} htmlFor={"status"}>
              Status
            </InputLabel>
            <Select
              label="Status"
              name="status"
              value={inputData.status}
              onChange={inputHandler}
              error={!!errors.status}
            >
              <MenuItem value="">Select Status</MenuItem>
              <MenuItem value="Open">Progress</MenuItem>
              <MenuItem value="Closed">Done</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
            {errors.status && (
              <Typography variant="caption" color="error">
                {errors.status}
              </Typography>
            )}
          </FormControl>
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"sssigned-to"}>
            SS Signed To
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="SS Signed To"
            name="sssignedTo"
            onChange={inputHandler}
            value={inputData.sssignedTo}
            error={!!errors.sssignedTo}
          />

          {errors.sssignedTo && (
            <Typography variant="caption" color="error">
              {errors.sssignedTo}
            </Typography>
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"further-action"}>
            Further Action
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Further Action"
            name="furtherAction"
            onChange={inputHandler}
            value={inputData.furtherAction}
            error={!!errors.furtherAction}
          />
          {errors.furtherAction && (
            <Typography variant="caption" color="error">
              {errors.furtherAction}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"created-by"}>
            Created By
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Created By"
            name="createdBy"
            type="date"
            onChange={inputHandler}
            value={inputData.createdBy}
            error={!!errors.createdBy}
          />
          {errors.createdBy && (
            <Typography variant="caption" color="error">
              {errors.createdBy}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"modified-by"}>
            Modified By
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            placeholder="Modified By"
            name="modifiedBy"
            type="date"
            onChange={inputHandler}
            value={inputData.modifiedBy}
            error={!!errors.modifiedBy}
          />
          {errors.modifiedBy && (
            <Typography variant="caption" color="error">
              {errors.modifiedBy}
            </Typography>
          )}
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <InputLabel sx={{ color: "#000", mt: 1 }} htmlFor={"discussions"}>
            Discussions
          </InputLabel>
          <TextField
            size="small"
            fullWidth
            multiline
            rows={4}
            placeholder="Discussions"
            name="discussions"
            onChange={inputHandler}
            value={inputData.discussions}
            error={!!errors.discussions}
          />

          {errors.discussions && (
            <Typography variant="caption" color="error">
              {errors.discussions}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button variant="outlined" color="error" sx={{ mr: 2 }}>
          Cancel
        </Button>
        <Button
          onClick={submitDetails}
          variant="contained"
          //sx={{ float: "right" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
export default CreationForm;
