import React from "react";
import "./RedTeamConsole.scss";
import VulnerabilityStatusPieChart from "./charts/VulnerabilityStatusPieChart";

import SuccessRateBarChartLoader from "./charts/SucessRateBarChart/SuccessRateBarChartLoader";

export default function RedTeamConsole() {
  return (
    <div>
      <div className="">
        <h1>Red Team Dashboard</h1>
      </div>
      <div>
        <div className="grid">
          <div className="grid-container">
            <h2>Script Sucess Rate</h2>
            <SuccessRateBarChartLoader />
          </div>
          <div className="grid-container">
            <h2>Vulnerability score</h2>
            {/* <VulnerabilityStatusPieChart /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
