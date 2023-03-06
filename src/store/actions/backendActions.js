import { SET_BACKEND_IP_ADDRESS } from "../types";

export const setBackendAddress = (backendIp) => ({
  type: SET_BACKEND_IP_ADDRESS,
  payload: backendIp,
});
