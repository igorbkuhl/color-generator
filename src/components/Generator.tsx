"use client";

import { Component } from "react";
import Button from "./Button";
import ColorCode from "./ColorCode";

interface GeneratorProps {
  currentHex: string;
  currentRgb: string;
  currentCmyk: string;
}

const initialState = {
  currentHex: "#000000",
  currentRgb: "rgb(0, 0, 0)",
  currentCmyk: "cmyk(0%, 0%, 0%, 100%)"
};

export default class Generator extends Component {
  state = { ...initialState };

  constructor(props: GeneratorProps) {
    super(props);
    this.generateHex = this.generateHex.bind(this);
    this.generateRgb = this.generateRgb.bind(this);
    this.generateCmyk = this.generateCmyk.bind(this);
  }

  generateHex(rgb: number[]) {
    let hexList: string[] = [];
    let hex: string;

    for (let i = 0; i < 3; i++) {
      let number = rgb[i].toString(16);
      number.length == 1 ? (number = `0${number}`) : number;

      hexList.push(`${number}`);
    }
    hex = `#${hexList.join("")}`;
    this.setState({
      currentHex: hex },
      () => console.log(
        `%c${this.state.currentHex} | ${this.state.currentRgb} | ${this.state.currentCmyk}`,
        `background-color: ${this.state.currentHex};
        height: 5px;
        width: 5px;`
      )
    );
    
  }

  generateRgb() {
    let rgb = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.setState({
      currentRgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    });
    this.generateHex(rgb);
    this.generateCmyk(rgb);
    return rgb;
  }

  generateCmyk(rgb: number[]) {
    let c = 1 - (rgb[0] / 255),
        m = 1 - (rgb[1] / 255),
        y = 1 - (rgb[2] / 255),
        k = Math.min(c, Math.min(m, y));

        c = (c - k) / (1 - k);
        m = (m - k) / (1 - k);
        y = (y - k) / (1 - k);

        c = Math.round((c * 10000) / 100);
        m = Math.round((m * 10000) / 100);
        y = Math.round((y * 10000) / 100);
        k = Math.round((k * 10000) / 100);

    this.setState({ currentCmyk: `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`})
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
            <p>{this.state.currentCmyk}</p>
          </ColorCode>
        </div>
      </div>
    );
  }
}
