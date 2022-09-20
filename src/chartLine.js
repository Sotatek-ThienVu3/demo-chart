import React from "react";
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
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];

export const data = {
  labels: [1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 100, max: 9999 })),
      label: "Việt Nam",
      borderColor: "#3e95cd",
      backgroundColor: "#3e95cd",
      fill: false,
      tension: 0.3,
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 100, max: 9999 })),
      label: "Thái Lan",
      borderColor: "#8e5ea2",
      backgroundColor: "#8e5ea2",
      fill: false,
      tension: 0.3,
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 100, max: 9999 })),
      label: "Malaysia",
      borderColor: "#3cba9f",
      backgroundColor: "#3cba9f",
      fill: false,
      tension: 0.3,
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 100, max: 9999 })),
      label: "Singapore",
      borderColor: "#e8c3b9",
      backgroundColor: "#e8c3b9",
      fill: false,
      tension: 0.3,
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 100, max: 9999 })),
      label: "Cambodia",
      borderColor: "#c45850",
      backgroundColor: "#c45850",
      fill: false,
      tension: 0.3,
    },
  ],
};

export default function ChartLine() {
  return <Line options={options} data={data} />;
}
