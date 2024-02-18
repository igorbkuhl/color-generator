import { useState } from "react";

export default function useRgb() {
  const [rgb, setRgb] = useState([0, 0, 0]);
  const rgbArray: number[] = [];

  const generateRgb = () => {
    rgbArray.push(
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
    );
    setRgb(rgbArray);
    return rgbArray;
  }

  return {
    rgb,
    generateRgb
  };
}
