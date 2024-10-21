/* "use client";
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

function EditForm ({ open, handleClose,userData }: any) {
  const [editData, setEditData] = React.useState<any>();
   const [editRow, setEditRow] = React.useState({
    Name: "Sushama Yadav",
    mobileno: "9456784310",
    department: "Information Technology",
    designation: "Software Developer",
  }); 
 console.log('edit userData-->',userData)
  const handleChange = (e: any) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }; 
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("user");
      if (data) {
        try {
          let res=JSON.parse(data);
          setEditData(res)
        } catch (error) {
          console.error("Error", error);
        }
      }
    }
  }, []);
  console.log('---',editData)

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
            value={userData?.sub?.userName}
            //onChange={handleChange}
          />
          <TextField
            required
            name="designation"
            label="Designation"
            type="text"
            fullWidth
            variant="standard"
           // value={editRow.designation}
            onChange={handleChange}
          />
          <TextField
            required
            name="mobileno"
            label="Mobile No."
            type="number"
            fullWidth
            variant="standard"
            //value={editRow.mobileno}
            onChange={handleChange}
          />
          <TextField
            required
            name="department"
            label="Department"
            type="text"
            fullWidth
            variant="standard"
           // value={editRow.department}
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
 */

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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function EditForm({ open, handleClose, userData }: any) {
  console.log('---editttt',userData)
  /* const [editData, setEditData] = React.useState<any>({});

  const handleChange = (e: any) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }; */

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
            width: "400px",
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
          <InputLabel sx={{ color: "#000", mb: 1 }}>Username</InputLabel>
          <TextField
            placeholder="userName"
            name="Name"
            type="text"
            fullWidth
            value={userData?.sub?.userName || ""}
           // onChange={handleChange}
          />
          <InputLabel sx={{ color: "#000", mt: 1 }}>Designation</InputLabel>
          <TextField
            name="designation"
            placeholder="Designation"
            type="text"
            fullWidth
            value={userData?.sub?.designationName || ""}
            //onChange={handleChange}
          />
          <InputLabel sx={{ color: "#000", mt: 1 }}>Mobile No</InputLabel>
          <TextField
            name="mobileno"
            placeholder="Mobile No"
            type="number"
            fullWidth
            value={userData?.sub?.phoneNumber || ""}
            //onChange={handleChange}
          />
          <InputLabel sx={{ color: "#000", mt: 1 }}>Department</InputLabel>
          <TextField
            required
            name="department"
            placeholder="Department"
            type="text"
            fullWidth
            value={userData?.sub?.departmentName || ""}
           // onChange={handleChange}
          />
          <InputLabel sx={{ color: "#000", mt: 1 }}>Additional Info</InputLabel>
          <TextField
            name="additional info"
            placeholder="Additional Info"
            type="text"
            fullWidth
            value={userData?.["additional info"] || ""}
           // onChange={handleChange}
          />
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

export default EditForm;
