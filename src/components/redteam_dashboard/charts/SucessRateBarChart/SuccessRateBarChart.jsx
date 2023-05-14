import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// Chart.register(...registerables);

export default function SuccessRateBarChart({ data }) {
  const dataArray = Object.entries(data);
  const nodeIds = dataArray.map(([nodeId]) => nodeId);
  const nodeNames = dataArray.map(([, item]) => item.node_name);
  const successRates = dataArray.map(
    ([, item]) =>
      item.successfulCount / (item.successfulCount + item.failedCount)
  );

  // Chart data and options
  const chartData = {
    labels: nodeNames,
    datasets: [
      {
        label: "Success Rate",
        data: successRates,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value * 100 + "%", // Convert to percentage
          stepSize: 0.5,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Success Rate by Node",
        font: {
          size: 20,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => nodeIds[tooltipItems[0].dataIndex], // Show nodeId as title
        },
      },
    },
  };

  console.log(chartData);

  return <Bar data={chartData} options={options} />;
}
