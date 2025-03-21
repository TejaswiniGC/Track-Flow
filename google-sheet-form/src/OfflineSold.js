import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const OfflineSold = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [personName, setPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [placeOfSale, setPlaceOfSale] = useState("");
  const [comments, setComments] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCancel = () => navigate("/");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !personName || !email || !productName || !productQuantity || !placeOfSale || !comments) {
      alert("All fields are required!");
      return;
    }

    const formData = {
      Date: date,
      PersonName: personName,
      Email: email,
      ProductName: productName,
      ProductQuantity: productQuantity,
      PlaceOfSale: placeOfSale,
      Comments: comments,
      type: "sale",
    };

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

      setDate("");
      setPersonName("");
      setEmail("");
      setProductName("");
      setProductQuantity("");
      setPlaceOfSale("");
      setComments("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "110vh", backgroundColor: "#f5f5f5" }}>
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", width: "500px" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>Offline Sales Details</h2>

        {showSuccessMessage && <div className="success-message">Data saved successfully!</div>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Person Name:</label>
            <input type="text" value={personName} onChange={(e) => setPersonName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Product Name:</label>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Product Quantity:</label>
            <input type="number" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} min="0" required />
          </div>

          <div className="form-group">
            <label>Place of Sale:</label>
            <input type="text" value={placeOfSale} onChange={(e) => setPlaceOfSale(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Comments:</label>
            <textarea value={comments} onChange={(e) => setComments(e.target.value)} required />
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              type="button"
              onClick={handleCancel}
              style={{
                padding: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                background: "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
                transition: "0.3s",
                flex: 1,
              }}
              onMouseOver={(e) => (e.target.style.background = "#6c757d")}
              onMouseOut={(e) => (e.target.style.background = "gray")}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                padding: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                transition: "0.3s",
                width: "16rem",
              }}
              onMouseOver={(e) => (e.target.style.background = "#218838")}
              onMouseOut={(e) => (e.target.style.background = "#28a745")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfflineSold;
