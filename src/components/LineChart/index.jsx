import React from "react";
import ReactApexChart from "react-apexcharts";

function LineChart({ series }) {
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
        "28/04",
        "29/04",
        "30/04",
        "01/05",
        "02/05",
        "03/05",
        "04/05",
      ],
    },
  };

  return (
    <ReactApexChart
      options={configChart}
      series={series}
      height={350}
      type="line"
    />
  );
}

export default React.memo(LineChart);
