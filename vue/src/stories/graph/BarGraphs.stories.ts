import { BarGraphsProps, XAxisData } from "@/types/Graphs";
import BarGraphs from "@/components/graph/BarGraphs.vue";

export default {
  title: "graph/BarGraphs",
  component: BarGraphs,
  argTypes: {
    targetValue: { control: "number" },
  },
};

export const Default = (args: BarGraphsProps) => ({
  components: { BarGraphs },
  setup() {
    return { args };
  },
  template: `
    <BarGraphs v-bind="args" />
  `,
});

const X_AXIS_DATA: XAxisData[] = [
  {
    count: 3456,
    label: "A銀行",
  },
  {
    count: 1234,
    label: "B銀行",
  },
  {
    count: 5693,
    label: "Cクレジットカード",
  },
  {
    count: 6704,
    label: "Dデビットカード",
  },
  {
    count: 1000,
    label: "E払い",
  },
  {
    count: 5903,
    label: "F銀行",
  },
  {
    count: 3456,
    label: "G銀行",
  },
  {
    count: 7900,
    label: "Hクレジットカード",
  },
  {
    count: 900,
    label: "Iデビットカード",
  },
  {
    count: 3999,
    label: "J払い",
  },
];

Default.args = {
  xAxisData: X_AXIS_DATA,
  targetValue: 7650,
};
