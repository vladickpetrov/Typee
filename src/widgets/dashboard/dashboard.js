import React from "react";
import "./dashboard.css";
import Stat from "../../shared/stat";

function Dashboard({ speed, accuracy, typos }) {
  return (
    <div className="stat">
      <Stat iconText={">>"} quantity={speed} description={"знаков/мин"} />
      <Stat iconText={"✎"} quantity={accuracy + "%"} description={"точность"} />
      <Stat iconText={"*"} quantity={typos} description={"очепяток"} />
    </div>
  );
}

export default Dashboard;
