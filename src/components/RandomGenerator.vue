<script setup lang="ts">
import { ref } from "vue";
import GenerateButton from "./GenerateButton.vue";
import ColorCode from "./ColorCode.vue";
import { useRgbStore } from "../stores/rgbStore";
import { useHexStore } from "../stores/hexStore";
import { useHslStore } from "../stores/hslStore";
import { useHsvStore } from "../stores/hsvStore";
import { useCmykStore } from "../stores/cmykStore";
import { useOklabStore } from "../stores/oklabStore";

const rgb = useRgbStore();
const hex = useHexStore();
const hsl = useHslStore();
const hsv = useHsvStore();
const cmyk = useCmykStore();
const oklab = useOklabStore();

const isExpanded = ref(false);

const newColor = () => {
  const newRgb = rgb.generateRgb();
  hex.toHex(newRgb);
  hsl.toHsl(newRgb);
  hsv.toHsv(newRgb);
  cmyk.toCmyk(newRgb);
  oklab.toOklab(newRgb);

  console.groupCollapsed(
    "%c" + hex.fullHex,
    `background-color: ${hex.fullHex}`
  );
  console.table({
    hex: hex.fullHex,
    rgb: rgb.fullRgb,
    hsl: hsl.fullHsl,
    hsv: hsv.fullHsv,
    cmyk: cmyk.fullCmyk,
    oklab: oklab.fullOklab,
  });
  console.groupEnd();
};

const expandDetails = () => {
  isExpanded.value = !isExpanded.value;
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
        <div v-if="isExpanded">
          <p>{{ hex.fullHex }}</p>
          <p>{{ rgb.fullRgb }}</p>
          <p>{{ hsl.fullHsl }}</p>
          <p>{{ hsv.fullHsv }}</p>
          <p>{{ cmyk.fullCmyk }}</p>
          <p>{{ oklab.fullOklab }}</p>
          <span @click="expandDetails">
            Show less
            <i class="fa-solid fa-caret-up"></i>
          </span>
        </div>
        <div v-else>
          <p>{{ hex.fullHex }}</p>
          <span @click="expandDetails">
            Show more
            <i class="fa-solid fa-caret-down"></i>
          </span>
        </div>
      </ColorCode>
    </div>
  </div>
</template>
