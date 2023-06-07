import React from "react";
import "./Popup.css";

function Popup({ isPopupOpened, handleStartButton }) {
  return (
    <div className={`popup ${isPopupOpened ? "" : "popup_opened"}`}>
      <div className="popup__main-window">
        <span className="popup__title">Привет!</span>
        <p className="popup__subtitle">
          It's Typee – app for typewrite training.
        </p>
        <span className="popup__subtitle">
          If you want to load random text, click Enter. You can also control
          amount of loading sentences, delete typos and open this window in case
          you forgot something.
        </span>
        <button className="popup__button button" onClick={handleStartButton}>
          Start
        </button>
      </div>
      <div className="popup__background"></div>
    </div>
  );
}

export default Popup;
