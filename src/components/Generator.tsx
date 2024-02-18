import { useEffect } from "react";
import useHex from "@/hooks/useHex";
import useRgb from "@/hooks/useRgb";
import useHsl from "@/hooks/useHsl";
import Button from "@/components/Button";
import ColorCode from "./ColorCode";

export default function Generator() {
  const { hex, rgbToHex } = useHex();
  const { rgb, generateRgb } = useRgb();
  const { hsl, rgbToHsl } = useHsl();
  const colors = {
    hex: `#${hex[0]}${hex[1]}${hex[2]}`,
    rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    hsl: `hsl(${hsl[0]}º, ${hsl[1]}%, ${hsl[2]}%)`,
  };

  useEffect(() => {
    const newRgb = generateRgb();
    rgbToHex(newRgb);
    rgbToHsl(newRgb);
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
            console.groupCollapsed(
              "%c" + colors.hex,
              `background-color: ${colors.hex}`
            );
            console.table(colors);
            console.groupEnd();
          }}
        />
        <ColorCode hex={colors.hex} rgb={colors.rgb} hsl={colors.hsl} />
      </div>
    </div>
  );
}
