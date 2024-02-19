import { useState } from "react";
import { linearSrgbToOklab } from "oklab";

export default function useOklab() {
  const [oklab, setOklab] = useState([0, 0, 0]);

  const rgbToOklab = (rgb: number[]) => {
    const red = rgb[0] / 255,
      green = rgb[1] / 255,
      blue = rgb[2] / 255;

    const linearSrgb = { r: red, g: green, b: blue };
    const oklab = linearSrgbToOklab(linearSrgb);
    const l = oklab.L.toFixed(3),
      a = oklab.a.toFixed(3),
      b = oklab.b.toFixed(3);

    setOklab([l, a, b]);
  };
  return {
    oklab,
    rgbToOklab,
  };
}
