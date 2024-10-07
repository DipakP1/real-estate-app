import React from 'react';
import { Card, Typography, Box, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../shared/DashboardCard';
import dynamic from "next/dynamic";
import Image from 'next/image';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WeatherCard = () => (
    <Card
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#E93B77",
            color: "#fff",
            padding: 2,
            marginTop: "-130px", // Removed negative margin
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative", // Ensure it’s not affected by other elements
        }}
    >
        <Box>
            <Typography variant="subtitle1" sx={{ fontSize: "12px", color: "#C7CCD0", fontWeight: 600 }}>
                Weather Today
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "14px", ml: 2 }}>
                New Delhi - 29°C
            </Typography>
        </Box>

        <Box>
            <Typography>
                <Image src="/images/logos/weater.png" alt="wheater" height={40} width={50} />
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#fff", fontSize: "14px", fontWeight: 500, }}>
                Sunny
            </Typography>
        </Box>

    </Card>
);

const SalesOverview = () => {

    // chart color
    const theme = useTheme();

    // chart options
    const optionscolumnchart: any = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: 'lightgrey',
            toolbar: {
                show: false,
            },
            height: 270,
        },
        colors: "black",
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '50%',
                columnWidth: '20%',
                borderRadius: [1],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },
        stroke: {
            show: true,
            width: 4,
            lineCap: "butt",
            colors: ["black"],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'grey',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 8,
        },
        xaxis: {
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: 'dark',
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart: any = [
        {
            name: 'Watts',
            data: [25, 30, 22, 32, 30, 26, 28],
        },
    ];

    return (
        // <Box mt={5} >
            <Card  sx={{ boxShadow: 3, mt:5, borderRadius: 2, position: 'relative', paddingTop: '70px', overflow: 'revert', height:"100%" }} elevation={9}>
                <CardContent>
                    <WeatherCard />
                    <Box height={"100%"}>
                        <Chart
                            options={optionscolumnchart}
                            series={seriescolumnchart}
                            type="bar"
                            height={"auto"}
                            width={"100%"}
                        />
                    </Box>
                </CardContent>
            </Card>
        // </Box>
    );
};

export default SalesOverview;
