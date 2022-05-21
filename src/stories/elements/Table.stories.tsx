import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "@/components/elements/Table";

export default {
  title: "components/elements/Table",
  component: Table,
  argTypes: {
    headColor: {
      options: ["red", "orange", "yellow", "green", "blue", "purple"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

const headData = [
  "名前を記載する",
  "サンプルテキスト1",
  "サンプルテキスト2",
  "サンプルテキスト3",
  "サンプルテキスト4",
  "サンプルテキスト5サンプルテキスト5",
  "サンプルテキスト6",
];

const bodyDataCells = ["名前A", 123000, 323000, 423000, 123000, 123000, 123000];
const bodyData = [bodyDataCells, bodyDataCells, bodyDataCells];

Default.args = {
  headColor: "blue",
  headData,
  bodyData,
};
