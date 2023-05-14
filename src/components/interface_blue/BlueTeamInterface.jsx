import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import BlueTeamConsole from "../blueteam_dashboard/BlueTeamConsole";
import BlueSidebarComponent from "../global/blueTeam/BlueSidebarComponent";
import DefenseMatrix from "../blue_scripts/DefenseMatrix";
import DockerLog from "../blue_scripts/docker_log/DockerLog";
import BlueVulnerability from "../blue_vulnerability/BlueVulnerability";
import SelectionContainer from "../selection_container/SelectionContainer";
import SelectionNode from "../selection_node/SelectionNode";
import SelectionNodeContainer from "../selection_node_container/SelectionNodeContainer";
import GeneralBlue from "../general_blue/GeneralBlue";
import NodeList from "../../pages/NodeList";

// Blue Team Interface Routes are stored here

export default function BlueTeamInterface() {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <BlueSidebarComponent />
        <div className="dashboard-main-content">
          <Routes>
            {/* // Main Console  */}
            <Route path="/blue" element={<BlueTeamConsole />} />

            {/* Defense Matrix Routes */}
            <Route path="/blue/Defense_Matrix" element={<DefenseMatrix />} />
            <Route
              path="/blue/Defense_Matrix/DOCKER_LOGS"
              element={<DockerLog />}
            />
            <Route
              path="/blue/Defense_Matrix/GENERAL"
              element={<GeneralBlue />}
            />
            <Route
              path="/blue/Defense_Matrix/:attack"
              element={<DefenseMatrix />}
            />

            <Route
              path="/blue/Defense_Matrix/GENERAL/CONTAINER_SCAN"
              element={<BlueVulnerability />}
            />

            <Route path="/node/view" element={<NodeList />} />

            <Route path="/blue/test" element={<BlueVulnerability />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
