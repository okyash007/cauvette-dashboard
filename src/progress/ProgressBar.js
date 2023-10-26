import React from "react";

const ProgressBar = ({ percentile, color }) => {
  return (
    <progress max={100} value={percentile} style={{ width: 200, height: 20 }} />
  );
};

export default ProgressBar;
