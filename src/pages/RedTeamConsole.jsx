import React from "react";
import { Link } from "react-router-dom";
import "../scss/pages/RedTeamConsole.scss";

import "../scss/components/containerList.scss";
import SidebarComponent from "../components/global/SidebarComponent";
import { Box } from "@mui/system";
import VulnerabilityStatusPieChart from "../components/redteam_dashboard/charts/VulnerabilityStatusPieChart";

export default function RedTeamConsole() {
  return (
    <div>
      <div className="">
        <h1>Red Team Dashboard</h1>
      </div>
      <div>
        <div className="dash">
          <h2>Vulnerability Status Report</h2>
          <VulnerabilityStatusPieChart />
        </div>
      </div>
    </div>
  );
}
