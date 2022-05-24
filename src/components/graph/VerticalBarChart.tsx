import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ActiveElement,
  ChartEvent,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export type VerticalBarChartDataProps = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
};

type VerticalBarChartProps = {
  data: {
    labels: string[];
    datasets: VerticalBarChartDataProps[];
  };
  onClick: (event: ChartEvent, elements: ActiveElement[], chart: ChartJS, data: CostDate) => void;
};

const VerticalBarChart = (props: VerticalBarChartProps) => {
  const chartRef = useRef(null);

  return (
    <Bar
      ref={chartRef}
      data={props.data}
      options={{
        responsive: true,
        onClick: (event, elements, chart) => {
          if (elements.length > 0) {
            const { datasetIndex, index } = elements[0];
            const data: CostDate = {
              label: props.data.labels[index],
              amount: props.data.datasets[datasetIndex].data[index],
            };
            props.onClick(event, elements, chart, data);
          }
        },
      }}
    />
  );
};

export default VerticalBarChart;
