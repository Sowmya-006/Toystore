// src/pages/OrderPlaced.js
import React from 'react';
import './OrderPlaced.css'; // Ensure to import the CSS file

const OrderPlaced = () => {
  return (
    <div className="order-placed-container">
      <div className="order-placed-content">
        <div className="order-placed-image">
          <img src="https://media4.giphy.com/media/pIj4Yg3dudUddwGbHO/giphy.gif" alt="Thank You" />
        </div>
        <div className="order-placed-message">
          <div className="order-placed-icon">
          </div>
          <h1>Thank you for choosing us!🎉</h1>
          <p>Your order has been successfully placed. We appreciate your purchase and hope to see you again soon!</p>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
