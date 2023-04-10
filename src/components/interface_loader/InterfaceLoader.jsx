import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RedTeamInterface from "../interface_red/RedTeamInterface";

import Login from "../../pages/Login";

export default function InterfaceLoader() {
  const interfaceValue = useSelector((state) => state.interface.interface);
  const [myState, setMyState] = useState(null);

  useEffect(() => {
    // update the component's state here
    setMyState(interfaceValue);
  }, [interfaceValue]);

  return (
    <div>
      {interfaceValue === "LOGIN" && <Login />}
      {interfaceValue === "RED" && <RedTeamInterface />}
    </div>
  );
}
