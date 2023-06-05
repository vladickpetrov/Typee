import React, { Component } from "react";
import "./Text.css";
import Completed from "../../shared/Completed";
import Current from "../../shared/Current";
import Future from "../../shared/Future";
import Loading from "../../shared/Loading";
import { applyAllKeyLogic } from "../../features/handlers";
import getText from "../../shared/api";
import Done from "../../shared/Done";

export default class Text extends Component {
  state = {
    position: 0,
    errorArray: [],
    isLoading: true,
    isEnd: false,
  };

  handleKeysDown = (evt) => {
    const handleLogic = applyAllKeyLogic.bind(this);
    handleLogic(evt);
  };

  pasteText = () => {
    this.setState({ isLoading: true });
    getText(this.props.sentences)
      .then((res) => {
        this.props.setText(res[0]);
      })
      .finally(() => {
        this.setState({ isLoading: false, isEnd: false });
      });
  };

  showFinale() {
    this.setState({ isEnd: true });
  }

  componentDidMount() {
    this.pasteText();
    document.addEventListener("keydown", this.handleKeysDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeysDown);
  }

  render() {
    const { position, isLoading, isEnd } = this.state;
    const { text } = this.props;

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <span className="text">
            <Completed
              completed={text.slice(0, position)}
              errors={this.state.errorArray}
            ></Completed>
            <Current current={text[position]}></Current>
            <Future future={text.slice(position + 1)}></Future>
          </span>
        )}
        {isEnd ? <Done /> : ""}
      </>
    );
  }
}
