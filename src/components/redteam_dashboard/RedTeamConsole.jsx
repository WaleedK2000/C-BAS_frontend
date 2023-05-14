import React from "react";
import "./RedTeamConsole.scss";
import { Grid } from "@mui/material";
import VulnerabilityStatusPieChart from "./charts/VulnerabilityStatusPieChart";

import SuccessRateBarChartLoader from "./charts/SucessRateBarChart/SuccessRateBarChartLoader";
import OverallSuccessRate from "./charts/overallSucessrate/OverallSuccessRate";

export default function RedTeamConsole() {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Red Team Dashboard</h1>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <div className="chart-container">
            <SuccessRateBarChartLoader />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="chart-container">
            <OverallSuccessRate />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
