import React from "react";
import "./MoreInfo.css";

function MoreInfo({ handleShowPopup }) {
  return (
    <button className="moreinfo button" onClick={handleShowPopup}>
      i
    </button>
  );
}

export default MoreInfo;
