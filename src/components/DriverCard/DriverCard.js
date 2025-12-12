import "./DriverCard.css";
import Rating from "../Rating/Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} – {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
