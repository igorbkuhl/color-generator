import { Component } from "react";
import Button from "./Button";
import ColorCode from "./ColorCode";

interface GeneratorProps {
  isCode: boolean;
  currentColor: string;
  currentRgb: string;
  currentHex: string;
}

const initialState = {
  isCode: true,
  currentColor: "rgb(24, 24, 24)",
  currentRgb: "",
  currentHex: "",
};

export default class Generator extends Component {
  state = { ...initialState };

  constructor(props: GeneratorProps) {
    super(props);
    this.newColor = this.newColor.bind(this);
    this.generateRgb = this.generateRgb.bind(this);
    this.generateHex = this.generateHex.bind(this);
  }

  newColor() {
    let newColor = this.generateRgb;
    return newColor;
  }

  generateHex(array: number[]) {
    let hexList: string[] = [];
    let hex: string;

    for (let i = 0; i <= 2; i++) {
      let firstNum = Math.trunc(array[i] / 16);
      let secondNum = Math.trunc(array[i] % 16);
      let x: string;
      let y: string;

      switch (firstNum) {
        case 10:
          x = "a";
          break;
        case 11:
          x = "b";
          break;
        case 12:
          x = "c";
          break;
        case 13:
          x = "d";
          break;
        case 14:
          x = "e";
          break;
        case 15:
          x = "f";
          break;
        default:
          x = `${firstNum}`;
      }
      switch (secondNum) {
        case 10:
          y = ("a");
          break;
        case 11:
          y = "b";
          break;
        case 12:
          y = "c";
          break;
        case 13:
          y = "d";
          break;
        case 14:
          y = "e";
          break;
        case 15:
          y = "f";
          break;
        default:
          y = `${secondNum}`;
      }

      hexList.push(`${x}${y}`)
    }
    hex = `#${hexList.join('')}`;
    this.setState({ currentHex: hex });
    console.log(`%c${this.state.currentHex}`,
    `color: ${this.state.currentHex}`
    );
  }

  generateRgb() {
    let rgb = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.setState({
      currentColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
      currentRgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    });
    console.log(this.generateHex(rgb));
    console.log(
      `%c${this.state.currentRgb}`,
      `color: ${this.state.currentRgb}`
    );
    return rgb;
  }

  render() {
    return (
      <div
        className="flex justify-center items-center h-screen w-screen"
        style={{
          backgroundColor: `${this.state.currentColor}`,
        }}
      >
        <div className="flex flex-col">
          <Button func={this.generateRgb} />
          <ColorCode
            isCode={this.state.isCode}
            currentColor={this.state.currentRgb}
          />
          <ColorCode
            isCode={this.state.isCode}
            currentColor={this.state.currentHex}
          />
        </div>
      </div>
    );
  }
}
