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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EditForm = ({ open, handleClose }: any) => {
  const [editRow, setEditRow] = React.useState({
    Name: "Sushama Yadav",
    mobileno: "9456784310",
    department: "Information Technology",
    designation: "Software Developer",
  });

  const handleChange = (e: any) => {
    setEditRow({ ...editRow, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: 1,
            pt: 1,
            pl: 2,
            pr: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Edit info
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            required
            name="Name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={editRow.Name}
            onChange={handleChange}
          />
          <TextField
            required
            name="designation"
            label="Designation"
            type="text"
            fullWidth
            variant="standard"
            value={editRow.designation}
            onChange={handleChange}
          />
          <TextField
            required
            name="mobileno"
            label="Mobile No."
            type="number"
            fullWidth
            variant="standard"
            value={editRow.mobileno}
            onChange={handleChange}
          />
          <TextField
            required
            name="department"
            label="Department"
            type="text"
            fullWidth
            variant="standard"
            value={editRow.department}
            onChange={handleChange}
          />
          <TextField
            name="additional info"
            label="Additional Info"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button fullWidth type="submit" variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditForm;
