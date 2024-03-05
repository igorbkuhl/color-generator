import { defineStore } from "pinia";

export const useHexStore = defineStore("hex", {
  state: () => {
    return {
      hexList: [] as string[],
      fullHex: "#000000",
    };
  },
  actions: {
    toHex(rgb: number[]) {
      this.hexList = [];
      for (let i = 0; i < 3; i++) {
        let number = rgb[i].toString(16);

        if (number.length === 1) {
          number = "0" + number;
        }

        this.hexList.push(number);
      }
      this.fullHex = "#" + this.hexList.join("");
    },
  },
});
