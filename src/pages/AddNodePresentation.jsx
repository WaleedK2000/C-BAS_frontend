import React from "react";
import { TextField, Button, Grid } from "@mui/material";

export default function AddNodePresentation(props) {
  return (
    <div>
      {/* add some margin to the heading */}
      <h2 style={{ margin: "20px" }}>Add a New Node</h2>
      <form onSubmit={props.handleSubmit}>
        {/* add a div element around the grid container */}
        <div
          style={{
            padding: "60px",
            border: "1px solid black",
            boxShadow: "5px 5px 10px gray",
            backgroundColor: "#f0f0f0",
          }}
        >
          {/* reduce the spacing from 2 to 1 */}
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              {/* add some width to the text field */}
              <TextField
                label="Node Name"
                value={props.name}
                onChange={(event) => props.setName(event.target.value)}
                required
                helperText="Enter a unique name for the node"
                error={props.errors.name ? true : false}
                errorMessage={props.errors.name}
                style={{ width: "60%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* add some width to the text field */}
              <TextField
                label="IP Address"
                value={props.ipAddress}
                onChange={(event) => props.setIpAddress(event.target.value)}
                required
                helperText="Enter the IPv4 address of the node"
                error={props.errors.ipAddress ? true : false}
                errorMessage={props.errors.ipAddress}
                style={{ width: "60%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* change the label to Port */}
              {/* add some width to the text field */}
              <TextField
                label="Port"
                value={props.portNumber}
                onChange={(event) => props.setPortNumber(event.target.value)}
                required
                helperText="Enter the port number of the node"
                error={props.errors.portNumber ? true : false}
                errorMessage={props.errors.portNumber}
                style={{ width: "60%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* add some margin to the button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}
