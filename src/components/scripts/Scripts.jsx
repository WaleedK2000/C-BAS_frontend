import React, { useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import axios from "axios";
import { getBackendLink } from "../../helpers/backend_link";

// props

// nodeId, conId, name, exp,

export default function Scripts(props) {
  const [exp1, setExp1] = useState(props.name);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const launchExp = async () => {
    setExp1("Execution in Progress");
    setLoading(true);
    const res = await axios.post(
      `${getBackendLink()}/api/exploits/` + props.exp,
      {
        nodeId: props.nodeId,
        conId: props.conId,
      }
    );
    console.log(res.data);
    if (res.data.result === true) {
      setExp1("Executed Successfully");
      setData(res.data.output);
    } else {
      setExp1("Executed Failed!");
    }
    setLoading(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => launchExp()}
      >
        <h1>{exp1}</h1>
        <h2>{loading ? <RotateLoader /> : <></>}</h2>
        {data ? (
          <>
            <h1>Output </h1>
            <p>{data}</p>
          </>
        ) : (
          <></>
        )}
      </button>
    </div>
  );
}
