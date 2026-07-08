import React, { useState } from 'react';

function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px' }}>
      <button onClick={prevSlide}>Left</button>
      <img src={images[activeIndex]} alt="Carousel view" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
      <button onClick={nextSlide}>Right</button>
    </div>
  );
}

export default Carousel;