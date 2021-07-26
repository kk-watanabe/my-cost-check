<template>
  <g id="tooltip" class="graph-tooltip" :transform="transform">
    <rect
      class="graph-tooltip__bg"
      ry="3"
      rx="3"
      :width="width"
      :height="state.height"
    />

    <text
      class="graph-tooltip__text"
      :dx="textX"
      :dy="state.textY"
      :font-size="state.fontSize"
    >
      {{ text }}
    </text>
  </g>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { FONT_SIZE, TOOLTIP_MIN_WIDTH } from "@/utils/graph-util";

export default defineComponent({
  name: "GraphTooltip",
  props: {
    count: {
      type: Number,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      fontSize: FONT_SIZE,
      height: FONT_SIZE + 8,
      textY: FONT_SIZE + 2,
    });

    const text = computed(() => {
      return props.count.toLocaleString();
    });

    const width = computed(() => {
      const digits = text.value.length;

      return digits > 3 ? (digits - 1) * state.fontSize : TOOLTIP_MIN_WIDTH;
    });

    const textX = computed(() => {
      return width.value / 2;
    });

    const transform = computed(() => {
      const x = props.x - width.value / 2;

      return `translate(${x}, ${props.y})`;
    });

    return {
      state,
      text,
      width,
      textX,
      transform,
    };
  },
});
</script>

<style scoped lang="scss">
.graph-tooltip {
  &__bg {
    fill: $isColorBase9;
  }

  &__text {
    text-anchor: middle;
    fill: $isColorWhite;
  }
}
</style>
