import "./Rating.css";

function Rating({ children }) {
  const value = Math.round(Number(children));
  const stars = "★★★★★☆☆☆☆☆".slice(5 - value, 10 - value);

  return <div className="rating">{stars}</div>;
}

export default Rating;
