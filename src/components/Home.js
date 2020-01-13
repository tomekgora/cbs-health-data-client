import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "./components/AppBar";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return <AppBar />;
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
