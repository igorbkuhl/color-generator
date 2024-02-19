import { useEffect } from "react";
import Button from "@/components/Button";
import ColorCode from "./ColorCode";
import useHex from "@/hooks/useHex";
import useRgb from "@/hooks/useRgb";
import useHsl from "@/hooks/useHsl";
import useHsv from "@/hooks/useHsv";
import useCmyk from "@/hooks/useCmyk";

export default function Generator() {
  const { hex, rgbToHex } = useHex();
  const { rgb, generateRgb } = useRgb();
  const { hsl, rgbToHsl } = useHsl();
  const { hsv, rgbToHsv } = useHsv();
  const { cmyk, rgbToCmyk } = useCmyk();

  const colors = {
    hex: `#${hex[0]}${hex[1]}${hex[2]}`,
    rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    hsl: `hsl(${hsl[0]}º, ${hsl[1]}%, ${hsl[2]}%)`,
    hsv: `hsv(${hsv[0]}º, ${hsv[1]}%, ${hsv[2]}%)`,
    cmyk: `cmyk(${cmyk[0]}%, ${cmyk[1]}%, ${cmyk[2]}%, ${cmyk[3]}%)`,
  };

  useEffect(() => {
    const newRgb = generateRgb();
    rgbToHex(newRgb);
    rgbToHsl(newRgb);
    rgbToHsv(newRgb);
    rgbToCmyk(newRgb);
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor: colors.hex,
      }}
    >
      <div className="flex flex-col w-72">
        <Button
          func={() => {
            const newRgb = generateRgb();
            rgbToHex(newRgb);
            rgbToHsl(newRgb);
            rgbToHsv(newRgb);
            rgbToCmyk(newRgb);
            console.groupCollapsed(
              "%c" + colors.hex,
              `background-color: ${colors.hex}`
            );
            console.table(colors);
            console.groupEnd();
          }}
        />
        <ColorCode
          hex={colors.hex}
          rgb={colors.rgb}
          hsl={colors.hsl}
          hsv={colors.hsv}
          cmyk={colors.cmyk}
        />
      </div>
    </div>
  );
}
