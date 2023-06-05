import React, { Component } from "react";
import "./Typewriter.css";
import Dashboard from "../../widgets/Dashboard";
import Text from "../../entities/Text";
import { calculateAccuracy } from "../../features/handlers";
import Control from "../../shared/Control";

export default class Typewriter extends Component {
  intervalId;

  state = {
    text: "",
    speed: 0,
    allLetters: 0,
    typos: 0,
    sentences: 1,
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

  setText = (text) => {
    this.setState({ text });
  };

  addTypo = () => {
    const { typos } = this.state;
    this.setState({ typos: typos + 1 });
  };

  addSymbol = () => {
    const { allLetters } = this.state;
    this.setState({ allLetters: allLetters + 1 });
  };

  controlSentences = (dir) => {
    const { sentences } = this.state;

    if (
      (sentences === 1 && dir !== "more") ||
      (sentences === 10 && dir === "more")
    ) {
      return;
    }

    this.setState({
      sentences: dir === "more" ? sentences + 1 : sentences - 1,
    });
  };

  clearStats = () => {
    this.setState({ text: "", speed: 0, allLetters: 0, typos: 0 });
  };

  render() {
    const { speed, allLetters, typos, text, sentences } = this.state;

    return (
      <div className="typewriter">
        <Control
          sentences={sentences}
          controlSentences={this.controlSentences}
        />
        <Dashboard
          speed={speed}
          accuracy={calculateAccuracy(allLetters, typos)}
          typos={typos}
        />

        <Text
          text={text}
          sentences={sentences}
          allLetters={allLetters}
          clearStats={this.clearStats}
          addTypo={this.addTypo}
          addSymbol={this.addSymbol}
          setText={this.setText}
          startSpeedCalculating={this.startSpeedCalculating}
          stopSpeedCalculating={this.stopSpeedCalculating}
        />
      </div>
    );
  }
}
