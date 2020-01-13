import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import "./App.css";
import LineChartContainer from "./components/BasicLineGraph/LineChartContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Route path="/" component={LineChartContainer} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
