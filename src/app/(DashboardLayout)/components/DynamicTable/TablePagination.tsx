import * as React from 'react';
import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const CustomPagination = ({
    count,
    rowsPerPage,

    onRowsPerPageChange
}: any) => {

    return (
        <Box sx={{ width: '100%', mb:2 }}>
            {/* Rows Per Page at Top */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Select
                    size='small'
                    value={rowsPerPage}
                    onChange={onRowsPerPageChange}
                    sx={{
                        marginRight: 1, width: '75px',
                        '& .MuiSelect-select': {
                            color: '#05CAED', // Make the placeholder value blue
                        },
                        '& .MuiSelect-icon': {
                            color: '#05CAED', // Arrow icon color set to blue
                        },
                    }}

                >
                    {[5, 10, 25].map((rows) => (
                        <MenuItem key={rows} value={rows}>
                            {rows}
                        </MenuItem>
                    ))}
                </Select>
                <Typography variant='body2'>entries per page</Typography>
            </Box>
        </Box>
    );
};


const CustomPaginationNumber = ({ page, onPageChange, rowsPerPage, count }: any) => {
    const totalPages = Math.ceil(count / rowsPerPage);

    const handlePrevious = () => {
        if (page > 0) {
            onPageChange(null, page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages - 1) {
            onPageChange(null, page + 1);
        }
    };
    return (
        < Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
            < IconButton sx={{ border: "1px solid grey" }} onClick={handlePrevious} disabled={page === 0}>
                <ArrowBackIcon sx={{ fontSize: '16px' }} />
            </IconButton >

            {
                Array.from(Array(totalPages), (_, index) => (
                    <Box
                        key={index}
                        onClick={(e) => onPageChange(e, index)}
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", m: "0 5px", borderRadius: "50%", fontSize: '16px', padding: "10px", width: "35px", height: "35px", color: page === index ? "white" : "grey", backgroundColor: page === index ? "#E93B77" : "none", border: page === index ? "none" : "1px solid grey", cursor: "pointer" }}
                    >
                        {index + 1}
                    </Box>
                ))
            }

            {/* Next Button */}
            <IconButton sx={{ border: "1px solid grey" }} onClick={handleNext} disabled={page >= totalPages - 1}>
                <ArrowForwardIcon sx={{ fontSize: '16px' }} />
            </IconButton>
        </Box >
    )

}
export { CustomPagination, CustomPaginationNumber };
