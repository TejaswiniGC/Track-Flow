import React from "react";
import "./App.css"; // Optional: For styling

const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "lavender", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 1rem" }}>
      
      {/* Left Section: Logo */}
      <div className="logo-container">
        <a href="https://theaffordableorganicstore.com/" className="custom-logo-link">
          <img src="https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2022/06/coloured_logo_ai_2.png?fit=974%2C974&amp;ssl=1"
            alt="The Affordable Organic Store" className="custom-logo" />
        </a>
      </div>

      {/* Center Section: Title (Absolute Centering) */}
      <div style={{ position: "absolute", left: "17%", transform: "translateX(-50%)" }}>
        <h1 className="title" style={{ margin: 0 }}>Plant Data Collection</h1>
      </div>

      {/* Right Section: Navigation */}
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="/" style={{ textDecoration: "none", color: "#007bff" }}>Home</a>
        <a href="/damaged" style={{ textDecoration: "none", color: "#737d86" }}>Damaged</a>
        <a href="/recovery" style={{ textDecoration: "none", color: "#28a745" }}>Recovery</a>
        <a href="/offline-sold" style={{ textDecoration: "none", color: "#e4931a" }}>Offline-Sold-Inventory</a>
        <a href="/inbound-items" style={{ textDecoration: "none", color: "#3a6491" }}>Inbound-Inventory</a>
      </div>

    </div>
  );
};

export default Header;
