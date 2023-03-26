import { SET_BACKEND_IP_ADDRESS } from "../types";

const initialState = {
  backendIp: "http://127.0.0.1:3000",
};

export default function backendReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BACKEND_IP_ADDRESS:
      return {
        ...state,
        backendIp: action.payload,
      };
    default:
      return state;
  }
}
