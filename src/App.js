import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

import Root from "./pages/root";
import ContainerList from "./components/ContainerList";
import Navbar from "./components/Navbar";
import RunningContainers from "./pages/RunningContainers";
import ContainerData from "./components/ContainerData";
import Login from "./pages/Login";
import AddNode from "./pages/AddNode";
import NodeList from "./pages/NodeList";
import Settings from "./pages/Settings";
import NodeData from "./pages/NodeData";
import RedTeamConsole from "./components/redteam_dashboard/RedTeamConsole";
import SidebarComponent from "./components/global/SidebarComponent";

import "./App.scss";
import AttackMatrix from "./components/scripts/attackMatrix/AttackMatrix";
import AttackNodeSelection from "./components/scripts/AttackNodeSelection";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <div className="dashboard-container">
        <SidebarComponent />
        <div className="dashboard-main-content">
          {/* <SidebarComponent /> */}
          <Routes>
            <Route exact path="/" element={<ContainerList />} />
            <Route path="/running_containers" element={<RunningContainers />} />
            <Route
              path="/running_containers/:conId"
              element={<ContainerData />}
            />

            <Route path="/login" element={<Login />} />

            <Route path="/node/New" element={<AddNode />} />

            <Route path="/node/view" element={<NodeList />} />
            <Route path="/node/view/:nodeId" element={<NodeData />} />

            <Route path="/red" element={<RedTeamConsole />} />
            <Route path="/red/attack_matrix" element={<AttackMatrix />} />
            <Route
              path="/red/attack_matrix/:attack"
              element={<AttackNodeSelection />}
            />

            <Route
              path=":nodeId/running_containers"
              element={<RunningContainers />}
            />
            <Route
              path=":nodeId/running_containers/:conId"
              element={<ContainerData />}
            />

            <Route path="/settings" element={<Settings />} />

            {/* <Route path="running_containers/:id" element={  } / > */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
