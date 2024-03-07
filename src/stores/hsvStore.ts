import { defineStore } from "pinia";

export const useHsvStore = defineStore("hsv", {
  state: () => {
    return {
      hsvList: [] as number[],
      fullHsv: "hsv(0º, 0%, 0%)",
    };
  },
  actions: {
    toHsv(rgb: number[]) {
      const r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255;

      const max = Math.max(r, g, b),
        min = Math.min(r, g, b);

      let h,
        s,
        v = max;
      const d = max - min;

      if (max === 0) {
        s = 0;
      } else {
        s = d / max;
      }

      if (max === min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h !== undefined ? (h = h / 6) : (h = 0);
      }
      h = Math.round(h * 360);
      s = Math.round(s * 100);
      v = Math.round(v * 100);

      this.hsvList = [h, s, v];
      this.fullHsv = `hsv(${h}º, ${s}%, ${v}%)`;
    },
  },
});
