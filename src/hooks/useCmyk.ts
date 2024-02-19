import { useState } from "react";

export default function useCmyk() {
  const [cmyk, setCmyk] = useState([0, 0, 0, 0]);

  const rgbToCmyk = (rgb: number[]) => {
    let c = 1 - rgb[0] / 255,
      m = 1 - rgb[1] / 255,
      y = 1 - rgb[2] / 255,
      k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    c = Math.round((c * 10000) / 100);
    m = Math.round((m * 10000) / 100);
    y = Math.round((y * 10000) / 100);
    k = Math.round((k * 10000) / 100);

    setCmyk([c, m, y, k]);
  };
  return {
    cmyk,
    rgbToCmyk,
  };
}
