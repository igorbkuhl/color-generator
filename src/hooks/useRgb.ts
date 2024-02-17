import { useState } from "react";

export default function useRgb() {
  const [rgb, setRgb] = useState([0, 0, 0]);
  const rgbArray: number[] = [];

  const hexToRgb = (hex: string[]) => {
    for (let i = 0; i < 3; i++) {
      const rgbNumber = parseInt(hex[i], 16);
      rgbArray.push(rgbNumber);
    }
    setRgb(rgbArray);
  }

  return {
    rgb,
    hexToRgb
  }
}


// export default function useRgb() {
//   const [rgb, setRgb] = useState([0, 0, 0]);
//   let rgbArray: number[] = [];

//   const generateRgb = () => {
//     rgbArray = [
//       Math.trunc(Math.random() * 256),
//       Math.trunc(Math.random() * 256),
//       Math.trunc(Math.random() * 256),
//     ]
//     setRgb(rgbArray);
//   }

//   return {
//     rgb,
//     setRgb,
//     rgbArray,
//     generateRgb
//   };
// }
