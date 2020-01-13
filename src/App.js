import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import "./App.css";
import Home from "components/Home";
import AppBar from "./components/AppBar";
import LineChartContainer from "./components/BasicLineGraph/LineChartContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <AppBar />
          <Route path="/" component={Home} />
          <Route path="/Chart" component={LineChartContainer} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
