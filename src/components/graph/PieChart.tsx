import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartEvent, ActiveElement } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartDataProps = {
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
  onClick: (event: ChartEvent, elements: ActiveElement[], chart: ChartJS) => void;
};

const PieChart = (props: PieChartProps) => {
  return (
    <Pie
      data={props.data}
      options={{
        responsive: true,
        onClick: (event, elements, chart) => props.onClick(event, elements, chart),
      }}
    />
  );
};

export default PieChart;
