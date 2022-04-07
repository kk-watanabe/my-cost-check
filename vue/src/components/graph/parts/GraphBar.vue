<template>
  <rect
    class="graph-bar"
    :class="[`graph-bar--color${index}`]"
    :width="width"
    :height="height"
    :x="x"
    :y="y"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GraphBar",
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
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
    index: {
      type: Number,
      required: true,
    },
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(_, context) {
    const onClick = () => {
      context.emit("click");
    };

    const onMouseEnter = () => {
      context.emit("mouseenter");
    };

    const onMouseLeave = () => {
      context.emit("mouseleave");
    };

    return {
      onClick,
      onMouseEnter,
      onMouseLeave,
    };
  },
});
</script>

<style scoped lang="scss">
.graph-bar {
  cursor: pointer;
  transition: fill 0.3s ease;

  &--color0 {
    fill: $isGraphColor1;

    &:hover {
      fill: darken($isGraphColor1, 15%);
    }
  }

  &--color1 {
    fill: $isGraphColor11;

    &:hover {
      fill: darken($isGraphColor11, 15%);
    }
  }

  &--color2 {
    fill: $isGraphColor10;

    &:hover {
      fill: darken($isGraphColor10, 15%);
    }
  }

  &--color3 {
    fill: $isGraphColor9;

    &:hover {
      fill: darken($isGraphColor9, 15%);
    }
  }

  &--color4 {
    fill: $isGraphColor8;

    &:hover {
      fill: darken($isGraphColor8, 15%);
    }
  }

  &--color5 {
    fill: $isGraphColor7;

    &:hover {
      fill: darken($isGraphColor7, 15%);
    }
  }

  &--color6 {
    fill: $isGraphColor6;

    &:hover {
      fill: darken($isGraphColor6, 15%);
    }
  }

  &--color7 {
    fill: $isGraphColor5;

    &:hover {
      fill: darken($isGraphColor5, 15%);
    }
  }

  &--color8 {
    fill: $isGraphColor4;

    &:hover {
      fill: darken($isGraphColor4, 15%);
    }
  }

  &--color9 {
    fill: $isGraphColor3;

    &:hover {
      fill: darken($isGraphColor3, 15%);
    }
  }

  &--color10 {
    fill: $isGraphColor2;

    &:hover {
      fill: darken($isGraphColor2, 15%);
    }
  }
}
</style>
