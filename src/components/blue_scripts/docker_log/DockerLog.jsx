import React, { useState } from "react";
import axios from "axios";

// import SelectionNode from "../../selection_node/SelectionNode";
import SelectionNodeContainer from "../../selection_node_container/SelectionNodeContainer";

import { getBackendLink } from "../../../helpers/backend_link";

export default function DockerLog() {
  const [node, setNode] = useState(null);
  const [container, setContainer] = useState(null);
  const [logs, setLogs] = useState(null);

  const getLogFromBackend = async () => {
    const res = await axios.post(
      `${getBackendLink()}/api/exploits/executeDockerLog`,
      {
        nodeId: node,
        conId: container,
      }
    );

    setLogs(res.data.output);
    console.log(logs);
  };

  return (
    <div>
      <div className="heading">
        <h1>Docker Logs</h1>
      </div>
      <div className="">
        <div className="secondary">
          <h2>Select Container</h2>
        </div>
        <SelectionNodeContainer
          selectedNode={node}
          setSelectedNode={setNode}
          selectedContainer={setContainer}
        />
      </div>
      {node && container && (
        <>
          <button onClick={getLogFromBackend}> Execute </button>
          {logs && (
            <>
              <h2>Output</h2>
              {/* <textarea cols="150" rows="10" readOnly>
                {logs}
              </textarea> */}
              <div>
                <ul>{logs}</ul>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
