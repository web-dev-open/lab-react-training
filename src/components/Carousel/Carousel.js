import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleRight = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button onClick={handleLeft}>Left</button>
      <img src={images[index]} alt="Carousel" />
      <button onClick={handleRight}>Right</button>
    </div>
  );
}

export default Carousel;
