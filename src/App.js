import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div></div>
      </Provider>
    </div>
  );
}

export default App;
