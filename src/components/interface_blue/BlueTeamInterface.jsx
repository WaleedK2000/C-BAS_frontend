import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import BlueTeamConsole from "../blueteam_dashboard/BlueTeamConsole";
import BlueSidebarComponent from "../global/blueTeam/BlueSidebarComponent";
import DefenseMatrix from "../blue_scripts/DefenseMatrix";
import DockerLog from "../blue_scripts/docker_log/DockerLog";
import SelectionContainer from "../selection_container/SelectionContainer";
import SelectionNode from "../selection_node/SelectionNode";
import SelectionNodeContainer from "../selection_node_container/SelectionNodeContainer";

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
            <Route path="/blue/test" element={<SelectionNodeContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
