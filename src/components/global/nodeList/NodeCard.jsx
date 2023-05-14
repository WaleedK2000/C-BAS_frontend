import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function NodeCard({ node }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" color="primary">
          {node.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          IP Address: {node.ipAddress}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Port Number: {node.portNumber}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Connection Status:{" "}
          {node.connectionStatus === 200 && (
            <CheckCircleOutlinedIcon color="success" />
          )}
          {node.connectionStatus === 404 && (
            <CancelOutlinedIcon color="error" />
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<Link />}
          component={Link}
          to={"/node/view/" + node._id}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
