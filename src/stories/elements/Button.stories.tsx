import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@/components/elements/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/elements/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary", "error", "warning", "normal"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    isDisabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Button",
  color: "primary",
  size: "medium",
  isDisabled: false,
  fullWidth: false,
};
