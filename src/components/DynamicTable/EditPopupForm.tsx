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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function EditPopupForm({ open, editOpenPopup, editClosePopup, rows, editRow }:any) {
  console.log("---rows", rows, "---editRow", editRow);
  /* const [editData, setEditData] = React.useState<any>({});

  const handleChange = (e: any) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }; */
  return (
    <Box>
      <Dialog open={open}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: 1,
            pt: 1,
            pl: 2,
            pr: 2,
            width: "500px",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Edit info
          </Typography>
          <IconButton onClick={editClosePopup}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ pt: 2 }}>
          <InputLabel sx={{ color: "#000", mb: 1 }}>Agent Name</InputLabel>
          <TextField
            placeholder="Agent Name"
            name="agentName"
            type="text"
            fullWidth
            value={editRow.agentName}
          />
          <InputLabel sx={{ color: "#000", mt: 1, mb: 1 }}>
            Applicant Name
          </InputLabel>
          <TextField
            name="applicantName"
            placeholder="Applicant Name"
            type="text"
            fullWidth
            value={editRow.applicantName || ""}
            //onChange={handleChange}
          />
          <InputLabel sx={{ color: "#000", mt: 1, mb: 1 }}>
            City Name
          </InputLabel>
          <TextField
            name="cityName"
            placeholder="City Name"
            type="text"
            fullWidth
            value={editRow.cityName}
            //onChange={handleChange}
          />
          <InputLabel sx={{ color: "#000", mt: 1, mb: 1 }}>
            Visit Through
          </InputLabel>
          <TextField
            name="visitthrough"
            placeholder="Visit Through"
            type="text"
            fullWidth
            value={editRow.visitThrough}
          />
          <FormControl fullWidth size="small" sx={{ mt: 4 }}>
            <InputLabel sx={{ color: "#000" }} htmlFor={"status"}>
              Status
            </InputLabel>
            <Select label="Status" name="status">
              <MenuItem value="open">Select Status</MenuItem>
              <MenuItem value="Open">Progress</MenuItem>
              <MenuItem value="Closed">Done</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ mb: 2 }}>
          <Button fullWidth type="submit" variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default EditPopupForm;
