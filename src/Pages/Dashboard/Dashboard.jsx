import React, {useState} from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Household from "../../Pages/Household/Household";
import Resident from "../../Pages/Resident/Resident";
import Addresident from "../Addresident/Addresident";
import Report from "../../Pages/Report/Report";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import Blackboard from "./Blackboard";
import axios from "axios";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    return navigate("/");
  }
  
  const fetchData = async () => {
    try {
      const response = axios.get(
        "http://localhost:8000/api/v1/accounts/dashboard/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
      setError(error);
    }

  }
  if (loading) {
    fetchData();
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Sidebar />
      <div className="dashcontainer" style={{width: '100%'}}>
        <div className="dashboard">
          <h1> </h1>

          <Routes>
            <Route path="" element={<Blackboard />} />
            <Route path="household" element={<Household />} />
            <Route path="resident" element={<Resident />} />
            <Route path="addresident" element={<Addresident />} />
            <Route path="map" element={<Map />} />
            <Route path="profile" element={<Profile />} />
            <Route path="report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
