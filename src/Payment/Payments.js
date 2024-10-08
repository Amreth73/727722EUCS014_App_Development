import React, { useState } from "react";
import "./payment.css";
import { useLocation, useNavigate } from "react-router-dom";
import payment from "./payment1.json";
import success from "./pay2.json";
import Lottie from "lottie-react";
import { usePrice } from "../day3/PriceProvider";

const Payments = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [cardNumber, setcardNumber] = useState("");
  const [cardHolderName, setcardHolderName] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [cvv, setcvv] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { recipientName, customMessage } = location.state || {};
  const { price } = usePrice();

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    const formattedValue = value.replace(/(.{4})/g, "$1 ").trim();
    setcardNumber(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      navigate("/reciept", {
        state: { recipientName, customMessage, cardHolderName, amount: "500" },
      });
    }, 2000);
  };

  return (
    <div className="payImg">
      <Lottie
        animationData={payment}
        loop={true}
        style={{ width: "600px", height: "600px" }}
      />
      <div className={`success-overlay ${showSuccess ? "show" : ""}`}>
        <Lottie
          animationData={success}
          loop={false}
          style={{ width: "600px", height: "600px" }}
        />
      </div>
      <div className="credit-card-container">
        {/* <Navbar /> */}
        <div className="credit-card">
          <div className="card-front">
            <div className="card-logo">VISA</div>
            <div className="card-number">{cardNumber}</div>
            <div className="card-holder">
              <label>Card Holder</label>
              <div className="hold-name">{cardHolderName}</div>
            </div>
            <div className="card-expiry">
              <label>Expires</label>
              <div>{expiryDate}</div>
            </div>
          </div>
        </div>
        <form className="credit-card-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolderName}
              onChange={(e) => setcardHolderName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="month"
              id="expiryDate"
              placeholder="MM/YY"
              required
              onChange={(e) => setexpiryDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="password"
              id="cvv"
              placeholder="123"
              maxLength={3}
              required
              onChange={(e) => setcvv(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amt">Amount</label>
            <input
              type="number"
              id="amt"
              maxLength={3}
              required
              value={price}
              readOnly
            />
          </div>
          <button type="submit" className="pay-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payments;
