import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Select Plant Type</h2>
      <div className="button-container">
        <button onClick={() => navigate("/damaged")}>Damaged Plants</button>
        <button onClick={() => navigate("/recovery")}>Recovery Plants</button>
        <button onClick={() => navigate("/offline-sold")}>Offline Sold</button>
        <button onClick={() => navigate("/inbound-items")}>Inbound Items</button>
      </div>
    </div>
  );
};

export default Home;
