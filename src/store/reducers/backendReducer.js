import { backendReducer } from "../types";

const initialState = {
  backendReducer: "127.0.0.1",
};

export default function backendReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IP_ADDRESS:
      return {
        ...state,
        backendReducer: action.payload,
      };
    default:
      return state;
  }
}
