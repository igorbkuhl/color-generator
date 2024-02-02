"use client";

import { Component } from "react";
import { linearSrgbToOklab } from "oklab";
import Button from "./Button";
import ColorCode from "./ColorCode";

interface GeneratorProps {
  currentHex: string;
  currentRgb: string;
  currentHsv: string;
  currentCmyk: string;
  currentOklab: string;
}

const initialState = {
  currentHex: "#000000",
  currentRgb: "rgb(0, 0, 0)",
  currentHsv: "hsv(0º, 0%, 0%)",
  currentCmyk: "cmyk(0%, 0%, 0%, 100%)",
  currentOklab: "oklab(0, 0, 0)",
};

export default class Generator extends Component {
  state = { ...initialState };

  constructor(props: GeneratorProps) {
    super(props);
    this.generateHex = this.generateHex.bind(this);
    this.generateRgb = this.generateRgb.bind(this);
    this.generateHsv = this.generateHsv.bind(this);
    this.generateCmyk = this.generateCmyk.bind(this);
    this.generateOklab = this.generateOklab.bind(this);
  }

  generateHex(rgb: number[]) {
    const hexList: string[] = [];
    let hex: string;

    for (let i = 0; i < 3; i++) {
      let number = rgb[i].toString(16);
      number.length == 1 ? (number = `0${number}`) : number;

      hexList.push(`${number}`);
    }
    hex = `#${hexList.join("")}`;
    this.setState(
      {
        currentHex: hex,
      },
      () =>
        console.log(
          `%c${this.state.currentHex} | ${this.state.currentRgb} | ${this.state.currentCmyk}`,
          `background-color: ${this.state.currentHex};
        height: 5px;
        width: 5px;`
        )
    );
  }

  generateRgb() {
    const rgb = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    this.setState({
      currentRgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    });
    this.generateHex(rgb);
    this.generateHsv(rgb);
    this.generateCmyk(rgb);
    this.generateOklab(rgb);
    return rgb;
  }

  generateHsv(rgb: number[]) {
    const r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      v = max;

    const d = max - min;
    s = max == 0 ? 0 : d / max;

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

    this.setState({ currentHsv: `hsv(${h}º, ${s}%, ${v}%)` }, () => {
      console.log(h, s, v)
    }
    );
  }

  generateCmyk(rgb: number[]) {
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

    this.setState({ currentCmyk: `cmyk(${c}%, ${m}%, ${y}%, ${k}%)` });
  }

  generateOklab(rgb: number[]) {
    rgb[0] = rgb[0] / 255;
    rgb[1] = rgb[1] / 255;
    rgb[2] = rgb[2] / 255;
    const linearSrgb = { r: rgb[0], g: rgb[1], b: rgb[2] };
    const oklab = linearSrgbToOklab(linearSrgb);
    const l = oklab.L.toFixed(3),
      a = oklab.a.toFixed(3),
      b = oklab.b.toFixed(3);

    this.setState({ currentOklab: `oklab(${l}, ${a}, ${b})` });
  }

  render() {
    return (
      <div
        className="flex justify-center items-center h-screen w-screen"
        style={{
          backgroundColor: `${this.state.currentRgb}`,
        }}
      >
        <div className="flex flex-col">
          <Button func={this.generateRgb} />
          <ColorCode>
            <p>{this.state.currentHex}</p>
            <p>{this.state.currentRgb}</p>
            <p>{this.state.currentHsv}</p>
            <p>{this.state.currentCmyk}</p>
            <p>{this.state.currentOklab}</p>
          </ColorCode>
        </div>
      </div>
    );
  }
}
