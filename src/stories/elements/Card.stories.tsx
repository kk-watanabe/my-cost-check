import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "@/components/elements/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/elements/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <div style={{ height: "300px", width: "450px", backgroundColor: "#EEE" }}>Card components</div>
  </Card>
);

export const Default = Template.bind({});

Default.args = {};
