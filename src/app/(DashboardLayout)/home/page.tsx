"use client";
import { Card, Typography, Box, Stack, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RecentTransactions from "@/components/dashboard/RecentTransations";
import MonthlyEarnings from "@/components/dashboard/MonthlyEarning";
import SalesOverview from "@/components/dashboard/SalesOverview";
import { MonthWiseLeadChart } from "@/components/dashboard/PieChart";
import {
  IconDots,
  IconPointFilled,
  IconTrendingUp,
  IconTrendingDown,
} from "@tabler/icons-react";

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
      padding: 2.5,
      textAlign: "left",
      backgroundColor: backColor,
      border: "1px solid #ececec",
      borderRadius: "20px",
    }}
  >
    <Stack
      direction="row"
      sx={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      spacing={12}
    >
      <Typography>{title}</Typography>
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
      padding: 3,
      textAlign: "center",
      gap: 2,
      backgroundColor: backColor,
      // border: "1px solid #ededed",
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
      {title}
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

// Dashboard Layout
const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={"500"}>
        Dashboard
      </Typography>

      <Grid container spacing={3} mt={2}>
        {/* First row: 3 Data cards + MonthWiseLeadChart on the right */}
        <Grid size={{ xs: 12, md: 9 }} container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <DataCard1 title="Companies" value="12" backColor="#022213" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <DataCard
              title="Net Income"
              value="120,000"
              backColor="#fff"
              trend={true}
              trendValue="+35"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <DataCard
              title="Expenses"
              value="30,000"
              backColor="#fff"
              trend={false}
              trendValue="-24"
            />
          </Grid>

          {/* RecentTransactions and MonthlyEarnings should fit below the data cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <RecentTransactions />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid size={{ xs: 12, md: 12 }}>
              <MonthlyEarnings />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <SalesOverview />
            </Grid>
          </Grid>
        </Grid>

        {/* MonthWiseLeadChart on the right side */}
        <Grid size={{ xs: 12, md: 3 }}>
          <MonthWiseLeadChart />
        </Grid>

        {/* Sales Overview below Recent Transactions and Monthly Earnings */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
