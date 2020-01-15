import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import LineChartContainer from "./BasicLineGraph/LineChartContainer";
// import CollapsibleMenu from "./CollapsibleMenu";
import QuerySelectionDrawer from "./QuerySelectionDrawer";

class Home extends React.Component {
  state = {
    formSelections: []
  };
  componentDidMount() {}

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Health data from 1900</h2>
        <div>
          <LineChartContainer />
        </div>
        <form onSubmit={this.handleSubmit}>
          <QuerySelectionDrawer
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </form>
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
