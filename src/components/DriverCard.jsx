import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div style={{ backgroundColor: '#455eb5', color: 'white', borderRadius: '10px', display: 'flex', padding: '15px', margin: '15px', alignItems: 'center', justifyContent: 'center' }}>
      <img src={img} alt={name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }} />
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 5px 0' }}>{name}</h3>
        <Rating>{rating}</Rating>
        <p style={{ margin: '5px 0 0 0' }}>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;