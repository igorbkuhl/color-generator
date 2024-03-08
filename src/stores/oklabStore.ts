import { defineStore } from "pinia";
// @ts-ignore | second import might indicate an error
import { linearSrgbToOklab } from "oklab";

export const useOklabStore = defineStore("oklab", {
  state: () => {
    return {
      oklabList: [] as number[],
      fullOklab: "oklab(0, 0, 0)",
    };
  },
  actions: {
    toOklab(rgb: number[]) {
      const red = rgb[0] / 255,
        green = rgb[1] / 255,
        blue = rgb[2] / 255;

      const linearSrgb = { r: red, g: green, b: blue };
      const oklab = linearSrgbToOklab(linearSrgb);
      const l = oklab.L.toFixed(3),
        a = oklab.a.toFixed(3),
        b = oklab.b.toFixed(3);

      this.oklabList = [l, a, b];
      this.fullOklab = `oklab(${l}, ${a}, ${b})`;
    },
  },
});
