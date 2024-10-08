import React from "react";
import "./Reciept.css";

import { usePrice } from "../day3/PriceProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Receipt = () => {
  const { price } = usePrice();
  const now = new Date();
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const currentDate = now.toLocaleDateString("en-US", options);
  const location = useLocation();
  const navigate = useNavigate();
  const receipt = location.state || {};
  const min = 100000;
  const max = 999999;
  const recid = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="rec-who">
      <div className="receipt-container">
        <h2 style={{ color: "black" }}>Payment Receipt</h2>
        <div className="receipt">
          <div className="receipt-header">
            <h3 style={{ color: "black" }}>Receipt ID: #{recid}</h3>
            <p>Date: {currentDate}</p>
          </div>
          <div className="receipt-body">
            <div className="receipt-item">
              <span>Payed By:</span>
              <span>{receipt.cardHolderName}</span>
            </div>
            <div className="receipt-item">
              <span>Recipient ID:</span>
              <span>{"#" + recid}</span>
            </div>
            <div className="receipt-item">
              <span>Custom Message:</span>
              {/* <span>{receipt.customMessage}</span> */}
              <span>Payment Successfull</span>
            </div>
            <div className="receipt-item">
              <span>Total Amount:</span>
              <span>${price}</span>
            </div>
          </div>
        </div>
        <button
          className="btns"
          onClick={() => {
            navigate("/");
            console.log(receipt);
          }}
        >
          Return to home page
        </button>
      </div>
    </div>
  );
};

export default Receipt;
