import { useState } from "react";
import SingleColorPicker from "../SingleColorPicker/SingleColorPicker";
import "./RGBColorPicker.css";

function RGBColorPicker() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div className="rgb-color-picker">
      <SingleColorPicker color="r" value={r} onChange={setR} />
      <SingleColorPicker color="g" value={g} onChange={setG} />
      <SingleColorPicker color="b" value={b} onChange={setB} />

      <div
        className="combined-color-box"
        style={{ backgroundColor: `rgb(${r},${g},${b})` }}
      >
        rgb({r},{g},{b})
      </div>
    </div>
  );
}

export default RGBColorPicker;
