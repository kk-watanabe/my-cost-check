import { TitleProps } from "@/types/atoms/Title";
import Title from "@/components/atoms/Title.vue";

export default {
  title: "Atoms/Title",
  component: Title,
  argTypes: {
    label: { control: "text" },
  },
};

export const Default = (args: TitleProps) => ({
  components: { Title },
  setup() {
    return { args };
  },
  template: '<Title v-bind="args" />',
});

Default.args = {
  label: "Smaple Title",
};
