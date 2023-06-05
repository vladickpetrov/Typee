import React, { Component } from "react";
import "./App.css";
import Dashboard from "../widgets/dashboard";
import Text from "../entities/Text";

export default class App extends Component {
  state = {
    speed: 0,
    accuracy: 100,
    typos: 0,
  };

  render() {
    const { speed, accuracy, typos } = this.state;

    return (
      <div className="app">
        <Dashboard speed={speed} accuracy={accuracy} typos={typos} />
        <Text />
      </div>
    );
  }
}
