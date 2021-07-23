import { GraphBarProps } from "@/types/Graphs";
import GraphBar from "@/components/graph/parts/GraphBar.vue";

const INDEX_OPTION = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default {
  title: "graph/parts/GraphBar",
  component: GraphBar,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    x: { control: "number" },
    y: { control: "number" },
    index: { type: "select", options: INDEX_OPTION },
    onClick: {},
    onMouseEnter: {},
    onMouseLeave: {},
  },
};

export const Default = (args: GraphBarProps) => ({
  components: { GraphBar },
  setup() {
    return { args };
  },
  template: `
    <svg width="100%" height="160px">
      <GraphBar v-bind="args" @mouseenter="args.onMouseEnter" @mouseleave="args.onMouseLeave" />
    </svg>
  `,
});

Default.args = {
  width: 10,
  height: 100,
  x: 50,
  y: 60,
  index: INDEX_OPTION[0],
};
