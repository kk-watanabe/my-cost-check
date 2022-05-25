import React from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const StackedBarChart = (props: TotalChartProps) => {
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
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const { datasetIndex, index } = elements[0];
            const { data } = props;
            const result: ChartData = {
              datasetIndex,
              title: data.datasets[datasetIndex].label,
              label: data.labels[index],
              amount: data.datasets[datasetIndex].data[index],
            };
            props.onClick(result);
          }
        },
      }}
    />
  );
};

export default StackedBarChart;
