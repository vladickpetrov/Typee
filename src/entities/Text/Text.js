import React, { Component } from "react";
import "./Text.css";
import Completed from "../../shared/Completed";
import Current from "../../shared/Current";
import Future from "../../shared/Future";
import getText from "../../shared/api";

export default class Text extends Component {
  state = {
    text: "",
    position: 0,
    errorArray: [],
  };

  pasteText() {
    getText().then((res) => {
      this.setState({ text: res[0] });
    });
  }

  clearStats() {
    // logic to clear all stats
  }

  handleKeysDown = (evt) => {
    const { position, text } = this.state;
    // without russian letters, if in future you will need them, use regexp
    evt.preventDefault();

    // _______________________________________________________________________________

    const currentLetter = text[position];

    if (evt.key === "Backspace") {
      //logic for backspace
      if (position > 0) {
        this.setState({ position: position - 1 });
        console.log(currentLetter);
      }
    } else {
      if (evt.key === "Enter") {
        console.log("adsfhjkadjsfh");
        this.setState({ text: "", position: 0, errorArray: [] });
        this.pasteText();
        this.clearStats();
      }

      if (position === text.length) {
        // logic for ending writitng
        return;
      }

      if (evt.key.length > 1) {
        return;
      }

      if (evt.key === currentLetter) {
        const { errorArray } = this.state;
        const newArray = errorArray.filter((el) => el !== position);

        this.setState({ errorArray: newArray });
      } else {
        const { errorArray } = this.state;
        const newArray = errorArray.concat(position);

        this.setState({ errorArray: newArray });
      }

      this.setState({ position: position + 1 });
    }

    // _______________________________________________________________________________
  };

  componentDidMount() {
    this.pasteText();
    document.addEventListener("keydown", this.handleKeysDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeysDown);
  }

  render() {
    const { position, text } = this.state;
    return (
      <span className="text">
        <Completed
          completed={text.slice(0, position)}
          errors={this.state.errorArray}
        ></Completed>
        <Current current={text[position]}></Current>
        <Future future={text.slice(position + 1)}></Future>
      </span>
    );
  }
}
