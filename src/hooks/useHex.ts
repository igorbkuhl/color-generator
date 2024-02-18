import { useState } from "react";

export default function useHex() {
  const [hex, setHex] = useState(["00", "00", "00"]);
  const hexList: string[] = [];

  const rgbToHex = (rgb: number[]) => {
    for (let i = 0; i < 3; i++) {
      let number = rgb[i].toString(16);

      if (number.length === 1) {
        number = "0" + number;
      }

      hexList.push(number);
    }
    setHex(hexList);
  };

  return {
    hex,
    rgbToHex,
  };
}
