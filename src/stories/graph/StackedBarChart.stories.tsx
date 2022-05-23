import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StackedBarChart from "@/components/graph/StackedBarChart";

export default {
  title: "components/graph/StackedBarChart",
  component: StackedBarChart,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof StackedBarChart>;

const Template: ComponentStory<typeof StackedBarChart> = (args) => <StackedBarChart {...args} />;

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
    data: [10000, 13300, 4000, 6300, 4700, 9000, 12300],
    backgroundColor: "rgba(75, 192, 192, 0.5)",
    borderColor: "rgb(75, 192, 192)",
  },
  {
    label: "○○カードC",
    data: [1500, 1300, 3000, 3300, 2700, 4500, 6300],
    backgroundColor: "rgba(53, 162, 235, 0.5)",
    borderColor: "rgb(53, 162, 235)",
  },
];

Default.args = {
  data: {
    labels,
    datasets,
  },
};
