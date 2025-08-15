import React from "react";
import "./BoxColor.css";

function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white",
  };

  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div className="box-color" style={divStyle}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;
