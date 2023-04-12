import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import BlueTeamConsole from "../blueteam_dashboard/BlueTeamConsole";
import BlueSidebarComponent from "../global/blueTeam/BlueSidebarComponent";
import DefenseMatrix from "../blue_scripts/DefenseMatrix";
import DockerLog from "../blue_scripts/docker_log/DockerLog";

export default function BlueTeamInterface() {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <BlueSidebarComponent />
        <div className="dashboard-main-content">
          <Routes>
            <Route path="/blue" element={<BlueTeamConsole />} />
            <Route path="/blue/Defense_Matrix" element={<DefenseMatrix />} />
            <Route
              path="/blue/Defense_Matrix/DOCKER_LOGS"
              element={<DockerLog />}
            />
            <Route
              path="/blue/Defense_Matrix/:attack"
              element={<DefenseMatrix />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
