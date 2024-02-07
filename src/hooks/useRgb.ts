import { useState } from "react";

export default function useRgb() {

  const [rgb, setRgb] = useState("rgb(0, 0, 0)");
  
  function generateRgb() {
    const rgbArray = [
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256)
    ];
    const fullRgb = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`
    setRgb(fullRgb);
    console.log(rgb);
  }

  return {
    rgb,
    generateRgb
  };
}
