import React, { Component } from "react";
import "./App.css";
import Dashboard from "../widgets/dashboard";
import Text from "../entities/Text";
import getText from "../shared/api";
import { calculateAccuracy } from "../features/handlers";

export default class App extends Component {
  intervalId;

  state = {
    text: "",
    speed: 0,
    allLetters: 0,
    typos: 0,
  };

  pasteText = () => {
    getText().then((res) => {
      this.setState({ text: res[0] });
    });
  };

  handleInterval(start) {
    const elapsedInMinutes = (Date.now() - start) / 1000 / 60;

    this.setState({
      speed: Math.floor(this.state.allLetters / elapsedInMinutes),
    });
  }

  startSpeedCalculating = () => {
    const start = Date.now();

    this.intervalId = setInterval(() => {
      this.handleInterval(start);
    }, 1000);
  };

  stopSpeedCalculating = () => {
    clearInterval(this.intervalId);
  };

  addTypo = () => {
    const { typos } = this.state;
    this.setState({ typos: typos + 1 });
  };

  addSymbol = () => {
    const { allLetters } = this.state;
    this.setState({ allLetters: allLetters + 1 });
  };

  clearStats = () => {
    this.setState({ text: "", speed: 0, allLetters: 0, typos: 0 });
  };

  render() {
    const { speed, allLetters, typos, text } = this.state;

    return (
      <div className="app">
        <Dashboard
          speed={speed} //the last one
          accuracy={calculateAccuracy(allLetters, typos)}
          typos={typos}
        />
        <Text
          text={text}
          allLetters={allLetters}
          clearStats={this.clearStats}
          addTypo={this.addTypo}
          addSymbol={this.addSymbol}
          pasteText={this.pasteText}
          startSpeedCalculating={this.startSpeedCalculating}
          stopSpeedCalculating={this.stopSpeedCalculating}
        />
      </div>
    );
  }
}
