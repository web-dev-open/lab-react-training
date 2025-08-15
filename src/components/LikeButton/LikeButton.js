import React, { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [count, setCount] = useState(0);

  return (
    <button
      className="like-button"
      style={{ backgroundColor: colors[count % colors.length] }}
      onClick={() => setCount(count + 1)}
    >
      {count} Likes
    </button>
  );
}

export default LikeButton;
