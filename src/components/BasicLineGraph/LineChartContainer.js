import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/data";

export default class LineChartContainer extends Component {

  // componentDidMount() {
  //     const selection = "Periods,+Men_117"
  //     fetchData(selection)
  // };

  render() {
    // TODO: selection choices

} // ends here

function mapStateToProps(reduxState) {
  return {
    data: reduxState.data
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LineChartContainer)


// https://nivo.rocks/storybook/?path=/story/heatmap--square-cells