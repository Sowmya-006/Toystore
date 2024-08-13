// src/pages/AddressDetails.jsx
import React from "react";
import './Address.css';
import { useNavigate } from "react-router-dom";

const AddressDetails = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="address-details">
      <div className="form-container">
        <h2>ADD YOUR ADDRESS</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
     
          <div className="form-group">
            <label htmlFor="phone">PHONE</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="address">HOUSE/FLAT NO. & ADDRESS</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>
          <div className="form-group">
            <label htmlFor="city">CITY/STATE</label>
            <input type="text" id="city" placeholder="Enter your city/state" />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">PINCODE</label>
            <input type="text" id="pincode" placeholder="Enter your pincode" />
          </div>
          <button
            type="submit"
            className="confirm-button"
            onClick={() => handleNavigation("/payment")}
          >
            CONFIRM
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressDetails;
