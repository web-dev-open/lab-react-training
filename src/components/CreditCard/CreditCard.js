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
      ? "/assets/images/visa.png"
      : "/assets/images/master-card.svg";

  const maskedNumber = "•••• •••• •••• " + number.slice(-4);

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
      <img className="card-logo" src={cardTypeImg} alt={type} />

      <div className="card-number">{maskedNumber}</div>

      <div className="exp-bank">
        <span>
          Expires {String(expirationMonth).padStart(2, "0")}/
          {String(expirationYear).slice(-2)}
        </span>
        <span className="bank">{bank}</span>
      </div>

      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
