import Panel from "@/components/atoms/Panel.vue";

export default {
  title: "Atoms/Panel",
  component: Panel,
};

export const Default = () => ({
  components: { Panel },
  template: "<Panel>Default slot</Panel>",
});
