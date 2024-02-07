import { useState } from "react";

export default function useRgb() {
  const [rgb, setRgb] = useState("rgb(0, 0, 0)");

  function generateRgb() {
    const randomArray = [
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
    ];
    setRgb(`rgb(${randomArray[0]}, ${randomArray[1]}, ${randomArray[2]})`);
    return randomArray;
  }

  return {
    rgb,
    setRgb,
    generateRgb,
  };
}
