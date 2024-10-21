"use client";
import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
export default function UserDetails({ viewItem }: any) {
  return (
    <div>
    <Grid2
      container
      spacing={2}
      sx={{ border: "1px solid #ccc", p: 4, borderRadius: 1 }}
    >
      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
            Agent Name:
          </Typography>
          <Typography component="span" sx={{ pl: 1 }}>
            {viewItem.agentName}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
            Applicant Name :
          </Typography>
          <Typography component="span" sx={{ pl: 1 }}>
            {viewItem.applicantName}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
            City Name :
          </Typography>
          <Typography component="span" sx={{ pl: 1 }}>
            {viewItem.cityName}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
            Visit Through :
          </Typography>
          <Typography component="span" sx={{ pl: 1 }}>
            {viewItem.visitThrough}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" fontWeight={600} sx={{ ml: 1 }}>
            Status :
          </Typography>
          <Typography component="span" sx={{ pl: 1 }}>
            {viewItem.status}
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  </div>
  );
}
