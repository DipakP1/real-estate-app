import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import { Button, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// define the props types
const LeadListModal = ({ open, handleClose, selectedRows, rows, names }: any) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




  const [name, setName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value)
  };

  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box> */}
      <div>

        <TableContainer component={Paper} style={style}>
          <Box display={'flex'} alignItems={'center'} paddingX={7} paddingY={2} >
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignItems: "center", display: { xs: 'none', sm: 'block' } }}
            >
              Assign to User
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Age"
              onChange={handleChange}
              style={{ width: 200 }}
            >
              {names && names.map((name: String, index: Number) => {
                return <MenuItem value={index}>{name}</MenuItem>
              })}

            </Select>
          </Box>
          <Table sx={{ minWidth: 650 }} style={{ padding: 10 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">LastName</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Full Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedRows.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{row.firstName}</TableCell>
                  <TableCell align="center">{row.lastName}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">{row.firstName} {row.lastName} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box display={"flex"} justifyContent={"center"} padding={1}>
            <Button onClick={handleClose} style={{ display: "flex", "alignItems": "end", justifyContent: "end" }} variant="contained" color="success">
              Apply
            </Button>
          </Box>
        </TableContainer>

      </div>
    </Modal>
  )
}



const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];






export default function LeadLists() {

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Hellen', firstName: 'Harvey', age: 95 },
  ];


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedRows, setSelectedRows] = React.useState<any>([])

  const handleSelection = (item: any) => {
    const selectedIds = new Set(item)
    const selectedData = rows.filter((row) => {
      if (selectedIds.has(row.id)) {
        return row
      }
    })
    if (item.length > 0) {
      handleOpen()
    }
    setSelectedRows(selectedData)
  }
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  return (
    <div>
      <Box sx={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={item => { handleSelection(item) }}
        />
      </Box>
      <LeadListModal open={open} handleClose={handleClose} selectedRows={selectedRows} rows={rows} names={names} />
    </div>
  );
}
