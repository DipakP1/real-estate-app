"use client"
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  IconButton,
  InputBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Button,
} from '@mui/material';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { CustomPagination } from '@/components/DynamicTable/TablePagination';


const DataTable = ({ leadData,userData }: any) => {
  const [selected, setSelected] = React.useState<any>([]);
  delete (leadData[0]?._id);
  delete (leadData[0]?.__v);

  const handleSelect = (id: any) => {
    const currentIndex = selected.indexOf(id);
    const newSelected = currentIndex === -1
      ? [...selected, id]
      : selected.filter((item:any) => item !== id);

    setSelected(newSelected);

  };
  const [assignee, setAssignee] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAssignee(event.target.value);
  };



  useEffect(() => {
    if (selected.length > 0) {
      setDisplayAssignee(true)
    }
    else {
      setDisplayAssignee(false)
      setAssignee("")
    }
  }, [selected])

  const [displayAssignee, setDisplayAssignee] = useState(false)


  return (
    <Box sx={{ width: "100%", padding: 0 }}>

      <Grid container>
        <Grid size={{ xs: 12, sm: 4 }}>
          <CustomPagination
            count={leadData.length}
            rowsPerPage={10}
            page={1}
            onPageChange={() => { }}
            onRowsPerPageChange={() => { }}
          />
        </Grid>

        {displayAssignee &&
          <Grid size={{ xs: 12, sm: 4 }} >
            <Box sx={{ minWidth: 120 }}>
              <FormControl style={{ width: 250 }}>
                <InputLabel id="demo-simple-select-label" style={{ color: "black" }} >Select Assignee</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={assignee}
                  label="Age"
                  onChange={handleChange}
                >
                  {userData.length>0&&userData.map((value:any, index:any) => {
                    return <MenuItem value={value} key={index}>{value.userName}</MenuItem>

                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        }
        {displayAssignee && assignee &&
          <Grid textAlign={"right"} size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                gap: 1,
              }}
            >
              <Button  variant="contained" style={{background:"#F05252"}} >Assign</Button>
            </Box>
          </Grid>
        }

      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  sx={{ color: "#0003" }}
                  indeterminate={selected.length > 0 && selected.length < leadData.length}
                  checked={leadData.length > 0 && selected.length === leadData.length}
                  onChange={() => {
                    if (selected.length === leadData.length) {
                      setSelected([]);
                    } else {
                      setSelected(leadData.map((row:any, index:Number) => index));
                    }
                  }}
                />
              </TableCell>
              {Object.keys(leadData[0]).map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {leadData.map((row:any, index:any) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox
                    sx={{ color: "#0003" }}
                    checked={selected.indexOf(index) !== -1}
                    onChange={() => handleSelect(index)}
                  />
                </TableCell>
                {Object.keys(leadData[0]).map((column, index) => (
                  <TableCell key={index}>{row[column]}</TableCell>
                ))}
                {/* <TableCell key={column.id}>{row}</TableCell> */}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
