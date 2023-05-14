import React, { useState, useEffect } from "react";
import axios from "axios";

import OverallSuccessRatePresentation from "./OverallSuccessRatePresentation";

export default function OverallSuccessRate() {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:3000/api/data/get_data_24hr")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log("frrfrfcdcerc ------------");
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  console.log(".................");
  console.log(data);

  return data && <OverallSuccessRatePresentation data={data} />;
}
