import { SET_INTERFACE } from "../types";

const initialState = {
  interface: "LOGIN",
};

const backendReducer = (state = initialState, action) => {
  switch (action.type) {
    // your existing cases
    case SET_INTERFACE:
      return {
        ...state,
        interface: action.payload,
      };
    default:
      return state;
  }
};

export default backendReducer;
