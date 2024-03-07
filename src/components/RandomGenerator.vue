<script setup lang="ts">
import GenerateButton from "./GenerateButton.vue";
import ColorCode from "./ColorCode.vue";
import { useRgbStore } from "../stores/rgbStore";
import { useHexStore } from "../stores/hexStore";
import { useHslStore } from "../stores/hslStore";
import { useHsvStore } from "../stores/hsvStore";

const rgb = useRgbStore();
const hex = useHexStore();
const hsl = useHslStore();
const hsv = useHsvStore();

const newColor = () => {
  const newRgb = rgb.generateRgb();
  hex.toHex(newRgb);
  hsl.toHsl(newRgb);
  hsv.toHsv(newRgb)
};
</script>

<template>
  <div
    class="flex justify-center items-center h-screen"
    :style="{ 'background-color': rgb.fullRgb }"
  >
    <div class="flex flex-col w-72">
      <GenerateButton :func="newColor" />
      <ColorCode>
        <p>{{ hex.fullHex }}</p>
        <p>{{ rgb.fullRgb }}</p>
        <p>{{ hsl.fullHsl }}</p>
        <p>{{ hsv.fullHsv }}</p>
      </ColorCode>
    </div>
  </div>
</template>
