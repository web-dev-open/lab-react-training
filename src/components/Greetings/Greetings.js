import React from "react";
import "./Greetings.css";

function Greetings({ lang, children }) {
  const greetingsMap = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div className="greetings">
      {greetingsMap[lang] || "Hello"} {children}
    </div>
  );
}

export default Greetings;
