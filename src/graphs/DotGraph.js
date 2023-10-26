import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const DotGraph = ({ data1 }) => {
  const maxData = [{ x: 100, y: 100 }];
  const data2 = [{ x: 72, y: data1[0].y }];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <>
          {payload[0].value !== 72 && (
            <div className=" tooltip ">
              <h1 className="">{` ${payload[0].value}% Percentile`}</h1>
              <p>Your Score</p>
            </div>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        width={500}
        height={300}
        margin={{
          right: 60,
          bottom: 200
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="%" />
        <YAxis
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          className="hidden"
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          content={<CustomTooltip />}
        />
        <Scatter
          name="A school"
          data={maxData}
          fill="#8884d8"
          className="hidden"
        />
        <Scatter name="A school" data={data1} fill="#8884d8" />
        <Scatter name="A school" data={data2} fill="#FF9142" />
        <ReferenceLine
          x={data1[0].x}
          stroke="#438AF6"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default DotGraph;
