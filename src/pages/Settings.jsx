// import React from "react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBackendAddress } from "../store/actions/backendActions";

export default function Settings() {
  const backendIp = useSelector((state) => state.backend);
  const dispatch = useDispatch();
  const [newBackendIp, setnewBackendIp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setBackendAddress(newBackendIp));
  };

  return (
    <div>
      <div>Settings</div>
      <div>
        <p>IP address: {backendIp.backendIp}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newBackendIp}
            onChange={(e) => setnewBackendIp(e.target.value)}
          />
          <button type="submit">Update IP address</button>
        </form>
      </div>
    </div>
  );
}
