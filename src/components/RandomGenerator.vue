<script setup lang="ts">
import GenerateButton from "./GenerateButton.vue";
import ColorCode from "./ColorCode.vue";
import { useRgbStore } from "../stores/rgbStore";

const rgb = useRgbStore();
</script>

<template>
  <div
    class="flex justify-center items-center h-screen"
    :style="{ 'background-color': rgb.fullRgb }"
  >
    <div class="flex flex-col w-72">
      <GenerateButton />
      <ColorCode :rgb="rgb.fullRgb" />
    </div>
  </div>
</template>
