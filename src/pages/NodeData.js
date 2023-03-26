import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import axios from "axios";

export default function NodeData(props) {
  const { nodeId } = useParams();

  const [node, setNode] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://127.0.0.1:3000/api/nodes", {
        params: {
          id: nodeId,
        },
      });
      setNode(...result.data);
    };
    fetchData();
  });

  return (
    <div>
      {node ? (
        <div>
          NodeData <h2>Node Test</h2>
          {/* <p>{props.match.params.nodeId}</p> */}
          <ul>
            <li>{node.name}</li>
            <li>{node.ipAddress}</li>
          </ul>
          <h2>Red Team Interface</h2>
          <Link to={"/" + node._id + "/running_containers"}>
            <button>Red Team Scripts</button>
          </Link>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
}
