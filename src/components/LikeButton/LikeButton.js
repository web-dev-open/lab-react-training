import { useState } from "react";
import "./LikeButton.css";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function LikeButton() {
  const [count, setCount] = useState(0);

  const color = colors[count % colors.length];

  return (
    <button
      className="like-button"
      style={{ backgroundColor: color }}
      onClick={() => setCount(count + 1)}
    >
      {count} Likes
    </button>
  );
}

export default LikeButton;
