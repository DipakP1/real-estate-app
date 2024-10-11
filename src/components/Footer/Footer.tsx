import { Divider, Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{backgroundColor:"#fff", borderTop:"1px solid #ececec" , padding:"20px 0"}}>
            {/* <Divider sx={{ marginY: 4 }} /> */}
            <Box textAlign="center">
                <Typography variant="caption" sx={{ fontSize: '0.8rem', color: '#aaa' }}>
                    © 2024, made by Infosolweb for a better web.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer