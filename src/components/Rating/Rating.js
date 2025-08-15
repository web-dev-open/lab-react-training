import React from "react";
import "./Rating.css";

function Rating({ children }) {
  const roundedValue = Math.round(children);
  const stars = "★".repeat(roundedValue) + "☆".repeat(5 - roundedValue);

  return <div className="rating">{stars}</div>;
}

export default Rating;
