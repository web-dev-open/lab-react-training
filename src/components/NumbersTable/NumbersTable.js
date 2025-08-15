import React from "react";
import "./NumbersTable.css";

function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table">
      {numbers.map((num) => (
        <div
          key={num}
          className="numbers-cell"
          style={{ backgroundColor: num % 2 === 0 ? "red" : "white" }}
        >
          {num}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
