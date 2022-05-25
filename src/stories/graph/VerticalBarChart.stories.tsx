import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import VerticalBarChart from "@/components/graph/VerticalBarChart";

export default {
  title: "components/graph/VerticalBarChart",
  component: VerticalBarChart,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof VerticalBarChart>;

const Template: ComponentStory<typeof VerticalBarChart> = (args) => <VerticalBarChart {...args} />;

export const Default = Template.bind({});

const labels = ["2020/08", "2020/09", "2020/10", "2020/11", "2020/12", "2021/01", "2021/02"];
const datasets = [
  {
    label: "○○カードA",
    data: [12300, 23300, 10000, 8300, 15700, 19000, 22300],
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
];

Default.args = {
  data: {
    labels,
    datasets,
  },
};
