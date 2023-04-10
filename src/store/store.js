import { createStore, combineReducers } from "redux";

import backendReducer from "./reducers/backendReducer";
import interfaceReducer from "./reducers/interfaceReducer";

const rootReducer = combineReducers({
  backend: backendReducer,
  interface: interfaceReducer,
});

const store = createStore(rootReducer);

export default store;
