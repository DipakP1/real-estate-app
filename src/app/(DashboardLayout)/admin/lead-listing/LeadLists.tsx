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
import { CustomPagination, CustomPaginationNumber } from '@/components/DynamicTable/TablePagination';


const DataTable = ({ leadData, userData }: any) => {
  const [selected, setSelected] = React.useState<any>([]);
  delete (leadData[0]?._id);
  delete (leadData[0]?.__v);

  const handleSelect = (id: any) => {
    const currentIndex = selected.indexOf(id);
    const newSelected = currentIndex === -1
      ? [...selected, id]
      : selected.filter((item: any) => item !== id);

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


  const handleChangePage = () => {

  }

  const handleChangeRowsPerPage = () => {

  }

  return (
    <Box sx={{ width: "100%", padding: 0 }}>

      <Grid container marginBottom={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <CustomPagination
            count={leadData.length}
            rowsPerPage={10}
            page={1}
            onPageChange={() => { }}
            onRowsPerPageChange={() => { }}
          />
        </Grid>

        {/* {displayAssignee && */}
        <Grid size={{ xs: 12, sm: 4 }} >
          <Box sx={{ minWidth: 120 }}>
            <FormControl style={{ width: 250 }}>
              <InputLabel id="demo-simple-select-label" style={{ color: "black" }} >Assignee</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={assignee}
                onChange={handleChange}
                label="Assignee"
              >
                {userData.length > 0 && userData.map((value: any, index: any) => {
                  return <MenuItem value={value} key={index}>{value.userName}</MenuItem>

                })}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        {/* } */}

        <Grid textAlign={"right"} size={{ xs: 12, sm: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 1,

            }}
          >
            {displayAssignee && assignee ?
              <Button variant="contained" style={{ background: "#F05252" }} >Assign</Button>
              :
              // light red color and disable assign button
              <Button variant="contained" disabled style={{ background: "#F98080", color: "white" }} >Assign</Button>
            }
          </Box>
        </Grid>

      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "1px solid #ececec",
                  backgroundColor: "#f9fbfc",
                  // borderTop: "1px solid #0003",
                }} padding="checkbox">
                <Checkbox
                  sx={{ color: "#0003" }}
                  indeterminate={selected.length > 0 && selected.length < leadData.length}
                  checked={leadData.length > 0 && selected.length === leadData.length}
                  onChange={() => {
                    if (selected.length === leadData.length) {
                      setSelected([]);
                    } else {
                      setSelected(leadData.map((row: any, index: Number) => index));
                    }
                  }}
                />
              </TableCell>
              {Object.keys(leadData[0]).map((column, index) => (
                <TableCell key={index} sx={{
                  borderBottom: "1px solid #ececec",
                  backgroundColor: "#f9fbfc",
                  // borderTop: "1px solid #0003",
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      "&:hover": { color: "black" },
                    }}
                    fontWeight={"bold"}
                  >
                    {column[0].toUpperCase() + column.slice(1, column.length)}
                  </Typography>

                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {leadData.map((row: any, index: any) => (
              <TableRow
                key={index}>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #ececec",
                  }}
                  padding="checkbox">
                  <Checkbox
                    sx={{ color: "#0003" }}
                    checked={selected.indexOf(index) !== -1}
                    onChange={() => handleSelect(index)}
                  />
                </TableCell>
                {Object.keys(leadData[0]).map((column, index) => (
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontSize: "12px",
                      borderBottom: "1px solid #ececec",
                    }}
                    key={index}>{row[column]}</TableCell>
                ))}
                {/* <TableCell key={column.id}>{row}</TableCell> */}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 1,
          }}
        >
          <Typography>
            Showing 1 to {leadData.length} of {leadData.length} entries
          </Typography>
        </Box>
        <CustomPaginationNumber
          count={leadData.length}
          rowsPerPage={10}
          page={2}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default DataTable;
