"use client";

import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { linearSrgbToOklab } from "oklab";
import Button from "./Button";
import ColorCode from "./ColorCode";

interface GeneratorProps {
  isExpanded: boolean;
  hex: string;
  rgb: string;
  hsl: string;
  hsv: string;
  cmyk: string;
  oklab: string;
}

const initialState = {
  isExpanded: false,
  hex: "#000000",
  rgb: "rgb(0, 0, 0)",
  hsl: "hsl(0º, 0%, 0%)",
  hsv: "hsv(0º, 0%, 0%)",
  cmyk: "cmyk(0%, 0%, 0%, 100%)",
  oklab: "oklab(0, 0, 0)",
};

export default class Generator extends Component {
  state = { ...initialState };

  constructor(props: GeneratorProps) {
    super(props);
  }

  newColor = () => {
    const rgb = this.generateRgb();

    this.generateHex(rgb);
    this.generateHsl(rgb);
    this.generateHsv(rgb);
    this.generateCmyk(rgb);
    this.generateOklab(rgb);
  };

  generateHex = (rgb: number[]) => {
    const hexList: string[] = [];
    let hex: string;

    for (let i = 0; i < 3; i++) {
      let number = rgb[i].toString(16);

      if (number.length == 1) {
        number = "0" + number;
      }

      hexList.push(number);
    }
    hex = "#" + hexList.join("");
    this.setState({ hex: hex }, () => {
      console.groupCollapsed(
        "%c" + this.state.hex,
        `background-color: ${this.state.hex};
        height: 5px;
        width: 5px;`
      );
      console.table(this.state);
      console.groupEnd();
    });
  };

  generateRgb = () => {
    const rgb = [
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
      Math.trunc(Math.random() * 256),
    ];
    this.setState({
      rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    });

    return rgb;
  };

  generateHsl = (rgb: number[]) => {
    const r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    const d = max - min;
    let h,
      s,
      l = (min + max) / 2;

    if (d === 0) {
      s = 0;
    } else {
      s = d / (1 - Math.abs(2 * l - 1));
    }

    if (d === 0) {
      h = 0;
    } else if (max === r) {
      h = ((((g - b) / d) % 6) + 6) % 6;
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else if (max === b) {
      h = (r - g) / d + 4;
    }
    h = Math.round(h !== undefined ? h * 60 : 0);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    this.setState({ hsl: `hsl(${h}º, ${s}%, ${l}%)` });
  };

  generateHsv = (rgb: number[]) => {
    const r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      v = max;

    const d = max - min;

    if (max == 0) {
      s = 0;
    } else {
      s = d / max;
    }

    if (max == min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h !== undefined ? (h = h / 6) : (h = 0);
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    v = Math.round(v * 100);

    this.setState({ hsv: `hsv(${h}º, ${s}%, ${v}%)` });
  };

  generateCmyk = (rgb: number[]) => {
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

    this.setState({ cmyk: `cmyk(${c}%, ${m}%, ${y}%, ${k}%)` });
  };

  generateOklab = (rgb: number[]) => {
    rgb[0] = rgb[0] / 255;
    rgb[1] = rgb[1] / 255;
    rgb[2] = rgb[2] / 255;
    const linearSrgb = { r: rgb[0], g: rgb[1], b: rgb[2] };
    const oklab = linearSrgbToOklab(linearSrgb);
    const l = oklab.L.toFixed(3),
      a = oklab.a.toFixed(3),
      b = oklab.b.toFixed(3);

    this.setState({ oklab: `oklab(${l}, ${a}, ${b})` });
  };

  render() {
    return (
      <div
        className="flex justify-center items-center h-screen w-screen"
        style={{
          backgroundColor: this.state.rgb,
        }}
      >
        <div className="flex flex-col w-64">
          <Button func={this.newColor} />
          <ColorCode>
            <div>
              {this.state.isExpanded ? (
                <>
                  <p>{this.state.hex}</p>
                  <p>{this.state.rgb}</p>
                  <p>{this.state.hsl}</p>
                  <p>{this.state.hsv}</p>
                  <p>{this.state.cmyk}</p>
                  <p>{this.state.oklab}</p>
                  <span
                    className="text-white/50"
                    onClick={() => this.setState({ isExpanded: false })}
                  >
                    Show less
                    <FontAwesomeIcon
                      className="px-2 align-center"
                      icon={faCaretUp}
                    />
                  </span>
                </>
              ) : (
                <>
                  <p>{this.state.hex}</p>
                  <span
                    className="text-white/50"
                    onClick={() => this.setState({ isExpanded: true })}
                  >
                    Show more
                    <FontAwesomeIcon
                      className="px-2 align-center"
                      icon={faCaretDown}
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
}
