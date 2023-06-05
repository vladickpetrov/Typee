import React from "react";
import "./Completed.css";
import Wrong from "../Wrong";

function Completed({ completed, errors }) {
  const lettersArray = completed.split("");

  const letters = lettersArray.map((letter, index) => {
    return {
      letter,
      isWrong: errors.includes(index),
      index,
    };
  });

  return (
    <p className="completed">
      {letters.map((el) => {
        return el.isWrong ? (
          <Wrong wrongLettert={el.letter} key={el.index} />
        ) : (
          el.letter
        );
      })}
    </p>
  );
}

export default Completed;
