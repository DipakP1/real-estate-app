// File: components/DashboardCharts.tsx

"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Grid from "@mui/material/Grid2";

export const DeviceLimitChart = () => {
  const data = [
    { name: "Conversation", value: 21 },
    { name: "Total", value: 79 },
  ];
  const COLORS = ["#FF5A5F", "#E0E0E0"];

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Device limit
        </Typography>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={50}
                    outerRadius={60}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    isAnimationActive={false}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Centered text */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" color="primary">
                  21%
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box mt={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "250px",
                  mb: 2,
                }}
              >
                <Typography color="#05CAED" fontWeight={700} variant="body2">
                  Current Conversation
                </Typography>
                <Typography color="#A8B8D8" variant="body2">
                  21%
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="#05CAED" fontWeight={700} variant="body2">
                  Total Follow up
                </Typography>
                <Typography color="#A8B8D8" variant="body2">
                  57%
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export const MonthWiseLeadChart = () => {
  const data = [
    { name: "Total Active", value: 15, color: "#adde34" },
    { name: "Hot Lead", value: 20, color: "#f9a43f" },
    { name: "Warm Lead", value: 13, color: "#397868" },
    // { name: "Follow Up", value: 32, color: "#00CC99" },
    // { name: "Cold Lead", value: 20, color: "#FFAE42" },
  ];

  return (
    <Card sx={{ border:"1px solid #ededed", borderRadius: 2 }}>
      <CardContent>
        <Typography
          textAlign={"center"}
          borderBottom={"1px solid #ededed"}
          paddingBottom={"20px"}
          variant="h6"
          gutterBottom
        >
          Month Wise Lead
        </Typography>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <Typography
          position={"relative"}
          right={0}
          bottom={120}
          variant="h4"
          textAlign="center"
          color="black"
          fontWeight={"bold"}
        >
          <span style={{ color: "grey", fontSize: "12px" }}>Total Count</span>
          <br />
          471.3
        </Typography>
        <Box textAlign={"center"}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Button variant="outlined" sx={{width:"100%", mt:2 }}>
            Guid View
          </Button>
        </Box>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {data.map((entry, index) => (
            <Box key={index} sx={{}}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    backgroundColor: entry.color,
                    borderRadius: "50%",
                    mr: 1,
                  }}
                />
                <Typography variant="body2">{entry.name}</Typography>
              </Box>
              {/* <Typography variant="body2">{entry.value}%</Typography> */}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
