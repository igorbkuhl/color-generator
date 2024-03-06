import { defineStore } from "pinia";

export const useHslStore = defineStore("hsl", {
  state: () => {
    return {
      hslList: [] as number[],
      fullHsl: "hsl(0º, 0%, 0%)",
    };
  },
  actions: {
    toHsl(rgb: number[]) {
      const r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255;
      const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      const d = max - min;
      let h,
        s,
        l = (min + max) / 2;

      if (d === 0) {
        s = 0;
      } else {
        s = d / (1 - Math.abs(2 * l - 1));
      }

      if (d === 0) {
        h = 0;
      } else if (max === r) {
        h = ((((g - b) / d) % 6) + 6) % 6;
      } else if (max === g) {
        h = (b - r) / d + 2;
      } else if (max === b) {
        h = (r - g) / d + 4;
      }

      h = Math.round(h !== undefined ? h * 60 : 0);
      s = Math.round(s !== undefined ? s * 100 : 0);
      l = Math.round(l * 100);

      this.hslList = [h, s, l];
      this.fullHsl = `hsl(${h}º, ${s}%, ${l}%)`;
    },
  },
});
