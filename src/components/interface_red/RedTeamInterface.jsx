import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import SidebarComponent from "../global/SidebarComponent";

// import "./App.scss";
import AttackMatrix from "../scripts/attackMatrix/AttackMatrix";
import ScriptsDescription from "../scripts/ScriptsDescription";
import RunScripts from "../scripts/RunScripts";
import AttackNodeSelection from "../scripts/AttackNodeSelection";
import RedTeamConsole from "../redteam_dashboard/RedTeamConsole";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
