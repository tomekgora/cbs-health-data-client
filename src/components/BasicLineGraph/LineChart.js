import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1900",
    rubella: 4000,
    polio: 2400
  },
  {
    name: "1901",
    rubella: 3000,
    polio: 1398
  },
  {
    name: "1902",
    uv: 2000,
    pv: 9800
  },
  {
    name: "1903",
    uv: 2780,
    pv: 3908
  },
  {
    name: "1904",
    uv: 1890,
    pv: 4800
  },
  {
    name: "1905",
    uv: 2390,
    pv: 3800
  },
  {
    name: "1906",
    uv: 3490,
    pv: 4300
  }
];

export default class BasicLineChart extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}
