import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from "@/components/common/Loading";

export default {
  title: "components/common/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
