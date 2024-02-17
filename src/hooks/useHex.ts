import { useState } from "react";

export default function useHex() {
  const [hex, setHex] = useState(["00", "00", "00"]);
  const hexList: string[] = [];

  const generateHex = () => {
    const randomList = [
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
    ];

    for (let i = 0; i < 3; i++) {
      let hexNumber = randomList[i].toString(16);

      if (hexNumber.length === 1) {
        hexNumber = "0" + hexNumber;
      }

      hexList.push(hexNumber);
    }
    setHex(hexList);
    return hexList;
  };
  return {
    hex,
    generateHex
  }
}

// export default function useHex() {
//   const [hex, setHex] = useState("");
//   const hexList: string[] = [];

//   const generateHex = (rgb: number[]) => {
//     for (let i = 0; i < 3; i++) {
//       let number = rgb[i].toString(16);

//       if (number.length === 1) {
//         number = "0" + number;
//       }

//       hexList.push(number);
//       console.log(rgb);
//       console.log(hexList);
//     }
//     setHex("#" + hexList.join(""));
//   };

//   return {
//     hex,
//     generateHex,
//   };
// }
