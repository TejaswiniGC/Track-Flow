import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Damaged from "./Damaged";
import Recovery from "./Recovery";
import OfflineSold from "./OfflineSold";
import InboundItems from "./InboundItems";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="cards-container">
        {/* Damaged Plant Card */}
        <div className="card" onClick={() => navigate("/damaged")}>
          <h2>Damaged Plants</h2>
          <p>Report damaged plants here.</p>
        </div>

        {/* Recovery Plant Card */}
        <div className="card" onClick={() => navigate("/recovery")}>
          <h2>Recovery Plants</h2>
          <p>Report recovery plants here.</p>
        </div>

        {/* Offline Sold Card */}
        <div className="card" onClick={() => navigate("/offline-sold")}>
          <h2>Offline Sold Inventory</h2>
          <p>Record offline sales details.</p>
        </div>

        {/* Inbound Items Card */}
        <div className="card" onClick={() => navigate("/inbound-items")}>
          <h2>Inbound Inventory</h2>
          <p>Log inbound inventory details.</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/damaged" element={<Damaged />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/offline-sold" element={<OfflineSold />} />
        <Route path="/inbound-items" element={<InboundItems />} />
      </Routes>
    </Router>
  );
};

export default App;
