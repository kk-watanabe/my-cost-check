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

export type LineChartDataProps = {
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
  onClick: (event: ChartEvent, elements: ActiveElement[], chart: ChartJS, data: ChartData) => void;
};

const LineChart = (props: LineChartProps) => {
  return (
    <Line
      data={props.data}
      options={{
        responsive: true,
        onClick: (event, elements, chart) => {
          if (elements.length > 0) {
            const { datasetIndex, index } = elements[0];
            const { data } = props;
            const result: ChartData = {
              datasetIndex,
              title: data.datasets[datasetIndex].label,
              label: data.labels[index],
              amount: data.datasets[datasetIndex].data[index],
            };
            props.onClick(event, elements, chart, result);
          }
        },
      }}
    />
  );
};

export default LineChart;
