import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressCard = ({ text, percentage, color }) => {
  return (
    <div className="">
      <p>{text}</p>
      <div className="flex-row progress-box">
        <div>
          <ProgressBar percentile={percentage} color={color}  />
        </div>
        <h3>{percentage + "%"}</h3>
      </div>
    </div>
  );
};

export default ProgressCard;
