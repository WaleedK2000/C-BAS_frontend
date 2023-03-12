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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ContainerList />} />
        <Route path="/running_containers" element={<RunningContainers />} />
        <Route path="/running_containers/:conId" element={<ContainerData />} />

        <Route path="/login" element={<Login />} />

        <Route path="/node/New" element={<AddNode />} />

        <Route path="/node/view" element={<NodeList />} />
        <Route path="/node/view/:nodeId" element={<NodeData />} />

        <Route path="/settings" element={<Settings />} />

        {/* <Route path="running_containers/:id" element={  } / > */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
