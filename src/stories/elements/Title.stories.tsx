import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "@/components/elements/Title";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/elements/Title",
  component: Title,
  argTypes: {
    level: { control: { type: "range", min: 1, max: 6, step: 1 } },
    color: {
      options: ["red", "orange", "yellow", "green", "blue", "purple"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Title components",
  level: 1,
  color: "blue",
};
