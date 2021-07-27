import React from "react";
import RoomSalesRevenue from "../../components/Dashboard/RoomSalesRevenue";
import { StylDashboard } from "../../styles/containers/Dashboard/StyleDashboard";

const Dashboard = () => {
  return (
    <StylDashboard className="dashboard">
      <h3 className="dashboard-title">Приборная панель</h3>
      <div className="dashboard-items">
        <RoomSalesRevenue />
      </div>
    </StylDashboard>
  );
};

export default Dashboard;
