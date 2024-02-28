// import React from "react";
import React, { useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import { useParams } from "react-router";
import axios from "axios";
import Scripts from "./scripts/Scripts";

import { getBackendLink } from "../helpers/backend_link";

// TODO Need to pass variable/prop from previous page

export default function ContainerData(props) {
  console.log(props);

  const [exp1, setExp1] = useState("Test Docker Socket");
  const [loading, setLoading] = useState(false);

  const { nodeId, conId } = useParams();

  const launchExp1 = async () => {
    setLoading(true);
    setExp1("Working on it!");
    const res = await axios.post(`${getBackendLink()}/api/exploits/exploit1`, {
      nodeId: nodeId,
      conId: conId,
    });
    setExp1("executed");
    console.log(nodeId, conId);
    console.log(res.data.result);

    if (res.data.result === true) {
      setExp1("Sucessfully Executed");
    } else {
      setExp1("Failed");
    }
    setLoading(false);
  };

  return !loading ? (
    <>
      <h1>Red Team Scripts</h1>
      <p>
        Click Button to test Docker Socket Vulnerability on Container {conId}
      </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => launchExp1()}
      >
        {exp1}
      </button>

      <Scripts
        nodeId={nodeId}
        conId={conId}
        name={"Docker Socket Vulnerability"}
        exp={"exploit1"}
      />

      <Scripts
        nodeId={nodeId}
        conId={conId}
        name={"PID Attack"}
        exp={"pid_sh"}
      />

      <Scripts
        nodeId={nodeId}
        conId={conId}
        name={"Expose host file path"}
        exp={"expose_host_file"}
      />

      <Scripts
        nodeId={nodeId}
        conId={conId}
        name={"Get Hashes Attack"}
        exp={"executeShowHashes"}
      />

      <Scripts
        nodeId={nodeId}
        conId={conId}
        name={"DOS Attack"}
        exp={"executeStressTest"}
      />
    </>
  ) : (
    <div className="nice">
      <RotateLoader />
    </div>
  );
}
