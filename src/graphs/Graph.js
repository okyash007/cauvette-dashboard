import React from "react";
import LineGraph from "./LineGraph";
import DotGraph from "./DotGraph";
import { useSelector } from "react-redux";

const Graph = () => {
  const percentile = useSelector((store) => store.data.data.percentile);
  console.log(percentile);

  function randomUnder100() {
    let number = Math.floor(Math.random() * 30);
    return number + 50;
  }

  let data = [];
  for (let i = 0; i <= 100; i++) {
    data.push({ percantile: i, users: randomUnder100(i) });
  }

  console.log(data);

  return (
    <span className="all-graphs border">
      <div className="graph-text-box">
        <h3>Comparison Graph</h3>
        <div className="flex-row graph-text">
          <p>
            <span className="font-semibold">
              You scored {percentile}% percentile{" "}
            </span>
            <span>which is</span>
            {percentile > 72 && <span> higher </span>}
            {percentile < 72 && <span> lower </span>}
            {percentile === 72 && <span> equal </span>}
            <span>
              <br />
              than the average percentile 72% of all the engineers who took this
              assessment
            </span>
          </p>
          <p className="icon">
            📋
          </p>
        </div>
      </div>
      <div className="graphs">
        <LineGraph data={data} percantile={percentile} />
      </div>
      <div className="graphs-2">
        <DotGraph data1={[{ x: percentile, y: data[percentile].users }]} />
      </div>
    </span>
  );
};

export default Graph;
