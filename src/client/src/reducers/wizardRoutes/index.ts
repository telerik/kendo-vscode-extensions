import { combineReducers } from "redux";
import { isVisited, selected } from "./navigationReducer";

export default combineReducers({
  isVisited, selected
});
