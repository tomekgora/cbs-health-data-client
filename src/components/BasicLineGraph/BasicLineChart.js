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

export default class BasicLineChart extends PureComponent {
  render() {
    return (
      <LineChart
        width={600}
        height={400}
        data={this.props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Periods" label="Year" tickSize="5" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="" stroke="#888" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
