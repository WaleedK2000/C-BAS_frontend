import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import "./ScriptsDescription.scss";

export default function ScriptsDescription() {
  const { attack, nodeId, script } = useParams();

  const [execution, setExecution] = useState(false);
  const [loading, setLoading] = useState("Execute Script");

  const executeScript = async () => {
    // setExp1("Execution in Progress");
    // setLoading(true);
    setLoading("Execution in Progress ...");
    const res = await axios.post(
      "http://127.0.0.1:3000/api/exploits/" + script,
      {
        nodeId: nodeId,
        // conId: props.conId,
      }
    );
    console.log(res.data);
    if (res.data.result === true) {
      setExecution(res.data.output);
      //   setExp1("Executed Successfully");
      //   setData(res.data.output);
    } else {
      //   setExp1("Executed Failed!");
    }
    // setLoading(false);
    setLoading("Execute Completed");
  };

  return (
    <div className="script-description">
      <div>
        <h1>{script}</h1>
      </div>
      <div>
        <h2>Script Output</h2>
        {execution ? (
          <textarea cols="150" rows="10" readOnly>
            {execution}
          </textarea>
        ) : (
          <p>Click Below to Execute Script</p>
        )}
      </div>
      <div>
        <button onClick={() => executeScript()}> {loading} </button>
      </div>
    </div>
  );
}
