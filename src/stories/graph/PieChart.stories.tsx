import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PieChart from "@/components/graph/PieChart";

export default {
  title: "components/graph/PieChart",
  component: PieChart,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => <PieChart {...args} />;

export const Default = Template.bind({});

const labels = ["2020/08", "2020/09", "2020/10", "2020/11", "2020/12", "2021/01"];
const datasets = [
  {
    label: "",
    data: [12300, 23300, 10000, 8300, 15700, 19000],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
    borderWidth: 1,
  },
];

Default.args = {
  data: {
    labels,
    datasets,
  },
};
