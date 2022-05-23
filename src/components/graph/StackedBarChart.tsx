import React from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ChartEvent, ActiveElement } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

type StackedBarChartDataProps = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth?: number;
};

type StackedBarChartProps = {
  data: {
    labels: string[];
    datasets: StackedBarChartDataProps[];
  };
  onClick: (event: ChartEvent, elements: ActiveElement[], chart: ChartJS) => void;
};

const StackedBarChart = (props: StackedBarChartProps) => {
  return (
    <Bar
      data={props.data}
      options={{
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        onClick: (event, elements, chart) => props.onClick(event, elements, chart),
      }}
    />
  );
};

export default StackedBarChart;
