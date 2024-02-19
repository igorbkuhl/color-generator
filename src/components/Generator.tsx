import { useState, useEffect } from "react";
import Button from "@/components/Button";
import ColorCode from "./ColorCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import useHex from "@/hooks/useHex";
import useRgb from "@/hooks/useRgb";
import useHsl from "@/hooks/useHsl";
import useHsv from "@/hooks/useHsv";
import useCmyk from "@/hooks/useCmyk";
import useOklab from "@/hooks/useOklab";

export default function Generator() {
  const { hex, rgbToHex } = useHex();
  const { rgb, generateRgb } = useRgb();
  const { hsl, rgbToHsl } = useHsl();
  const { hsv, rgbToHsv } = useHsv();
  const { cmyk, rgbToCmyk } = useCmyk();
  const { oklab,rgbToOklab } = useOklab();
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    hex: `#${hex[0]}${hex[1]}${hex[2]}`,
    rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    hsl: `hsl(${hsl[0]}º, ${hsl[1]}%, ${hsl[2]}%)`,
    hsv: `hsv(${hsv[0]}º, ${hsv[1]}%, ${hsv[2]}%)`,
    cmyk: `cmyk(${cmyk[0]}%, ${cmyk[1]}%, ${cmyk[2]}%, ${cmyk[3]}%)`,
    oklab: `oklab(${oklab[0]} ${oklab[1]} ${oklab[2]})`,
  };

  useEffect(() => {
    const newRgb = generateRgb();
    rgbToHex(newRgb);
    rgbToHsl(newRgb);
    rgbToHsv(newRgb);
    rgbToCmyk(newRgb);
    rgbToOklab(newRgb);
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
            rgbToOklab(newRgb);
            console.groupCollapsed(
              "%c" + colors.hex,
              `background-color: ${colors.hex}`
            );
            console.table(colors);
            console.groupEnd();
          }}
        />
        <ColorCode>
          <div>
            {isExpanded ? (
              <>
                <p>{colors.hex}</p>
                <p>{colors.rgb}</p>
                <p>{colors.hsl}</p>
                <p>{colors.hsv}</p>
                <p>{colors.cmyk}</p>
                <p>{colors.oklab}</p>
                <span
                  className="text-white/50"
                  onClick={() => setIsExpanded(false)}
                >
                  Show less
                  <FontAwesomeIcon
                    className="px-2 align-center"
                    icon={faCaretUp}
                    width="10"
                  />
                </span>
              </>
            ) : (
              <>
                <p>{colors.hex}</p>
                <span
                  className="text-white/50"
                  onClick={() => setIsExpanded(true)}
                >
                  Show more
                  <FontAwesomeIcon
                    className="px-2 align-center"
                    icon={faCaretDown}
                    width="10"
                  />
                </span>
              </>       
            )}
          </div>
        </ColorCode>
      </div>
    </div>
  );
}
