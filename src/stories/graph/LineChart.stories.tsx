import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LineChart from "@/components/graph/LineChart";

export default {
  title: "components/graph/LineChart",
  component: LineChart,
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => <LineChart {...args} />;

export const Default = Template.bind({});

const labels = ["2020/08", "2020/09", "2020/10", "2020/11", "2020/12", "2021/01", "2021/02"];
const datasets = [
  {
    label: "○○カードA",
    data: [12300, 23300, 10000, 8300, 15700, 19000, 22300],
    backgroundColor: "rgba(255, 99, 132, 0.5)",
    borderColor: "rgb(255, 99, 132)",
  },
  {
    label: "○○カードB",
    data: [2300, 3300, 1000, 800, 5700, 1400, 5900],
    backgroundColor: "rgba(53, 162, 235, 0.5)",
    borderColor: "rgb(53, 162, 235)",
  },
];

Default.args = {
  labels,
  datasets,
};
