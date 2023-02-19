import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

import Root from "./pages/root";
import ContainerList from "./components/ContainerList";
import Navbar from "./components/Navbar";
import RunningContainers from "./pages/RunningContainers";
import ContainerData from "./components/ContainerData";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ContainerList />} />
        <Route path="/running_containers" element={<RunningContainers />} />
        <Route path="/running_containers/:conId" element={<ContainerData />} />

        <Route path="/login" element={<Login />} />

        {/* <Route path="running_containers/:id" element={  } / > */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
