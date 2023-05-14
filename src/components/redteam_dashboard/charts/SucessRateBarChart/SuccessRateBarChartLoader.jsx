import React, { useState, useEffect } from "react";
import axios from "axios";

import SuccessRateBarChart from "./SuccessRateBarChart";

export default function SuccessRateBarChartLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:3000/api/data/get_data_24hr_by_nodeid")
      .then((response) => {
        setData(response);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const Data = {
    "63f515ae0e83e24a744bec7e": {
      successfulCount: 1,
      failedCount: 0,
      node_name: "MyNode",
    },
  };

  return data && <SuccessRateBarChart data={Data} />;
}
