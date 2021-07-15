<template>
  <div class="panel"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Panel",
});
</script>

<style scoped lang="scss">
.panel {
  padding: 30px;
  border-radius: $borderRadiusLarge;
  background-color: $isColorWhite;
  box-shadow: 1px 1px 5px rgba($isColorBase5, 0.5);
  line-height: 1;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 5px rgba($isColorBase5, 0.6);
  }
}
</style>
