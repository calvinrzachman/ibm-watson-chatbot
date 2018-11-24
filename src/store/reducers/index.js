import { combineReducers } from "redux";

// Import all your reducers here
import converseReducer from "./converse";

export default combineReducers({
  converse: converseReducer
});
