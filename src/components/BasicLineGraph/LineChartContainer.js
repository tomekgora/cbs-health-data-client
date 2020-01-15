import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/data";
import ResponsiveLineChart from "../NivoLineChart/ResponsiveLineChart";

class LineChartContainer extends Component {
  componentDidMount() {
    console.log("LineChartContainer ComponentDidMount");
    const selection = "Periods,HeavySmokers_27,Smokers_26,";
    this.props.fetchData(selection);
    console.log("fetchData ran");
  }

  render() {
    console.log("The LineChart Container rendered?", this.props.data);
    if (!this.props.data) {
      return "Loading...";
    } else {
      return (
        <div>
          {/* <BasicLineChart data={this.props.data.value} /> */}
          <div style={{ height: 500 }}>
            <ResponsiveLineChart data={this.props.data} />
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    data: reduxState.data
  };
}

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChartContainer);

// https://nivo.rocks/storybook/?path=/story/heatmap--square-cells
