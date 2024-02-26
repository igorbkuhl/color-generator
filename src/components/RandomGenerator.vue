<script setup lang="ts">
import GenerateButton from './GenerateButton.vue';
import ColorCode from './ColorCode.vue';
</script>

<template>
  <div class="main">
    <GenerateButton />
    <ColorCode hex="a" />
  </div>
</template>

<style scoped>
.main {
  width: 25em;
  height: 18em;
}
</style>
