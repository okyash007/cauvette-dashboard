import React from "react";
import StatsCard from "./StatsCard";
import { useSelector } from "react-redux";

const Stats = () => {
  const data = useSelector((store) => store.data.data);
  console.log(data);
  return (
    <div className="stats border">
      <h3>Quick Statistics</h3>
      <div className="stats-box flex-row">
        <StatsCard icon={"🏆"} number={data.rank} text={"YOUR RANK"} />
        <StatsCard icon={"📋"} number={data.percentile + "%"} text={"PERCENTILE"} />
        <StatsCard icon={"✅"} number={data.score + " / 15"} text={"CORRECT ANSWERS"} />
      </div>
    </div>
  );
};

export default Stats;
