import { GraphBaseProps } from "@/types/graph/parts/GraphBase";
import GraphBase from "@/components/graph/parts/GraphBase.vue";

export default {
  title: "graph/parts/GraphBase",
  component: GraphBase,
  argTypes: {
    upperLimit: { control: "number" },
    targetValue: { control: "number" },
  },
};

export const Default = (args: GraphBaseProps) => ({
  components: { GraphBase },
  setup() {
    return { args };
  },
  template: `
    <GraphBase v-bind="args" />
  `,
});

Default.args = {
  upperLimit: 10000,
  targetValue: 8694,
  xAxisData: [
    "A銀行",
    "B銀行",
    "Cクレジットカード",
    "Dデビットカード",
    "E払い",
    "F銀行",
    "G銀行",
    "Hクレジットカード",
    "Iデビットカード",
    "J払い",
  ],
};
