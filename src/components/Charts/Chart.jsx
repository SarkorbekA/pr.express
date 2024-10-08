"use client";
// components/LineChart.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const LineChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    // datasets: [
    //   {
    //     label: "Sales",
    //     data: chartData.data,
    //     fill: true,
    //     backgroundColor: "#216fcf32",
    //     borderColor: "#216FCF",
    //     borderWidth: 2,
    //     tension: 0.4,
    //   },
    // ],
    datasets: [
      {
        label: "Sales", // Birinchi chiziq (line)
        data: chartData.data, // Birinchi ma'lumotlar
        fill: true,
        backgroundColor: "#216fcf32",
        borderColor: "#216FCF",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: chartData.secondData,
        fill: true,
        borderColor: "#3ECD7E",
        backgroundColor: "#3ecd7e3b",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
