import SelectOption, { SelectBoxProps } from "@/types/atoms/SelectBox";
import SelectBox from "@/components/atoms/SelectBox.vue";

const OPTIONS: SelectOption[] = [
  {
    label: "label1",
    value: 1,
  },
  {
    label: "label2 label2",
    value: 2,
  },
  {
    label: "label3 label3",
    value: 3,
  },
  {
    label: "label4 label4",
    value: 4,
  },
];

export default {
  title: "Atoms/SelectBox",
  component: SelectBox,
  argTypes: {
    disabled: { control: "boolean" },
    onChange: {},
  },
};

export const Default = (args: SelectBoxProps) => ({
  components: { SelectBox },
  setup() {
    return {
      args,
    };
  },
  template: `
    <SelectBox
      v-bind="args"
    />`,
});

Default.args = {
  modelValue: OPTIONS[2].value,
  options: OPTIONS,
  disabled: false,
};
