import React, { useState, useEffect } from "react";
import SelectionContainerPresentation from "./SelectionContainerPresentation";
import { CircularProgress, Box } from "@mui/material";

const axios = require("axios");

export default function SelectionContainer(props) {
  const [dockerList, setdockerList] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    // print(this);
  };

  const controller = new AbortController();

  // const { nodeId } = useParams();

  // const nodeId = props.nodeId;
  const nodeId = props.node;

  useEffect(() => {
    const apiURL = "http://127.0.0.1:3000/api/exploits/containers/" + nodeId;
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

        setdockerList({
          data: {
            con1: {
              Name: "Test",
              Config: {
                Image: "Ubuntu Test",
              },
              State: {
                Status: "Good",
              },
            },
          },
        });
      });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {loading ? (
        <CircularProgress />
      ) : (
        dockerList && (
          <SelectionContainerPresentation
            dockerList={dockerList}
            selectedContainer={props.selectedContainer}
          />
        )
      )}
    </Box>
  );
}
