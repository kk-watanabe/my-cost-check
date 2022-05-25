import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartEvent, ActiveElement } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export type PieChartDataProps = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth?: number;
};

type PieChartProps = {
  data: {
    labels: string[];
    datasets: PieChartDataProps[];
  };
  onClick: (event: ChartEvent, elements: ActiveElement[], chart: ChartJS, data: ChartData) => void;
};

const PieChart = (props: PieChartProps) => {
  return (
    <Pie
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

export default PieChart;
