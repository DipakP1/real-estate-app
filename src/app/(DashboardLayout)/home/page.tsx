"use client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Divider,
  CircularProgress,
  Stack,
  Button,
  IconButton,
  Container,
  Paper,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Grid from "@mui/material/Grid2";
import { IconDotsVertical } from "@tabler/icons-react";
import YearlyBreakup from "../components/dashboard/YearlyBreakups";
import MonthlyEarnings from "../components/dashboard/MonthlyEarning";
import SalesOverview from "../components/dashboard/SalesOverview";
import RecentTransactions from "../components/dashboard/RecentTransations";
import {
  DeviceLimitChart,
  MonthWiseLeadChart,
} from "../components/dashboard/PieChart";
import {
  IconDots,
  IconPointFilled,
  IconTrendingUp,
  IconTrendingDown,
} from "@tabler/icons-react";
import ProductPerformance from "../components/dashboard/ProductPerformance";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataCard = ({
  title,
  value,
  backColor,
  trend,
  trendValue,
}: {
  title: string;
  value: string;
  backColor: string;
  trend: boolean;
  trendValue: any;
}) => (
  <Card
    sx={{
      // height: "200px",
      padding: 2.5,
      textAlign: "left",
      backgroundColor: backColor,
      border: "1px solid #ececec",
      borderRadius: "20px",
    }}
  >
    <Stack
      direction="row"
      sx={{ textAlign: "center", alignItems: "center" }}
      spacing={11}
    >
      <Typography>Net Income</Typography>
      <IconButton>
        <IconDots />
      </IconButton>
    </Stack>
    <Typography
      variant="h3"
      sx={{ fontSize: "2.5rem", fontWeight: 700, color: "#000", mb: 2, mt: 2 }}
    >
      $ {value}
    </Typography>
    <Typography
      variant="subtitle2"
      sx={{ fontSize: "14px", color: "#000", fontWeight: 600, mt: 4 }}
    >
      <span style={{ color: trend ? "#acdd33" : "red" }}>
        {trend ? (
          <IconTrendingUp width={20} height={20} />
        ) : (
          <IconTrendingDown width={20} height={20} />
        )}
        {trendValue}%
      </span>{" "}
      from last month
    </Typography>
  </Card>
);
const DataCard1 = ({
  title,
  value,
  backColor,
}: {
  title: string;
  value: string;
  backColor: string;
}) => (
  <Card
    sx={{
      // height: "200px",
      padding: 3,
      textAlign: "center",
      gap: 2,
      backgroundColor: backColor,
      border: "1px solid #ededed",
      borderRadius: "20px",
    }}
  >
    <Typography
      variant="body1"
      color="#fff"
      textAlign={"left"}
      sx={{ alignItems: "center", display: "flex" }}
      mb={2}
    >
      <IconPointFilled style={{ color: "red" }} />
      Update
    </Typography>
    <Typography variant="body2" textAlign={"left"} color="grey">
      Feb 12th 2024
    </Typography>
    <Typography
      variant="body2"
      fontSize={"16px"}
      color="#fff"
      margin={"20px 0"}
      textAlign={"left"}
    >
      Sales revenue Increased <span style={{ color: "#acdd33" }}>40%</span> in 1
      week
    </Typography>

    <Typography
      variant="body2"
      sx={{ fontSize: "13px", color: "grey", textAlign: "left" }}
    >
      See Statistics
    </Typography>
  </Card>
);

// Users and Companies Stats Cards
const StatsCard = ({ title, value }: { title: string; value: string }) => (
  <Card
    sx={{
      padding: 5,
      textAlign: "center",
      backgroundColor: "#022213",
      // boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Typography
      variant="h3"
      sx={{ fontSize: "2.5rem", fontWeight: 700, color: "#fff", mb: 2 }}
    >
      {value}
    </Typography>
    <Typography
      variant="subtitle2"
      sx={{ fontSize: "1rem", color: "#acdd33", fontWeight: 600 }}
    >
      {title}
    </Typography>
  </Card>
);

// Line chart component for month-wise lead
const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Lead Follow-up",
      data: [12, 19, 3, 5, 2, 3, 9],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Month Wise Lead",
      font: {
        size: 16,
        weight: "600",
      },
    },
  },
};

// Device limit circular progress component
const DeviceLimit = () => (
  <Card
    sx={{
      padding: 3,
      textAlign: "center",
      backgroundColor: "#e3f2fd",
      // boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Typography
      variant="subtitle1"
      sx={{ fontSize: "1.2rem", fontWeight: 600 }}
    >
      Device Limit
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "center", marginY: 2 }}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={21}
          size={80}
          thickness={4}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{ fontSize: "1.2rem", fontWeight: 500 }}
          >
            21%
          </Typography>
        </Box>
      </Box>
    </Box>
    <Typography variant="body2" sx={{ color: "#555", fontSize: "0.9rem" }}>
      Active Devices
    </Typography>
  </Card>
);

// Dashboard Layout
const Dashboard = () => {
  return (
    <Box>
      {/* <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex', flexDirection: 'column' }} >
          <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={9}>
            <CardContent sx={{ padding: 0 }}>
              <img src={"/images/backgrounds/dashImg.png"} alt="Ajmera Group" style={{ width: '100%', height: '100%', display: 'block' }} />
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mb: 2 }}>
              <Typography sx={{
                color: "#05CAED",
                fontWeight: "bold",
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
      </Grid> */}

      <Typography variant="h4" fontWeight={"500"}>
        Dashboard
      </Typography>

      <Grid container spacing={1} mt={3}>
        <Grid size={{ xs: 12, md: 9 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
              <DataCard1 title="Companies" value="12" backColor="#022213" />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <DataCard
                title=""
                value="120.000"
                backColor="#fff"
                trend={true}
                trendValue="+35"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <DataCard
                title=""
                value="30.00"
                backColor="#fff"
                trend={false}
                trendValue="-24"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <RecentTransactions />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} >
                  <MonthlyEarnings />
                  <Box>
                    <SalesOverview />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MonthWiseLeadChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
