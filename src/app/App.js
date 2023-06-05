import React, { Component } from "react";
import "./App.css";
import Typewriter from "../widgets/Typewriter";
import MoreInfo from "../shared/MoreInfo/MoreInfo";
import Popup from "../shared/Popup";

export default class App extends Component {
  state = {
    isPopupOpened: false,
  };

  componentDidMount() {
    const isPopupOpened = localStorage.getItem("isOpened");
    this.setState({ isPopupOpened });
  }

  handleStartButton = () => {
    this.setState({ isPopupOpened: true });
    localStorage.setItem("isOpened", true);
  };

  handleShowPopup = () => {
    this.setState({ isPopupOpened: false });
  };

  render() {
    console.log(
      "Спасибо, что зашел в консоль разработчика! Удачи тебе и хорошего дня :)"
    );
    return (
      <div className="app">
        <Popup
          handleStartButton={this.handleStartButton}
          isPopupOpened={this.state.isPopupOpened}
        />
        <MoreInfo handleShowPopup={this.handleShowPopup} />
        <Typewriter />
      </div>
    );
  }
}
