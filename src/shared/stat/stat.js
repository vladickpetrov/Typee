import React from "react";
import "./stat.css";

function Stat({ iconText, quantity, description }) {
  return (
    <div className="stat__main">
      <div className="stat__icon">{iconText}</div>
      <div className="stat__container">
        <span className="stat__quantity">{quantity}</span>
        <p className="stat__description">{description}</p>
      </div>
    </div>
  );
}

export default Stat;
