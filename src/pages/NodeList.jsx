import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import NodeCard from "../components/global/nodeList/NodeCard";
import NodeSummary from "../components/global/nodeList/NodeSummary";

export default function NodeList() {
  const [nodes, setNodes] = useState([]);
  const [summary, setSummary] = useState({
    total: 0,
    connected: 0,
    disconnected: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://127.0.0.1:3000/api/nodes");
      setNodes(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const calculateSummary = () => {
      const total = nodes.length;
      const connected = nodes.filter(
        (node) => node.connectionStatus === 200
      ).length;
      const disconnected = nodes.filter(
        (node) => node.connectionStatus === 404
      ).length;
      setSummary({ total, connected, disconnected });
    };
    calculateSummary();
  }, [nodes]);

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        All Nodes
      </Typography>
      <NodeSummary summary={summary} />
      <Grid container spacing={2}>
        {nodes.map((node) => (
          <Grid item xs={12} sm={6} md={4} key={node._id}>
            <NodeCard node={node} />
          </Grid>
        ))}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        // component={}
        to="/node/add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
