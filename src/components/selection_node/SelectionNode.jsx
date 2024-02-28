import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { getBackendLink } from "../../helpers/backend_link";

const axios = require("axios");

export default function SelectionNode(props) {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${getBackendLink()}/api/nodes`);
      setNodes(result.data);
    };
    fetchData();
  }, []);
  // const [selectedNode, setSelectedNode] = useState(null);

  const selectedNode = props.selectedNode;
  const setSelectedNode = props.setSelectedNode;

  // const update = props.setSelectedNode;

  return (
    <div>
      {/* <h1>All Nodes</h1> */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="node-select-label">Select Node</InputLabel>
        <Select
          labelId="node-select-label"
          id="node-select"
          value={selectedNode}
          label="Select Node"
          onChange={(e) => {
            setSelectedNode(e.target.value);
            // update(e.target.value);
          }}
        >
          {nodes.map((node) => (
            <MenuItem key={node._id} value={node._id}>
              {node.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
