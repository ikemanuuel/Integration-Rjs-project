import React from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Household from "../../Pages/Household/Household";
import Resident from "../../Pages/Resident/Resident";
import Report from "../../Pages/Report/Report";
import Blackboard from "./Blackboard";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="dashcontainer">
        <div className="dashboard">
          <h1> </h1>

          <Routes>
            <Route path="" element={<Blackboard />} />
            <Route path="household" element={<Household />} />
            <Route path="resident" element={<Resident />} />
            <Route path="report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
