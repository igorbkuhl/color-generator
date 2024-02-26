import { defineStore } from "pinia";

export const useRgbStore = defineStore('rgb', {
  state: () => {
    return {
      rgb: [0, 0, 0],
      rgbArray: [] as number[]
    }
  },
  actions: {
    generateRgb() {
      this.rgbArray = [
        Math.trunc(Math.random() * 256),
        Math.trunc(Math.random() * 256),
        Math.trunc(Math.random() * 256),
      ]
      this.rgb = this.rgbArray
      return this.rgbArray
    }
  }
})