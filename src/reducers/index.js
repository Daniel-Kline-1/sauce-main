import accessReducer from "./access";
import refreshReducer from "./refresh";
import loggedReducer from "./isLogged";
import initReducer from "./init";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  accessReducer,
  refreshReducer,
  loggedReducer,
  initReducer,
});

export default allReducers;
