import { combineReducers } from "redux";
import dataReducer from "./data";

export default combineReducers({
  data: dataReducer
});

// TODO: Add reducer and actions for the data and
// meta-data once the very basics are working
