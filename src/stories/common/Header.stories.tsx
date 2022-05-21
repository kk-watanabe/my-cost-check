import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "@/components/common/Header";

export default {
  title: "components/common/Header",
  component: Header,
  argTypes: {
    isHome: { control: "boolean" },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  isHome: false,
};
