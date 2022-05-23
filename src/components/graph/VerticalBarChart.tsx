import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
};

const VerticalBarChart = (props: VerticalBarChartProps) => {
  return <Bar data={props} options={options} />;
};

export default VerticalBarChart;
