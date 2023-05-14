import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NodeSummary({ summary }) {
  return (
    <Paper sx={{ p: 2, m: 2, elevation: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ p: 1, borderRight: "1px solid grey" }}>
          <Typography variant="h6" align="center">
            Total Nodes
          </Typography>
          <Typography variant="h4" color="primary" align="center">
            {summary.total}
          </Typography>
        </Box>
        <Box sx={{ p: 1, borderRight: "1px solid grey" }}>
          <Typography variant="h6" align="center">
            Connected Nodes
          </Typography>
          <Typography variant="h4" color="success" align="center">
            {summary.connected}
          </Typography>
        </Box>
        <Box sx={{ p: 1 }}>
          <Typography variant="h6" align="center">
            Disconnected Nodes
          </Typography>
          <Typography variant="h4" color="error" align="center">
            {summary.disconnected}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
