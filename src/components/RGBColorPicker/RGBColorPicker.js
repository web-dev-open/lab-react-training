import React, { useState } from "react";
import SingleColorPicker from "../SingleColorPicker/SingleColorPicker";
import "./RGBColorPicker.css";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="rgb-color-picker">
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />

      <div
        className="final-color-preview"
        style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}
      >
        rgb({rValue}, {gValue}, {bValue})
      </div>
    </div>
  );
}

export default RGBColorPicker;
