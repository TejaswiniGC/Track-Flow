import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom"

const products = [
  "Money Plant Sapling (1pc)",
  "Areca Palm Saplings (3pcs)",
  "Betel Paan Sapling (1pc)",
  "Temple Tree Champa Cutting (1pc)",
  "Mirchi Meri Green Palm Plant Sapling (1pc)",
  "Croton Codiaeum Variegatum (Petra) Sapling (1pc)",
  "Golden Cypress Plant Sapling (1pc)",
  "Jade Plant Sapling (1pc)",
  "Song Of India Plant Sapling (1pc)",
  "Syngonium Plant Sapling (1pc)",
  "Golden Thuja Plant Sapling (1pc)",
  "Golden Money Plant Sapling (1pc)",
  "Hibiscus Plant Sapling (1pc)",
  "ZZ Plant Sapling (1pc)",
  "Ficus Safari Plant Sapling (1pc)",
  "Bougainvillea Plant Sapling (1pc)",
  "Rubber Plant Sapling (1pc)",
  "Rare Black ZZ Plant Sapling (1pc)",
  "Kalanchoe Plant Sapling (1pc)",
  "Krishna Kamal Plant Sapling (1pc)",
  "Aloe Vera Plant Sapling (1pc)",
  "Peace Lily Plant Sapling (1pc)",
  "Snake Plant Sapling (1pc)",
  "Philodendron Wenlandii Plant Sapling (1pc)",
  "Purple Heart Plant Sapling (1pc)",
  "Spider Plant Sapling (1pc)",
  "Nimbu Croton Plant Sapling (1pc)",
  "Alocasia Velvet Black Plant Sapling (1pc)",
  "Dieffenbachia Camille Plant Sapling (1pc)",
  "Philodendron Golden Plant Sapling (1pc)",
  "Desert Rose Adenium Plant Sapling (1pc)",
  "Elephant Ear Alocasia Cucullata Plant Sapling (1pc)",
  "Dwarf Fiddle Leaf Fig Plant Sapling (1pc)",
  "Dracaena Golden Milky Plant Sapling (1pc)",
  "Laxmi Kamal Haworthia Succulent Plant (1pc)",
  "Wandering Jew Plant Sapling (1pc)",
  "Crassula Ovata Plant Sapling (1pc)",
  "Kalanchoe Millotii Succulent Plant (1pc)",
  "Rheo Oyster Plant Sapling (1pc)",
  "Calathea Never Never Plant Sapling (1pc)",
  "Aloe White Succulent Plant (1pc)",
  "Aglaonema Lipstick Plant Sapling (1pc)",
  "Christmas Cactus Plant Sapling (1pc)",
  "Anthurium Chocolate Plant Sapling (1pc)",
  "Calathea Burle Marx Prayer Plant Sapling (1pc)",
  "Pineapple Plant Sapling (1pc)",
  "Marble Money Plant Sapling (1pc)",
  "Earth Star Plant Cryptanthus Sapling (1pc)",
  "Ficus Microcarpa Bonsai Plant Sapling (1pc)",
  "English Ivy Plant Sapling (1pc)",
  "Fairytale Cactus Elongated Sapling (1pc)",
  "Monstera Broken Heart Plant Sapling (1pc)",
  "Caladium Plant Sapling (1pc)",
  "Lucky Bamboo Plant Saplings (3pcs)",
  "Aloe Vera Star Indoor Succulent Plant (1pc)",
  "Philodendron Oxycardium Golden Plant Sapling (1pc)",
  "Philodendron Oxycardium Green Plant Sapling (1pc)",
  "String of Dolphins Plant Sapling (1pc)",
  "Italian Oregano Plant Sapling (1pc)",
  "Alocasia Amazonica Plant Sapling (1pc)",
  "Alocasia Pola Small Leaf Plant Sapling (1pc)",
  "Echeveria Succulent Indoor Plant (1pc)",
  "Echeveria Mixed Succulent Indoor Plant (1pc)",
  "Black Money Plant Sapling (1pc)",
  "Moss Rose Plant Sapling (1pc)",
  "Philodendron Birkin Plant Sapling (1pc)",
  "Philodendron Moonshine Plant Sapling (1pc)",
  "String of Bananas Plant Sapling (1pc)",
  "Arabian Jasmine Plant Sapling (1pc)",
  "Peperomia Green Plant Sapling (1pc)",
  "Madhumalti Rangoon Plant Sapling (1pc)",
  "Kaner, Nerium Oleander Plant Sapling (1pc)",
  "Rose Plant Sapling (1pc)",
  "Dendrobium Orchid Plant Sapling (1pc)",
  "Homalomena Plant Sapling (1pc)",
  "Strawberries Plant Sapling (1pc)",
  "Peperomia Watermelon Plant Sapling (1pc)",
  "Dragon Fruit Sapling (1pc)",
  "Fittonia White Sapling (1pc)",
  "Minima Jasmine Summer Sunset Plant Sapling (1pc)",
  "Gerbera Flower Sapling (1pc)",
  "Ixora Plant Sapling (1pc)",
  "Jasmine Plant Sapling (1pc)",
  "Monstera Deliciosa Plant (1pc)",
  "Curry Leaves Sapling (1pc)",
  "Calathea Roseopicta Sapling (1pc)",
  "Green Fern Plant Sapling (1pc)",
  "Tillandsia Aeranthos Indoor Air Plant (1pc)",
  "Tillandsia Lonantha Air Plant Live (1pc)",
  "Portulaca Plant Sapling (1pc)",
  "Fittonia Red Sapling (1pc)",
  "Fluffy Fern Plant Sapling (1pc)",
  "Coleus Plant Sapling (1pc)",
  "Philodendron Oxycardium Variegated Plant Sapling (1pc)",
  "Wall Creeper Plant sapling (1pc)",
  "Peperomia Black Plant Sapling (1pc)",
  "Syngonium Wendlandii Plant Sapling (1pc)",
  "Philodendron Xanadu Plant Sapling (1pc)",
  "Barrel Cactus Sapling (1pc)",
  "Lithops Plant Sapling (1pc)",
  "Silver Money Plant Sapling (1pc)",
  "Philodendron Oxycordia Micans Plant Sapling (1pc)",
  "Peperomia Creeper Plant Sapling (1pc)",
  "Monstera Deliciosa Plant Sapling (1pc)",
  "Philodendron Red Plant Sapling (1pc)",
  "Papaya Plant Sapling (1pc)",
  "Banana Plant Sapling (1pc)",
  "Peperomia Obtusifolia Variegated Sapling (1pc)",
  "Parijat Harsingar Plant Sapling (1pc)",
  "Anthurium Red Plant Sapling (1pc)",
  "Bunny Ear Cactus Plant (1pc)",
  "Alocasia Silver Dragon Plant Sapling (1pc)",
  "Chrysanthemum Mix Plant Sapling (1pc)",
  "Monstera Dragon Tail Plant Sapling (1pc)",
  "Aglaonema Snow White Plant Sapling (1pc)",
  "Alocasia Wenti Plant Sapling (1pc)",
  "Aglaonema Pink Valentine Plant Sapling (1pc)",
  "Philodendron Billietiae Plant Sapling (1pc)",
  "Philodendron Black Cardinal Plant Sapling (1pc)",
  "Gardenia Ananta Plant Sapling (1pc)",
  "Anthurium Pink Plant Sapling (1pc)",
  "Syngonium Pink Plant Sapling (1pc)",
  "Christmas Tree Plant Sapling (1pc)",
  "Bird of Paradise Plant Sapling (1pc)",
  "Philodendron Pink Princess Plant Sapling (1pc)",
  "Philodendron White Princess Plant Sapling (1pc)",
  "Red Sandal Wood Plant Sapling (1pc)",
  "Philodendron Florida Ghost Plant Sapling (1pc)",
  "Brahma Kamal Plant Sapling (1pc)",
  "Philodendron Gloriosum Plant Sapling (1pc)",
  "Mini Brazilian Lucky Wood Plant (1pc)",
  "Marigold Plant Sapling (1pc)",
  "Dianthus Plant Sapling (1pc)",
  "Pansy Plant Sapling (1pc)",
  "Texas Sage Plant Sapling (1pc)",
  "Philodendron White Wizard Plant Sapling (1pc)"
];

const Damaged = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [personName, setPersonName] = useState("");
  const [comments, setComments] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const handleCancel = () => {
    navigate("/"); 
  };

  const handleProductChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    if (value.trim() === "") {
      setFilteredProducts(products);  
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    setShowDropdown(true);
  };

  const handleSelectProduct = (product) => {
    setProductName(product);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Email: email,
      ProductName: productName,
      Quantity: quantity,
      Date: date,
      PersonName: personName,
      Comments: comments,
      type: "damaged"
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyuwpFYly-5VpX9ImBUIIA3Ip7OLIutSsNOpZX1i_GCKwSkO_BHkehiiEspDxcTBVZjXQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1000);

      setEmail("");
      setProductName("");
      setQuantity("");
      setDate("");
      setPersonName("");
      setComments("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", backgroundColor: "#f5f5f5" }}>
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", width: "500px" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>Damaged Products</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

          {showSuccessMessage && (
            <div className="success-message">
              Data saved successfully!
            </div>
          )}

          <div>
            <label>Date:</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div>
            <label>Person Name:</label>
            <input 
              type="text" 
              value={personName} 
              onChange={(e) => setPersonName(e.target.value)} 
              required 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div style={{ position: "relative" }}>
            <label>Product Name:</label>
            <input 
              type="text" 
              value={productName} 
              onChange={handleProductChange} 
              onFocus={() => setShowDropdown(true)} 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
            {showDropdown && filteredProducts.length > 0 && (
              <ul 
                style={{ 
                  listStyle: "none", 
                  margin: 0, 
                  padding: "5px", 
                  position: "absolute", 
                  width: "100%", 
                  background: "white", 
                  border: "1px solid #ccc", 
                  borderRadius: "5px", 
                  maxHeight: "150px", 
                  overflowY: "auto", 
                  zIndex: 10 
                }}>
                {filteredProducts.map((product, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleSelectProduct(product)} 
                    style={{ padding: "8px", cursor: "pointer", borderBottom: "1px solid #eee" }}
                    onMouseOver={(e) => (e.target.style.background = "#f0f0f0")}
                    onMouseOut={(e) => (e.target.style.background = "white")}>
                    {product}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label>Quantity:</label>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
              min="0"
              required 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>

          <div>
            <label>Comments:</label>
            <textarea 
              value={comments} 
              onChange={(e) => setComments(e.target.value)} 
              rows="2" 
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", resize: "none" }}
            />
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

          
          <button type="submit" 
            style={{ 
              padding: "12px", 
              fontWeight: "bold", 
              cursor: "pointer", 
              background: "#28a745", 
              color: "white", 
              border: "none", 
              borderRadius: "5px",
              transition: "0.3s",
              width:"16rem",
            }}
            onMouseOver={(e) => e.target.style.background = "#218838"} 
            onMouseOut={(e) => e.target.style.background = "#28a745"}>
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Damaged;