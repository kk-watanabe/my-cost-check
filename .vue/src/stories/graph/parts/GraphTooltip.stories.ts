import { GraphTooltipProps } from "@/types/Graphs";
import GraphTooltip from "@/components/graph/parts/GraphTooltip.vue";

export default {
  title: "graph/parts/GraphTooltip",
  component: GraphTooltip,
  argTypes: {
    count: { control: "number" },
    x: { control: "number" },
    y: { control: "number" },
  },
};

export const Default = (args: GraphTooltipProps) => ({
  components: { GraphTooltip },
  setup() {
    return { args };
  },
  template: `
    <svg width="100%" height="160px">
      <GraphTooltip v-bind="args" />
    </svg>
  `,
});

Default.args = {
  count: 9999,
  x: 100,
  y: 10,
};
