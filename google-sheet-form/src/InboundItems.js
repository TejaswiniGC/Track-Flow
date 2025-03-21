import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const InboundItems = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    personName: "",
    email: "",
    itemName: "",
    poNumber: "",
    quantityOrdered: "",
    quantityReceived: "",
    quantityUpdate: "",
    reasonForUpdate: "",
    comments: "",
    type: "inboundItems",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCancel = () => navigate("/");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    if (value >= 0 || value === "") {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyuwpFYly-5VpX9ImBUIIA3Ip7OLIutSsNOpZX1i_GCKwSkO_BHkehiiEspDxcTBVZjXQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 1000);

      setFormData({
        date: "",
        personName: "",
        email: "",
        itemName: "",
        poNumber: "",
        quantityOrdered: "",
        quantityReceived: "",
        quantityUpdate: "",
        reasonForUpdate: "",
        comments: "",
        type: "inboundItems",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "145vh", backgroundColor: "#f5f5f5" }}>
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", width: "500px" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>Inbound Inventory Details</h2>

        {showSuccessMessage && <div className="success-message">Data saved successfully!</div>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div className="form-group">
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Person Name:</label>
            <input type="text" name="personName" value={formData.personName} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Item Name:</label>
            <input type="text" name="itemName" value={formData.itemName} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>PO Number:</label>
            <input type="text" name="poNumber" value={formData.poNumber} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Quantity Ordered:</label>
            <input type="number" name="quantityOrdered" value={formData.quantityOrdered} onChange={handleNumberChange} required />
          </div>

          <div className="form-group">
            <label>Quantity Received:</label>
            <input type="number" name="quantityReceived" value={formData.quantityReceived} onChange={handleNumberChange} required />
          </div>

          <div className="form-group">
            <label>Quantity Update:</label>
            <input type="number" name="quantityUpdate" value={formData.quantityUpdate} onChange={handleNumberChange} required />
          </div>

          <div className="form-group">
            <label>Reason for less/more to update?</label>
            <textarea name="reasonForUpdate" value={formData.reasonForUpdate} onChange={handleInputChange} rows="2" required></textarea>
          </div>

          <div className="form-group">
            <label>Comments:</label>
            <textarea name="comments" value={formData.comments} onChange={handleInputChange} rows="2"></textarea>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InboundItems;
