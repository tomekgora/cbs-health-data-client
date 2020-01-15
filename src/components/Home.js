import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import LineChartContainer from "./BasicLineGraph/LineChartContainer";
// import CollapsibleMenu from "./CollapsibleMenu";
import QuerySelectionDrawer from "./QuerySelectionDrawer";

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
    // grab all the values from objexts where checked: true
    // join them into a query string
    // pass this query string SELECTION to the reducer
    // use this queey string in the graph call for new data series

    // allow user to save the resulting query string
    // allow the user to use the same query string at a later time
  };

  onChange = event => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  // [event.target.name]: event.target.checked

  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Health data from 1950</h2>
        <div>
          <LineChartContainer />
        </div>
        <form onSubmit={this.handleSubmit}>
          <QuerySelectionDrawer
            data={this.state}
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
