import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/data";
import BasicLineChart from "./BasicLineChart";

class LineChartContainer extends Component {
  componentDidMount() {
    const selection = "Periods,+Men_117";
    fetchData(selection);
  }

  render() {
    return (
      <div>
        <h2>Data Chart</h2>
        <BasicLineChart />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    data: reduxState.data
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LineChartContainer);

// https://nivo.rocks/storybook/?path=/story/heatmap--square-cells
