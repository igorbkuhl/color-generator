"use client";

import { Component } from "react";
import Button from "./Button";
import ColorCode from "./ColorCode";

interface GeneratorProps {
  currentHex: string;
  currentRgb: string;
}

const initialState = {
  currentRgb: "#000000",
  currentHex: "rgb(0, 0, 0)",
};

export default class Generator extends Component {
  state = { ...initialState };

  constructor(props: GeneratorProps) {
    super(props);
    this.generateRgb = this.generateRgb.bind(this);
    this.generateHex = this.generateHex.bind(this);
  }

  generateHex(array: number[]) {
    let hexList: string[] = [];
    let hex: string;

    for (let i = 0; i < 3; i++) {
      let number = array[i].toString(16);
      number.length == 1 ? number = `0${number}` : number

      hexList.push(`${number}`)
    }
    hex = `#${hexList.join('')}`;
    this.setState({ currentHex: hex });
    console.log(`%c${this.state.currentHex} | ${this.state.currentRgb}`,
    `background-color: ${this.state.currentHex}`,
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
    return rgb;
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
          </ColorCode>
        </div>
      </div>
    );
  }
}
