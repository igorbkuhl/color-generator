import { defineStore } from "pinia";

export const useCmykStore = defineStore("cmyk", {
  state: () => {
    return {
      cmykList: [] as number[],
      fullCmyk: "cmyk(0%, 0%, 0%, 0%)",
    };
  },
  actions: {
    toCmyk(rgb: number[]) {
      let c = 1 - rgb[0] / 255,
        m = 1 - rgb[1] / 255,
        y = 1 - rgb[2] / 255,
        k = Math.min(c, Math.min(m, y));

      c = (c - k) / (1 - k);
      m = (m - k) / (1 - k);
      y = (y - k) / (1 - k);

      c = Math.round(c * 100);
      m = Math.round(m * 100);
      y = Math.round(y * 100);
      k = Math.round(k * 100);

      this.cmykList = [c, m, y, k];
      this.fullCmyk = `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
    },
  },
});
