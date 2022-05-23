import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

type LineChartDataProps = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
};

type LineChartProps = {
  data: {
    labels: string[];
    datasets: LineChartDataProps[];
  };
  onClick: (event: ChartEvent, elements: ActiveElement[], chart: ChartJS) => void;
};

const LineChart = (props: LineChartProps) => {
  return (
    <Line
      data={props.data}
      options={{
        responsive: true,
        onClick: (event, elements, chart) => props.onClick(event, elements, chart),
      }}
    />
  );
};

export default LineChart;
