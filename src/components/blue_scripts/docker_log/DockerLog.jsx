import React, { useState } from "react";
import axios from "axios";

// import SelectionNode from "../../selection_node/SelectionNode";
import SelectionNodeContainer from "../../selection_node_container/SelectionNodeContainer";

export default function DockerLog() {
  const [node, setNode] = useState(null);
  const [container, setContainer] = useState(null);
  const [logs, setLogs] = useState(null);

  const getLogFromBackend = async () => {
    const res = await axios.post(
      "http://127.0.0.1:3000/api/exploits/executeDockerLog",
      {
        nodeId: node,
        conId: container,
      }
    );

    setLogs(res.data.output);
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
              <textarea cols="150" rows="10" readOnly>
                {logs}
              </textarea>
            </>
          )}
        </>
      )}
    </div>
  );
}
