import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import BlueTeamConsole from "../blueteam_dashboard/BlueTeamConsole";
import BlueSidebarComponent from "../global/blueTeam/BlueSidebarComponent";

export default function BlueTeamInterface() {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <BlueSidebarComponent />
        <div className="dashboard-main-content">
          <Routes>
            <Route path="/blue" element={<BlueTeamConsole />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
