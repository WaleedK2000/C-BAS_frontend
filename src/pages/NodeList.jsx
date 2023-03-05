import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NodeList() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://127.0.0.1:3000/api/nodes");
      setNodes(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Nodes</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>IP Address</th>
            <th>Port Number</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((node) => (
            <tr key={node._id}>
              <td>{node.name}</td>
              <td>{node.ipAddress}</td>
              <td>{node.portNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
