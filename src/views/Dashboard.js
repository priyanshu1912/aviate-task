import React from "react";
import Navbar from "../components/Navbar";
import PieChart from "../components/PieChart";
import UpcomingTable from "../components/UpcomingTable";
import Applied from "./Applied";

function Dashboard() {
  return (
    <div>
      <Navbar title="Dashboard" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          margin: "0 auto",
        }}
      >
        <UpcomingTable />
        <PieChart />
      </div>
      <Applied />
    </div>
  );
}

export default Dashboard;
