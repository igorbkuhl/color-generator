<script setup lang="ts">
import { useRgbStore } from "../stores/rgbStore";

let rgb = useRgbStore();
</script>

<template>
  <button
    @click="rgb.generateRgb()"
    class="text-white p-4 border-2 border-white rounded-md
    bg-slate-800/50 backdrop-blur-sm"
  >
    Generate
  </button>
</template>
