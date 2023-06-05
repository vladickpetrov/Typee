function applyAllKeyLogic(evt) {
  evt.preventDefault();

  const { position } = this.state;
  const { text } = this.props;

  const currentLetter = text[position];

  if (evt.key === "Backspace") {
    //logic for backspace
    if (position > 0) {
      this.setState({ position: position - 1 });
    }
  } else {
    //all the logic for printing
    if (evt.key === "Enter") {
      this.setState({ position: 0, errorArray: [] });
      this.props.clearStats();
      this.props.stopSpeedCalculating();

      this.pasteText();
    }

    if (position === text.length - 1) {
      // logic for ending writitng
      this.showFinale();
      this.props.stopSpeedCalculating();
      return;
    }

    if (evt.key.length > 1) {
      // avoid function keys to press
      return;
    }

    if (this.props.allLetters === 0) {
      this.props.startSpeedCalculating();
    }

    this.props.addSymbol();

    if (evt.key === currentLetter) {
      // correct symbol logic
      const { errorArray } = this.state;
      const newArray = errorArray.filter((el) => el !== position);

      this.setState({ errorArray: newArray });
    } else {
      // typo logic
      this.props.addTypo();
      const { errorArray } = this.state;
      const newArray = errorArray.concat(position);

      this.setState({ errorArray: newArray });
    }

    this.setState({ position: position + 1 });
  }
}

function calculateAccuracy(symbols, typos) {
  if (!(symbols && typos)) {
    return 100;
  }
  return Math.floor(((symbols - typos) / symbols) * 100);
}

export { applyAllKeyLogic, calculateAccuracy };
