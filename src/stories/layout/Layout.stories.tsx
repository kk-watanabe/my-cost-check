import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "@/components/layout/Layout";

export default {
  title: "components/layout/Layout",
  component: Layout,
  argTypes: {
    isHome: { control: "boolean" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <div>Sample text</div>
  </Layout>
);

export const Default = Template.bind({});

Default.args = {
  isHome: false,
};
