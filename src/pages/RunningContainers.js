import React, { useState } from "react";
import ContainerList from "../components/ContainerList";
import { useParams } from "react-router";

import "../scss/pages/running_containers.scss";

import "../scss/components/containerList.scss";

export default function RunningContainers() {
  const [selection, setSelection] = useState(false);
  const { nodeId } = useParams();

  return (
    <body>
      <div className="layout">
        <div className="header">
          <h1>Running Containers</h1>
          <h1>{selection}</h1>
          <h2>{nodeId}</h2>
        </div>

        <div className="left_side">
          <ContainerList selection={setSelection} />
        </div>

        <div className="right_side"></div>
      </div>
    </body>
  );
}
