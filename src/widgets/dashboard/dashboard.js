import React from "react";
import "./Dashboard.css";
import Stat from "../../shared/Stat";

function Dashboard({ speed, accuracy, typos }) {
  return (
    <div className="stat">
      <Stat iconText={">>"} quantity={speed} description={"char/min"} />
      <Stat iconText={"✎"} quantity={accuracy + "%"} description={"accuracy"} />
      <Stat iconText={"*"} quantity={typos} description={"typos"} />
    </div>
  );
}

export default Dashboard;
