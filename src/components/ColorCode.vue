<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ColorCode",
});
</script>

<template>
  <div class="bg-slate-800/50 backdrop-blur-sm
  mt-2 p-5 rounded-md text-center"
  >
    <slot></slot>
  </div>
</template>
