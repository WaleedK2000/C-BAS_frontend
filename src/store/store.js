import { createStore, combineReducers } from "redux";
import backendReducer from "./reducers/backendReducer";

const rootReducer = combineReducers({
  backend: backendReducer,
});

const store = createStore(rootReducer);

export default store;
