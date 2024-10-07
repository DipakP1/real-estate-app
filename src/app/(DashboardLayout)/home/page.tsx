"use client"
import { Card, CardContent, Typography, Box, Avatar, Divider, CircularProgress, Stack, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Grid from "@mui/material/Grid2"
import { IconDotsVertical } from '@tabler/icons-react';
import YearlyBreakup from '../components/dashboard/YearlyBreakups';
import MonthlyEarnings from '../components/dashboard/MonthlyEarning';
import SalesOverview from '../components/dashboard/SalesOverview';
import RecentTransactions from '../components/dashboard/RecentTransations';
import { DeviceLimitChart, MonthWiseLeadChart } from '../components/dashboard/PieChart';


// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


// Users and Companies Stats Cards
const StatsCard = ({ title, value }: { title: string, value: string }) => (
  <Card sx={{ padding: 5, textAlign: 'center', backgroundColor: '#f9f9f9', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}>
    <Typography variant="h3" sx={{ fontSize: '2.5rem', fontWeight: 700, color: "#E91F63", mb: 2 }}>
      {value}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontSize: '1rem', color: '#05CAED', fontWeight: 600 }}>
      {title}
    </Typography>
  </Card>
);

// Line chart component for month-wise lead
const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'Lead Follow-up',
      data: [12, 19, 3, 5, 2, 3, 9],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Month Wise Lead',
      font: {
        size: 16,
        weight: '600',
      },
    },
  },
};

// Device limit circular progress component
const DeviceLimit = () => (
  <Card sx={{ padding: 3, textAlign: 'center', backgroundColor: '#e3f2fd', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}>
    <Typography variant="subtitle1" sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
      Device Limit
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 2 }}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={21} size={80} thickness={4} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
            21%
          </Typography>
        </Box>
      </Box>
    </Box>
    <Typography variant="body2" sx={{ color: '#555', fontSize: '0.9rem' }}>
      Active Devices
    </Typography>
  </Card>
);

// Dashboard Layout
const Dashboard = () => {
  return (
    <Box sx={{ }}>
      {/* Weather and image section */}
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex', flexDirection: 'column' }} >
          <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={9}>
            <CardContent sx={{ padding: 0 }}>
              <img src={"/images/backgrounds/dashImg.png"} alt="Ajmera Group" style={{ width: '100%', height: '100%', display: 'block' }} />
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mb: 2 }}>
              <Typography sx={{
                color: "#05CAED",
                fontWeight: "bold",
                // p:"10px 10px"
              }}>Ajmera Group</Typography>
              <Button size='small' sx={{ borderColor: "#05CAED", color: "#05CAED", p: "2px 20px" }} variant='outlined'>Ajmera</Button>
              <Box>
                <IconDotsVertical fontSize={"12px"} />
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column' }}>
          <SalesOverview />
        </Grid>
      </Grid>

      {/* Stats cards section */}
      <Grid container spacing={3} mt={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} >
          <StatsCard title="Active Users" value="21" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} >
          <StatsCard title="Total Users" value="40" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} >
          <StatsCard title="Companies" value="12" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} >
          <StatsCard title="Field Users" value="417" />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={3}>
        <Grid size={{ xs: 12, md: 6 }} >
          <DeviceLimitChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MonthWiseLeadChart />
        </Grid>
      </Grid>

      {/* Device limit and lead follow-up charts */}
      {/* <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={6}>
          <DeviceLimit />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: 3, boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}>
            <Line data={data} options={options} />
          </Card>
        </Grid>
      </Grid> */}

      {/* Footer section (optional) */}

    </Box>
  );
};

export default Dashboard;
