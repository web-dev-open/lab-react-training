import Rating from "../Rating/Rating";
import "./DriverCard.css";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
