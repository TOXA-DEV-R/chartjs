import React from "react";
import Dashboard from "./containers/dashboard/Dashboard";
import Sidebar from "./containers/sidebar/Sidebar";
import "./styles/global.scss";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
