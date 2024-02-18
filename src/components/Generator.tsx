import { useEffect } from "react";
import useRgb from "@/hooks/useRgb";
import useHex from "@/hooks/useHex";
import Button from "@/components/Button";
import ColorCode from "./ColorCode";

export default function Generator() {
  const { hex, rgbToHex } = useHex();
  const { rgb, generateRgb } = useRgb();
  const colors = {
    hex: `#${hex[0]}${hex[1]}${hex[2]}`,
    rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
  }

  useEffect(() => {
    const newRgb = generateRgb();
    rgbToHex(newRgb);
  }, [])

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor: colors.hex,
      }}
    >
      <div className="flex flex-col w-72">
        <Button func={() => {
          const newRgb = generateRgb();
          rgbToHex(newRgb);
          console.groupCollapsed(
            "%c" + colors.hex,
            `background-color: ${colors.hex}`
          )
          console.table(colors)
          console.groupEnd();
        }} />
        <ColorCode
          hex={colors.hex}
          rgb={colors.rgb}
        />
      </div>
    </div>
  );
}
