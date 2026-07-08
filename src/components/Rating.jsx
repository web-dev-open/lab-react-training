import React from 'react';

function Rating({ children }) {
  const ratingValue = Math.round(Number(children));
  const starString = '★'.repeat(ratingValue) + '☆'.repeat(5 - ratingValue);

  return (
    <div style={{ fontSize: '24px', margin: '5px' }}>
      {starString}
    </div>
  );
}

export default Rating;