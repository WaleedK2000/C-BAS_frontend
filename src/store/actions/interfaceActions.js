import { SET_INTERFACE } from "../types";

export const setInterface = (interfaceValue) => {
  return {
    type: SET_INTERFACE,
    payload: interfaceValue,
  };
};

export const setInterfaceToRed = () => {
  return {
    type: SET_INTERFACE,
    payload: "RED",
  };
};
