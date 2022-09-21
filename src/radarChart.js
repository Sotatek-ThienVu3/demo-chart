import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Distribution in % of world population",
    },
  },
};

export const data = {
  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
  datasets: [
    {
      label: "1900",
      fill: true,
      backgroundColor: "rgba(255,99,132,0.3)",
      borderColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(179,181,198,1)",
      data: [8.77, 55.61, 21.69, 36.62, 6.82],
    },
    {
      label: "1950",
      fill: true,
      backgroundColor: "rgba(177, 68, 147,0.2)",
      borderColor: "rgb(177, 68, 147)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      data: [55.48, 54.16, 7.61, 8.06, 4.45],
    },
    {
      label: "2050",
      fill: true,
      backgroundColor: "rgba(69, 255, 147,0.2)",
      borderColor: "rgb(69, 255, 147)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      data: [3.48, 2.16, 67.61, 8.06, 55.45],
    },
  ],
};

export default function RadarChart() {
  return <Radar options={options} data={data} />;
}
