import React from "react";
import ReactApexChart from "react-apexcharts";

function ColumnChart() {
  const configChart = {
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33, 29, 34, 28, 26, 25],
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13, 15, 12, 16, 14, 15],
      },
    ],
    options: {
      chart: {
        type: "column",
        zoom: {
          enabled: false,
        },
        fontFamily: "Roboto",
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        offsetY: -6,
        background: false,
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 6,
        showNullDataPoints: false,
      },
      colors: ["#4096ff", "#545454"],
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
        padding: {
          left: 18,
          right: 18,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Otc",
          "Nov",
          "Dec",
        ],
      },
    },
  };
  return (
    <ReactApexChart
      options={configChart.options}
      series={configChart.series}
      height={350}
    />
  );
}

export default React.memo(ColumnChart);
