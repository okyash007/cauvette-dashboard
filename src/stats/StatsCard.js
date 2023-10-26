import React from "react";

const StatsCard = ({ icon, number, text }) => {
  return (
    <div className=" stats-card flex-row">
      <div>
        <p className="icon">{icon}</p>
      </div>
      <span className="">
        <h1 className="">{number}</h1>
        <p>{text}</p>
      </span>
    </div>
  );
};

export default StatsCard;
