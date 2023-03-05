import { SET_BACKEND_IP_ADDRESS } from "../types";

export const setBackendAddress = (ipAddress) => ({
  type: SET_BACKEND_IP_ADDRESS,
  payload: ipAddress,
});
