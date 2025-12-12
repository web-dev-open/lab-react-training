import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <img src={picture} alt={firstName} />

      <div className="IdCard-info">
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height / 100}m</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
