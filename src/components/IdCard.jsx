import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div style={{ display: 'flex', border: '1px solid black', margin: '10px', padding: '10px', alignItems: 'center' }}>
      <img src={picture} alt={`${firstName} ${lastName}`} style={{ marginRight: '15px' }} />
      <div>
        <p style={{ margin: '4px 0' }}><strong>First name:</strong> {firstName}</p>
        <p style={{ margin: '4px 0' }}><strong>Last name:</strong> {lastName}</p>
        <p style={{ margin: '4px 0' }}><strong>Gender:</strong> {gender}</p>
        <p style={{ margin: '4px 0' }}><strong>Height:</strong> {height / 100}m</p>
        <p style={{ margin: '4px 0' }}><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;