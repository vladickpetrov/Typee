import React, { Component } from "react";
import "./App.css";
import Typewriter from "../widgets/Typewriter";

export default class App extends Component {
  render() {
    console.log(
      "Спасибо, что зашел в консоль разработчика! Удачи тебе и хорошего дня :)"
    );
    return (
      <>
        <Typewriter />
      </>
    );
  }
}
