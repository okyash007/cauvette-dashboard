import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const LineGraph = ({ data, percantile }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 60,
          bottom: 200
        }}
      >
        <XAxis dataKey="percantile" className="hidden" />
        <YAxis className="hidden" dataKey="percantile" />
        <ReferenceLine
          x={72}
          stroke="#FF9142"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          data={data}
          dataKey="users"
          stroke="#C8D6E5"
          strokeWidth={3}
          dot={<></>}
          className="border-2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
