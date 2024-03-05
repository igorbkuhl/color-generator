<script setup lang="ts">
defineProps<{
  func: () => void;
}>()
</script>

<template>
  <button
    @click="func"
    class="text-white p-4 border-2 border-white rounded-md
    bg-slate-800/50 backdrop-blur-sm"
  >
    Generate
  </button>
</template>
