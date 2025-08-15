import React, { useState } from "react";
import "./ClickablePicture.css";

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? imgClicked : img}
      alt="Clickable"
      className="clickable-picture"
      onClick={() => setClicked(!clicked)}
    />
  );
}

export default ClickablePicture;
