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
        setData(response.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return data && <SuccessRateBarChart data={data} />;
}
