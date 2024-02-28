import React, { useState, useEffect } from "react";
import axios from "axios";

import { CircularProgress } from "@mui/material";

import OverallSuccessRatePresentation from "./OverallSuccessRatePresentation";

import { getBackendLink } from "../../../../helpers/backend_link";

export default function OverallSuccessRate() {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${getBackendLink()}/api/data/get_data_24hr`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  console.log(".................");
  console.log(data);

  return (
    <>
      {data && <OverallSuccessRatePresentation data={data} />}
      {loading && <CircularProgress size={16} />}
    </>
  );
}
