import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="carousel">
      <button onClick={prev}>Left</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={next}>Right</button>
    </div>
  );
}

export default Carousel;
