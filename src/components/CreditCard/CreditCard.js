import React from "react";
import "./CreditCard.css";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardTypeImg =
    type === "Visa"
      ? "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
      : "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png";

  const hiddenNumber = `•••• •••• •••• ${number.slice(-4)}`;

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
      <div className="credit-card-logo">
        <img src={cardTypeImg} alt={type} />
      </div>
      <div className="credit-card-number">{hiddenNumber}</div>
      <div className="credit-card-info">
        <span>
          Expires {expirationMonth.toString().padStart(2, "0")}/
          {expirationYear.toString().slice(-2)}
        </span>
        <span className="credit-card-bank">{bank}</span>
      </div>
      <div className="credit-card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
