import React from "react";
import "./Popup.css";

function Popup({ isPopupOpened, handleStartButton }) {
  return (
    <div className={`popup ${isPopupOpened ? "" : "popup_opened"}`}>
      <div className="popup__main-window">
        <span className="popup__title">Привет!</span>
        <p className="popup__subtitle">
          Это Typee – приложения для тренировки слепой печати.
        </p>
        <span className="popup__subtitle">
          Чтобы загрузить случайный текст, нажми Enter. Ты также можешь
          регулировать количество предложений, стирать ошибки и открыть это
          окно, если что-то забудешь.
        </span>
        <button className="popup__button button" onClick={handleStartButton}>
          Начать
        </button>
      </div>
      <div className="popup__background"></div>
    </div>
  );
}

export default Popup;
