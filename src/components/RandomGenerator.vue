<script setup lang="ts">
import GenerateButton from "./GenerateButton.vue";
import ColorCode from "./ColorCode.vue";
import { useRgbStore } from "../stores/rgbStore";
import { useHexStore } from "../stores/hexStore";

const rgb = useRgbStore();
const hex = useHexStore();

const newColor = () => {
  const newRgb = rgb.generateRgb();
  hex.toHex(newRgb)
}
</script>

<template>
  <div
    class="flex justify-center items-center h-screen"
    :style="{ 'background-color': rgb.fullRgb }"
  >
    <div class="flex flex-col w-72">
      <GenerateButton :func="newColor" />
      <ColorCode :rgb="rgb.fullRgb" :hex="hex.fullHex" />
    </div>
  </div>
</template>
