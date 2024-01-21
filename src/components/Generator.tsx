import { Component } from "react";

const initialState = {
  isCode: true,
  colors: ["", ""],
  currentColor: "rgb(255, 100, 72)"
}

export default class Generator extends Component {

  state = { ...initialState }

  constructor(props: any) {
    super(props)
    this.generateColor = this.generateColor.bind(this)
  }

  generateColor() {
    let rgb = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    ];
    console.log(this.state.currentColor)
    this.setState({ currentColor: `rgb(${rgb})` })
  }
  
  render() {
    return (
      <div className="flex justify-center items-center h-screen w-screen"
        style={{
          backgroundColor: `${this.state.currentColor}`,
        }}
      >
        <div className="flex flex-col">
          <button
            onClick={this.generateColor}
            className="
            text-white p-4 border-2 border-white rounded-md
            bg-slate-800/50 backdrop-blur-sm"
          >
            Generate
          </button>
          <p className="bg-slate-800/50 backdrop-blur-sm
            mt-2 p-5 rounded-md">
            {this.state.isCode ? this.state.currentColor : "Invalid color."}
          </p>
        </div>
      </div>
    );
  }
}
