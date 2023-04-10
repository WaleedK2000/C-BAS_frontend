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

export const setInterfaceToBlue = () => {
  return {
    type: SET_INTERFACE,
    payload: "BLUE",
  };
};
