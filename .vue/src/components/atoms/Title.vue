<template>
  <div class="title" v-text="label" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    label: String,
  },
});
</script>

<style scoped lang="scss">
.title {
  color: $isSiteColor6;
  font-weight: bold;
  line-height: 1.3;

  @include font-size(32);
}
</style>
