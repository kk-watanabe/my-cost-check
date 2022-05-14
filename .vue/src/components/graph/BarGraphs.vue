<template>
  <GraphBase
    class="bar-graphs"
    :upperLimit="upperLimit"
    :targetValue="targetValue"
  >
    <g id="xAxis">
      <template v-for="(data, i) in xAxisData" :key="i">
        <GraphBar
          :width="state.barWidth"
          :height="height(data.count)"
          :x="x(i)"
          :y="y(data.count)"
          :index="i"
          @mouseenter="onMouseEnter(data.count, i)"
          @mouseleave="onMouseLeave"
        />

        <text
          class="bar-graphs__text"
          :x="textX(i)"
          :y="state.textY"
          :font-size="state.fontSize"
        >
          <tspan
            v-for="(label, index) in viewLabels(data.label)"
            :y="tspanY(index)"
            :x="textX(i)"
            :key="index"
          >
            {{ label }}
          </tspan>
        </text>
      </template>
    </g>

    <transition name="fade">
      <GraphTooltip
        v-if="state.showTooltip"
        :count="state.tooltipCount"
        :x="state.tooltipX"
        :y="state.tooltipY"
      />
    </transition>
  </GraphBase>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from "vue";
import { XAxisData } from "@/types/Graphs";
import {
  GRAPH_VIEW_HEIGHT,
  NUMBER_OF_Y_AXIS,
  BAR_HEIGHT,
  VIEW_MARGIN,
  FONT_SIZE,
  getUpperLimit,
  getXMargin,
  getXAxisX,
  getXAxisTextX,
  getXAxisTexts,
  getTspanY,
} from "@/utils/graph-util";
import GraphBase from "@/components/graph/parts/GraphBase.vue";
import GraphBar from "@/components/graph/parts/GraphBar.vue";
import GraphTooltip from "@/components/graph/parts/GraphTooltip.vue";

export default defineComponent({
  name: "BarGraphs",
  components: {
    GraphBase,
    GraphBar,
    GraphTooltip,
  },
  props: {
    xAxisData: {
      type: Array as PropType<XAxisData[]>,
      required: true,
    },
    targetValue: Number,
  },
  setup(props) {
    const state = reactive({
      barWidth: BAR_HEIGHT,
      textY: GRAPH_VIEW_HEIGHT + VIEW_MARGIN + FONT_SIZE,
      fontSize: FONT_SIZE,
      showTooltip: false,
      tooltipCount: 0,
      tooltipY: 0,
      tooltipX: 0,
    });

    const upperLimit = computed(() => {
      const counts = props.xAxisData.map((data) => data.count);

      return getUpperLimit(counts);
    });

    const yStartPotion = computed(() => {
      return GRAPH_VIEW_HEIGHT / NUMBER_OF_Y_AXIS;
    });

    const height = (count: number): number => {
      const percent = count / upperLimit.value;
      const viewHeight = GRAPH_VIEW_HEIGHT - yStartPotion.value;
      const result = Math.floor(viewHeight * percent);

      return result;
    };

    const x = (index: number): number => {
      const margin = getXMargin(props.xAxisData.length, state.barWidth);

      return getXAxisX(margin, index);
    };

    const y = (count: number): number => {
      return GRAPH_VIEW_HEIGHT - height(count);
    };

    const textX = (index: number): number => {
      const xAxisX = x(index);

      return getXAxisTextX(xAxisX, state.barWidth);
    };

    const viewLabels = (label: string): string[] => {
      return getXAxisTexts(label);
    };

    const tspanY = (index: number): number => {
      return getTspanY(state.textY, index);
    };

    const onMouseEnter = (count: number, index: number) => {
      state.showTooltip = true;
      state.tooltipCount = count;
      state.tooltipY = y(count) - 10;
      state.tooltipX = textX(index);
    };

    const onMouseLeave = () => {
      state.showTooltip = false;
      state.tooltipCount = 0;
      state.tooltipY = 0;
      state.tooltipX = 0;
    };

    return {
      state,
      upperLimit,
      height,
      x,
      y,
      textX,
      viewLabels,
      tspanY,
      onMouseEnter,
      onMouseLeave,
    };
  },
});
</script>

<style scoped lang="scss">
.bar-graphs {
  &__text {
    text-anchor: middle;
    fill: $isColorBase6;
  }

  &__tooltip {
    text-anchor: middle;
    fill: $isColorWhite;

    &-bg {
      fill: $isColorBase9;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
