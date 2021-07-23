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
      <g v-if="state.showTooltip" id="tooltip" :transform="tooltipTransform">
        <rect
          class="bar-graphs__tooltip-bg"
          ry="3"
          rx="3"
          :width="state.tooltipWidtth"
          :height="state.tooltipHeight"
        />

        <text
          class="bar-graphs__tooltip"
          :dx="state.tooltipTextX"
          :dy="state.tooltipTextY"
          :font-size="state.fontSize"
        >
          {{ state.tooltipLabel }}
        </text>
      </g>
    </transition>
  </GraphBase>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from "vue";
import {
  GRAPH_VIEW_WIDTH,
  GRAPH_VIEW_HEIGHT,
  X_START_POSITON,
  NUMBER_OF_Y_AXIS,
  BAR_HEIGHT,
  VIEW_MARGIN,
  FONT_SIZE,
  XAxisData,
} from "@/types/Graphs";
import GraphBase from "@/components/graph/parts/GraphBase.vue";
import GraphBar from "@/components/graph/parts/GraphBar.vue";

export default defineComponent({
  name: "BarGraphs",
  components: {
    GraphBase,
    GraphBar,
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
      tooltipLabel: "",
      tooltipY: 0,
      tooltipX: 0,
      tooltipWidtth: 0,
      tooltipHeight: FONT_SIZE + 8,
      tooltipTextY: FONT_SIZE + 2,
      tooltipTextX: 0,
    });

    const upperLimit = computed(() => {
      const counts = props.xAxisData.map((data) => data.count);
      const max = Math.max(...counts);
      const result = (n: number) =>
        ((m) => m * Math.round(n / m))(10 ** (`${n}`.length - 1));

      return result(max);
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
      const margin =
        GRAPH_VIEW_WIDTH / props.xAxisData.length - state.barWidth / 2;
      const result = X_START_POSITON + margin * index;

      return result;
    };

    const y = (count: number): number => {
      return GRAPH_VIEW_HEIGHT - height(count);
    };

    const textX = (index: number): number => {
      return x(index) + state.barWidth / 2;
    };

    const viewLabels = (label: string): string[] => {
      const labels = label.match(/(.{1,3})$|.{3}/g);

      if (labels === null) {
        return [label];
      }

      return labels;
    };

    const tspanY = (index: number): number => {
      return state.textY + state.fontSize * index;
    };

    const onMouseEnter = (count: number, index: number) => {
      state.showTooltip = true;
      state.tooltipLabel = `￥${count.toLocaleString()}`;
      state.tooltipY = y(count) - 10;
      state.tooltipX = textX(index);
      state.tooltipWidtth = (state.tooltipLabel.length - 1) * state.fontSize;
      state.tooltipTextX = state.tooltipWidtth / 2;
    };

    const onMouseLeave = () => {
      state.showTooltip = false;
      state.tooltipLabel = "";
      state.tooltipY = 0;
      state.tooltipX = 0;
      state.tooltipWidtth = 0;
      state.tooltipTextX = 0;
    };

    const tooltipTransform = computed(() => {
      const x = state.tooltipX - state.tooltipWidtth / 2;

      return `translate(${x}, ${state.tooltipY})`;
    });

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
      tooltipTransform,
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
