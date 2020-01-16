import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import LineChartContainer from "./BasicLineGraph/LineChartContainer";
// import CollapsibleMenu from "./CollapsibleMenu";
import QuerySelectionDrawer from "./QuerySelectionDrawer";
import { fetchData } from "../actions/data";

class Home extends React.Component {
  state = {
    Mumps_6: false,
    Typhoid_7: false,
    Diphtheria_8: false,
    HepatitisA_9: false,
    WhoopingCough_10: false,
    LegionnairesDisease_11: false,
    Malaria_12: false,
    Measles_13: false,
    MeningococcalDisease_14: false,
    ParatyphoidB_15: false,
    Polio_16: false,
    QFever_17: false,
    Rubella_18: false,
    Shigella_19: false,
    Tuberculosis_20: false,
    AIDS_21: false,
    HIVInfected_22: false
  };

  componentDidMount() {}

  onSubmit = event => {
    event.preventDefault();
    let keysArray = Object.keys(this.state);
    console.log("KEyS", keysArray);
    let queryKeysArray = keysArray.filter(
      disease => this.state[disease] === true
    );
    console.log("KEyS", queryKeysArray);
    let selection = "Periods," + queryKeysArray.join(",");
    // .map(
    //   disease => this.state[disease] === true
    // );
    console.log("This is the SELECTION STRING", selection);
    this.props.fetchData(selection);
    // grab all the values from objexts where checked: true
    // join them into a query string
    // pass this query string SELECTION to the reducer
    // use this queey string in the graph call for new data series

    // allow user to save the resulting query string
    // allow the user to use the same query string at a later time
  };

  onChange = event =>
    this.setState({
      ...this.state,
      [event.target.name]: !this.state[event.target.name]
    });

  // [event.target.name]: event.target.checked

  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Health data from 1950</h2>
        <div>
          <LineChartContainer />
        </div>
        <QuerySelectionDrawer
          choices={this.state}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {/* <CollapsibleMenu /> */}
      </div>
    );
  }
}

const mapStateToProps = ReduxState => ({});

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//TODO: parse the dates
//      get metaData

//  AppBar
//  Choice of data-sets
//  Choice of data-series
//  Choice of diagram
//  Choosing the data-series live?
