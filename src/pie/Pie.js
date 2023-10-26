import React from "react";
import PieChat from "./PieChat";
import { useSelector } from "react-redux";

const Pie = () => {
  const data = useSelector((store) => store.data.data);

  console.log(data);

  return (
    <div className="border pie">
      <div>
        <h3>Question Analysis</h3>
        <h3>{data.score} / 15</h3>
      </div>
      <div>
        <span className="">
          You scored {data.score} questions correct out of 15.
        </span>

        {data.score != 15 && (
          <span> However it still needs some improvements</span>
        )}
      </div>
      <div className="flex-row pie-box">
        <PieChat percent={data.score} />
      </div>
    </div>
  );
};

export default Pie;
