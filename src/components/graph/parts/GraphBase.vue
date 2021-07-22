<template>
  <svg
    id="graphBase"
    class="graph-base"
    :width="graphWidth"
    :height="graphHeight"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
  >
    <path :d="targetLinePath" class="graph-base__target-line" />

    <g id="yAxis">
      <template v-for="(data, i) in yAxisData" :key="'yAxisText' + i">
        <text
          :y="yAxisTextY(i)"
          :x="yAxisTextX"
          class="graph-base__axis-text graph-base__y-axis-text"
          :font-size="state.fontSize"
        >
          {{ data }}
        </text>

        <path
          v-if="i !== 0"
          :d="yAxisLine(i)"
          class="graph-base__y-axis-line"
        />
      </template>
    </g>

    <slot />

    <path :d="baselinePath" class="graph-base__baseline" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import {
  Y_AXIS_WIDTH,
  X_AXIS_HEIGHT,
  FONT_SIZE,
  VIEW_MARGIN,
  START_MARGIN,
} from "@/types/graph/parts/GraphBase";

export default defineComponent({
  name: "GraphBase",
  props: {
    upperLimit: {
      type: Number,
      required: true,
    },
    targetValue: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      yAxisWidth: Y_AXIS_WIDTH,
      fontSize: FONT_SIZE,
    });

    const graphWidth = computed(() => {
      return 640;
    });

    const graphHeight = computed(() => {
      return 396;
    });

    const viewHeight = computed(() => {
      return graphHeight.value - X_AXIS_HEIGHT;
    });

    const getPath = (y: number): string => {
      return `M ${state.yAxisWidth} ${y} H ${graphWidth.value}`;
    };

    const targetLinePath = computed(() => {
      const percent = 1 - props.targetValue / props.upperLimit;
      const value = Math.floor(viewHeight.value * percent);
      const margin = getYAxisY(yAxisData.value.length - 1);

      return getPath(value + margin);
    });

    const yAxisData = computed(() => {
      const result = [0];

      for (let i = 0; i < 10; i++) {
        const index = i + 1;
        const value = Math.floor(0.1 * index * 10) / 10;

        result.push(props.upperLimit * value);
      }

      return result;
    });

    const baselinePath = computed(() => {
      return getPath(viewHeight.value);
    });

    const getYAxisY = (index: number): number => {
      const margin = viewHeight.value / yAxisData.value.length;

      return Math.floor(viewHeight.value - margin * index);
    };

    const yAxisTextY = (index: number): number => {
      return getYAxisY(index) + state.fontSize / 2 - 2;
    };

    const yAxisLine = (index: number): string => {
      const y = getYAxisY(index);

      return getPath(y);
    };

    const yAxisTextX = computed(() => {
      return state.yAxisWidth - VIEW_MARGIN;
    });

    return {
      state,
      graphWidth,
      graphHeight,
      targetLinePath,
      yAxisData,
      baselinePath,
      yAxisTextX,
      yAxisTextY,
      yAxisLine,
    };
  },
});
</script>

<style scoped lang="scss">
.graph-base {
  &__target-line {
    stroke: $isSiteColor8;
    stroke-width: 1;
  }

  &__axis-text {
    fill: $isColorBase6;
  }

  &__y-axis-line {
    stroke: $isColorBase4;
    stroke-width: 1;
  }

  &__y-axis-text {
    text-anchor: end;
  }

  &__x-axis-text {
    text-anchor: end;
  }

  &__baseline {
    stroke: $isColorBase7;
    stroke-width: 1;
  }
}
</style>
