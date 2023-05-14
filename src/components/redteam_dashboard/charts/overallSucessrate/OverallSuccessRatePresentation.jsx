import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function OverallSuccessRatePresentation(props) {
  const { sucessful, failed } = props.data;

  console.log("SRFRFRFRFRFRC");
  console.log(props.data);

  const chartData = {
    labels: ["Successful", "Failed"],
    datasets: [
      {
        label: "Success vs Failed",
        data: [sucessful, failed],
        backgroundColor: ["#36a2eb", "#ff6384"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Overall Success vs Failed",
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}
