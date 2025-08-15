import React from "react";
import "./SingleColorPicker.css";

function SingleColorPicker({ color, value, onChange }) {
  const colorMap = {
    r: `rgb(${value}, 0, 0)`,
    g: `rgb(0, ${value}, 0)`,
    b: `rgb(0, 0, ${value})`,
  };

  return (
    <div className="single-color-picker">
      <div
        className="color-preview"
        style={{ backgroundColor: colorMap[color] }}
      ></div>
      <label>
        {color.toUpperCase()}:
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export default SingleColorPicker;
