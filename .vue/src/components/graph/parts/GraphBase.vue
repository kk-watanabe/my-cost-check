<template>
  <svg
    id="graphBase"
    class="graph-base"
    :width="state.graphWidth"
    :height="state.graphHeight"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
  >
    <path
      v-if="showTargetLine"
      :d="targetLinePath"
      class="graph-base__target-line"
    />

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
  GRAPH_WIDTH,
  GRAPH_HEIGHT,
  Y_AXIS_WIDTH,
  GRAPH_VIEW_HEIGHT,
  NUMBER_OF_Y_AXIS,
  FONT_SIZE,
  VIEW_MARGIN,
} from "@/utils/graph-util";

export default defineComponent({
  name: "GraphBase",
  props: {
    upperLimit: {
      type: Number,
      required: true,
    },
    targetValue: Number,
  },
  setup(props) {
    const state = reactive({
      graphWidth: GRAPH_WIDTH,
      graphHeight: GRAPH_HEIGHT,
      yAxisWidth: Y_AXIS_WIDTH,
      fontSize: FONT_SIZE,
    });

    const getPath = (y: number): string => {
      return `M ${state.yAxisWidth} ${y} H ${state.graphWidth}`;
    };

    const showTargetLine = computed(() => {
      return props.targetValue !== undefined;
    });

    const targetLinePath = computed(() => {
      const percent = props.targetValue
        ? 1 - props.targetValue / props.upperLimit
        : 0;
      const value = Math.floor(GRAPH_VIEW_HEIGHT * percent);
      const margin = getYAxisY(yAxisData.value.length - 1);

      return getPath(value + margin);
    });

    const yAxisData = computed(() => {
      const result = [0];

      for (let i = 0; i < NUMBER_OF_Y_AXIS; i++) {
        const index = i + 1;
        const value = Math.floor(0.1 * index * 10) / 10;

        result.push(props.upperLimit * value);
      }

      return result;
    });

    const baselinePath = computed(() => {
      return getPath(GRAPH_VIEW_HEIGHT);
    });

    const getYAxisY = (index: number): number => {
      const margin = GRAPH_VIEW_HEIGHT / yAxisData.value.length;

      return Math.floor(GRAPH_VIEW_HEIGHT - margin * index);
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
      showTargetLine,
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
    stroke: $isSiteColor4;
    stroke-width: 1;
  }

  &__axis-text {
    fill: $isColorBase6;
  }

  &__y-axis-line {
    stroke: $isColorBase2;
    stroke-width: 1;
  }

  &__y-axis-text {
    text-anchor: end;
  }

  &__baseline {
    stroke: $isColorBase6;
    stroke-width: 1;
  }
}
</style>
