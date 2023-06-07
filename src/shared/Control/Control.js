import React from "react";
import "./Control.css";

function Control({ sentences, controlSentences }) {
  return (
    <div className="control">
      <button
        className="control__button button"
        onClick={() => {
          controlSentences("more");
        }}
      >
        +
      </button>
      <div className="control__container">
        <span className="control__amount">{sentences}</span>
        <p className="control__label">sentences</p>
      </div>
      <button
        className="control__button button"
        onClick={() => {
          controlSentences("");
        }}
      >
        –
      </button>
    </div>
  );
}

export default Control;
