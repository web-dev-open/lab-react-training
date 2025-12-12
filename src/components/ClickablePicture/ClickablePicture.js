import "./ClickablePicture.css";
import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      className="clickable-picture"
      src={clicked ? imgClicked : img}
      alt="clickable"
      onClick={() => setClicked(!clicked)}
    />
  );
}

export default ClickablePicture;
