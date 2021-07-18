<template>
  <div class="select-box">
    <select
      class="select-box__pulldown"
      :disabled="disabled"
      @change="onChange($event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="option.label === selectedLabel"
      >
        {{ option.label }}
      </option>
    </select>

    <div
      v-text="selectedLabel"
      class="select-box__label"
      :class="{ 'select-box__label--disabled': disabled }"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, PropType } from "vue";
import SelectOption from "@/types/atoms/SelectBox";

export default defineComponent({
  name: "SelectBox",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array as PropType<SelectOption[]>,
      required: true,
    },
    disabled: Boolean,
  },
  emits: ["change"],
  setup(props, context) {
    const state = reactive({
      value: props.modelValue,
    });

    const selectedLabel = computed(() => {
      const result = props.options.find(
        (o) => String(o.value) === String(state.value)
      );

      return result?.label;
    });

    const onChange = (value: string | number) => {
      state.value = value;
      context.emit("change", value);
    };

    return {
      selectedLabel,
      onChange,
    };
  },
});
</script>

<style scoped lang="scss">
.select-box {
  position: relative;
  display: inline-block;

  &__pulldown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $formPartSize;
    opacity: 0;
    cursor: pointer;
  }

  &__label {
    position: relative;
    overflow: hidden;
    padding-right: 26px;
    padding-left: 8px;
    height: $formPartSize;
    border: 1px solid $isColorBase6;
    border-radius: $borderRadius;
    background-color: $isColorWhite;
    color: $isColorBase9;
    text-align-last: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: $formPartSize;
    pointer-events: none;

    @include font-size(13);

    &::after {
      position: absolute;
      top: 50%;
      right: 8px;
      margin-top: -2px;
      border-top: 4px solid $isColorBase8;
      border-right: 5px solid $isColorClear;
      border-bottom: 4px solid $isColorClear;
      border-left: 5px solid $isColorClear;
      content: "";
    }

    &-disabled {
    }
  }
}
</style>
