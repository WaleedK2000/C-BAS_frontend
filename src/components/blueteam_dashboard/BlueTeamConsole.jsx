import React from "react";

// import "./BlueTeamConsole.scss";

export default function BlueTeamConsole() {
  return (
    <div>
      <div className="">
        <h1>Blue Team Dashboard</h1>
      </div>
      <div>
        <div className="grid">
          <div className="grid-container">
            <h2>Vulnerability Status Report</h2>
            {/* <VulnerabilityStatusPieChart /> */}
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
