import { defineStore } from "pinia";

export const useRgbStore = defineStore("rgb", {
  state: () => {
    return {
      rgbArray: [0, 0, 0],
      fullRgb: "rgb(0, 0, 0)",
    };
  },
  actions: {
    generateRgb() {
      this.rgbArray = [
        Math.trunc(Math.random() * 256),
        Math.trunc(Math.random() * 256),
        Math.trunc(Math.random() * 256),
      ];
      this.fullRgb = `rgb(${this.rgbArray[0]}, ${this.rgbArray[1]}, ${this.rgbArray[2]})`;

      return this.rgbArray;
    },
  },
});
