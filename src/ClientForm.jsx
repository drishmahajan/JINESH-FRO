import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Form.css";

export default function ClientForm() {

  const navigate = useNavigate();   

  const [formData, setFormData] = useState({
    clientName: "",
    pan: "",
    gstin: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://jinesh-2.onrender.com/api/client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/success"); 
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Client Registration Form</h2>

      <form onSubmit={handleSubmit} className="client-form">

        <div className="form-group">
          <label>Client Name</label>
          <input 
            type="text" 
            name="clientName" 
            value={formData.clientName}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>PAN</label>
          <input 
            type="text" 
            name="pan" 
            value={formData.pan}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>GSTIN</label>
          <input 
            type="text" 
            name="gstin" 
            value={formData.gstin}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input 
            type="text" 
            name="mobile" 
            value={formData.mobile}
            onChange={handleChange}
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>

      </form>
    </div>
  );
}
