import React from "react";
import { connect } from "react-redux";
import LineChartContainer from "./BasicLineGraph/LineChartContainer";
// import CollapsibleMenu from "./CollapsibleMenu";
import QuerySelectionDrawer from "./QuerySelectionDrawer";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>Health data from 1900</h2>
        <div>
          <LineChartContainer />
        </div>
        <QuerySelectionDrawer />
        {/* <CollapsibleMenu /> */}
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
