import React from "react";
import { Link } from "react-router-dom";
import "../scss/pages/RedTeamConsole.scss";

import "../scss/components/containerList.scss";
import SidebarComponent from "../components/global/SidebarComponent";
import { Box } from "@mui/system";

export default function RedTeamConsole() {
  return (
    <div className="dashboard-container">
      {/* <SidebarComponent /> */}

      <div className="dashboard-main-content">Main content goes here</div>
    </div>
  );
}
