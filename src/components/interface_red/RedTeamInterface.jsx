import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import SidebarComponent from "../global/SidebarComponent";

import AttackMatrix from "../scripts/attackMatrix/AttackMatrix";
import ScriptsDescription from "../scripts/ScriptsDescription";
import RunScripts from "../scripts/RunScripts";
import AttackNodeSelection from "../scripts/AttackNodeSelection";
import RedTeamConsole from "../redteam_dashboard/RedTeamConsole";
import NodeData from "../../pages/NodeData";
import NodeList from "../../pages/NodeList";

// import InterfaceLoader from "./components/interface_loader/InterfaceLoader";

export default function RedTeamInterface() {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <SidebarComponent />
        <div className="dashboard-main-content">
          <Routes>
            <Route path="/red" element={<RedTeamConsole />} />

            {/* Scritpt attack route */}
            <Route path="/red/attack_matrix" element={<AttackMatrix />} />

            <Route
              path="/red/attack_matrix/:attack"
              element={<AttackNodeSelection />}
            />

            <Route
              path="/red/attack_matrix/:attack/:conId"
              element={<RunScripts />}
            />

            <Route
              path="/red/attack_matrix/:attack/:nodeId/:script"
              element={<ScriptsDescription />}
            />

            {/* Node Routes  */}
            <Route path="/node/view" element={<NodeList />} />
            <Route path="/node/view/:nodeId" element={<NodeData />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
