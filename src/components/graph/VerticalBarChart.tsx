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

type VerticalBarChartDataProps = {
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
  onClick: (event: ChartEvent, elements: ActiveElement[], chart: ChartJS) => void;
};

const VerticalBarChart = (props: VerticalBarChartProps) => {
  const chartRef = useRef(null);

  return (
    <Bar
      ref={chartRef}
      data={props.data}
      options={{
        responsive: true,
        onClick: (event, elements, chart) => props.onClick(event, elements, chart),
      }}
    />
  );
};

export default VerticalBarChart;
