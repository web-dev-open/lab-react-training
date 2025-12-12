import "./SingleColorPicker.css";

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div className="single-color-picker">
      <label>{color.toUpperCase()}:</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div
        className="color-box"
        style={{
          backgroundColor:
            color === "r"
              ? `rgb(${value},0,0)`
              : color === "g"
              ? `rgb(0,${value},0)`
              : `rgb(0,0,${value})`,
        }}
      ></div>
    </div>
  );
}

export default SingleColorPicker;
