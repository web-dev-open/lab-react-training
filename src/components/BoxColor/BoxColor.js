import './BoxColor.css';

function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = "#" + [r, g, b]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("");

  return (
    <div className="BoxColor" style={{ backgroundColor: rgb }}>
      <p>{rgb}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
