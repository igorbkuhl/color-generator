import { useState, useEffect } from "react";

export default function useRandColor() {


  function generateColor() {
    let rgb = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];

    let newColor = `rgb(${rgb})`;
    return newColor;
  }
  
  let newColor = generateColor();
  let colorList = {
    nColor: newColor
  };

  return {
    generateColor,
    newColor,
    colorList
  };
}
