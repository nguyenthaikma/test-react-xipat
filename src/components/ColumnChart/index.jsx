import React from "react";
import ReactApexChart from "react-apexcharts";

function ColumnChart({ series }) {
  const configChart = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      fontFamily: "Roboto",
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: 0,
      background: false,
      color: "#fff",
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
  };

  return (
    <ReactApexChart
      options={configChart}
      series={series}
      height={350}
      type="bar"
    />
  );
}

export default React.memo(ColumnChart);
