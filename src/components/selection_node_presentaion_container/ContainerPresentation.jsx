import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";

import { getBackendLink } from "../../helpers/backend_link";

const axios = require("axios");

const getStatusColor = (status) => {
  if (status === "Good") {
    return green[500];
  }
  // Add other cases for different statuses
};

export default function ContainerPresentation() {
  const [dockerList, setdockerList] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // const apiURL = `${getBackendLink()}/api/exploits/containers/` + nodeId;
    const apiURL = `${getBackendLink()}/api/exploits/containers/`;

    setLoading(true);
    axios
      .get(apiURL, {
        // Abort Signal Cancels Request if no response or other kind of error occur
        signal: AbortSignal.timeout(18000),
      })
      .then(function (response) {
        return response.data;
      })
      .then((res) => {
        setdockerList(res);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Docker Containers
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary">
        Running {dockerList.running}
      </Typography>
      <Grid container spacing={3} style={{ marginTop: 16 }}>
        {Object.entries(dockerList.data).map(([key, value]) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: getStatusColor(value.State.Status) }}>
                    <CheckCircleIcon />
                  </Avatar>
                }
                title={value.Name}
                subheader={value.Config.Image}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Status: {value.State.Status}
                </Typography>
                {/* Add other information as needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
