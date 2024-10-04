import { Divider, Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{backgroundColor:"#D4F6FB"}}>
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