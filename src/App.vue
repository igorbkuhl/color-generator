<script setup lang="ts">
import RandomGenerator from "./components/RandomGenerator.vue";
import { useRgbStore } from "./stores/rgbStore";

const rgb = useRgbStore();
const newRgb = rgb.generateRgb();
</script>

<template>
  <main>
    <RandomGenerator />
  </main>
</template>

<style scoped>
main {
  background-color: rgb(v-bind(newRgb));
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
