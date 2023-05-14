import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

import "./ScriptsDescription.scss";

export default function ScriptsDescription() {
  const { attack, nodeId, script } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");

  const executeScript = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setOutput("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/api/exploits/" + script,
        {
          nodeId: nodeId,
        }
      );
      if (res.data.result === true) {
        setOutput(res.data.output);
      } else {
        setError("Execution Failed!");
      }
    } catch (error) {
      setError("Execution Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="script-description">
      <Typography variant="h4" gutterBottom>
        Execute Script
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {script}
          </Typography>
          <form onSubmit={executeScript}>
            <TextField
              label="Node ID"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              disabled={true}
              value={nodeId}
              className="node-id-input"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              startIcon={loading && <CircularProgress size={16} />}
              className="execute-button"
            >
              {loading ? "Executing Script..." : "Execute Script"}
            </Button>
          </form>
          {error && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}
          {output && (
            <div className="output-wrapper">
              <TextField
                label="Script Output"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={10}
                value={output}
                InputProps={{ readOnly: true }}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
