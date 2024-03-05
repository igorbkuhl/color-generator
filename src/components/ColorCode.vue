<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ColorCode",
  props: {
    hex: String,
    rgb: String,
  },
});
</script>

<template>
  <div class="bg-slate-800/50 backdrop-blur-sm
  mt-2 p-5 rounded-md text-center"
  >
    <p>{{ $props.hex }}</p>
    <p>{{ $props.rgb }}</p>
  </div>
</template>
