import React, { useState, useEffect } from "react";
const axios = require("axios");
export default function SelectionNode(props) {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://127.0.0.1:3000/api/nodes");
      setNodes(result.data);
    };
    fetchData();
  }, []);
  //   const [selectedNode, setSelectedNode] = useState(null);

  const selectedNode = props.selectedNode;
  const setSelectedNode = props.setSelectedNode;

  //   const update = props.setSelectedNode;

  return (
    <div>
      {/* <h1>All Nodes</h1> */}
      <select
        value={selectedNode}
        onChange={(e) => {
          setSelectedNode(e.target.value);
          //   update(e.target.value);
        }}
      >
        <option value="">Please Select Node</option>
        {nodes.map((node) => (
          <option key={node._id} value={node._id}>
            {node.name}
          </option>
        ))}
      </select>
    </div>
  );
}
