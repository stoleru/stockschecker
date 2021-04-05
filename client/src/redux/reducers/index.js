import { combineReducers } from "redux";
import stocks from "./stocks";
import settings from "./settings";

export default combineReducers({ stocks, settings });
