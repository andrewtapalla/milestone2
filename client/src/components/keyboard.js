import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../App.css";
import { compAnswer, sourcey } from "./board";

export class KeyboardWindow extends Component {
  
  state = {
    layoutName: "default",
    input: "",
  };

  onChange = (input) => {
    this.setState({ input });
    this.target = input;
  };

  onKeyPress = (button) => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();

    if (button === "replay") {
      window.location.reload(false);
    }

    if (button === "{enter}") {
      if (this.target === compAnswer) {
        console.log(alert(this.target + " win"));
      } else {
        console.log("LOSER");
      }
    }
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };

  onChangeInput = (event) => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  };

  setActiveInput = (inputName) => {
    this.setState(
      {
        inputName: inputName,
        keyboardOpen: true,
      },
      () => {
        console.log("Active input", inputName);
      }
    );
  };

  closeKeyboard = () => {
    this.setState({
      keyboardOpen: false,
    });
  };

  render() {
    return (
      <div>
        <onWin />
        <input
          onFocus={() => this.setActiveInput("")}
          value={this.state.input}
          placeholder={"Guess here"}
          onChange={this.onChangeInput}
        />
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          theme={"hg-theme-default hg-layout-default myTheme"}
          layoutName={this.state.layoutName}
          layout={{
            default: [
              "Q W E R T Y U I O P replay",
              "A S D F G H J K L {enter}",
              "Z X C V B N M {backspace}",
              "{space}",
            ],
          }}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
      </div>
    );
  }
}

