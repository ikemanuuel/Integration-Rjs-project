import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Blackboard = () => {
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
    <div className="blackboard">
      <h1> Dashboard </h1>
    </div>
  );
};

export default Blackboard;
