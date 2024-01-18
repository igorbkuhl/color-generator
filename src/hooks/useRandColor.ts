import { useState, useEffect } from "react";

export default function useRandColor() {

  let newColor = generateColor();
  const [color, setColor] = useState(newColor);
  const [isCode, setIsCode] = useState(true);

  useEffect(() => {
    changeColor();
  }, [])
  
  function generateColor() {
    let rgb = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    return `rgb(${rgb})`
  }

  function changeColor() {
    setColor(newColor)
    console.log(color)
  }

  return {
    setColor,
    color,
    newColor,
    generateColor,
    changeColor,
    isCode,
    setIsCode
  };
}
