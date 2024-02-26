<script setup lang="ts">
defineProps<{ hex: string }>()
</script>

<template>
  <p>{{ hex }}</p>
</template>

<style scoped>
p {
  text-align: center;
}
</style>