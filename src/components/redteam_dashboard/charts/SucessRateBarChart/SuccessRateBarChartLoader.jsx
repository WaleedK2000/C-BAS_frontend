import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

import SuccessRateBarChart from "./SuccessRateBarChart";

import { getBackendLink } from "../../../../helpers/backend_link";

export default function SuccessRateBarChartLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${getBackendLink()}/api/data/get_data_24hr_by_nodeid`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {data && <SuccessRateBarChart data={data} />}
      {loading && <CircularProgress size={16} />}
    </>
  );
}
