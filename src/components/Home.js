import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import LineChartContainer from "./BasicLineGraph/LineChartContainer";
import CollapsibleMenu from "./CollapsibleMenu";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <p>Please select the dataset you would like to explore</p>
        <LineChartContainer />
        <CollapsibleMenu />
      </div>
    );
  }
}

const mapStateToProps = ReduxState => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//TODO: parse the dates
//      get metaData

//  AppBar
//  Choice of data-sets
//  Choice of data-series
//  Choice of diagram
//  Choosing the data-series live?
