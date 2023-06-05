import React, { Component } from "react";
import "./Text.css";
import Completed from "../../shared/Completed";
import Current from "../../shared/Current";
import Future from "../../shared/Future";
import { applyAllKeyLogic } from "../../features/handlers";

export default class Text extends Component {
  state = {
    position: 0,
    errorArray: [],
  };

  handleKeysDown = (evt) => {
    evt.preventDefault();
    const handleLogic = applyAllKeyLogic.bind(this);

    handleLogic(evt);
  };

  componentDidMount() {
    this.props.pasteText();
    document.addEventListener("keydown", this.handleKeysDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeysDown);
  }

  render() {
    const { position } = this.state;
    const { text } = this.props;

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
