import "./NumbersTable.css";

function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table">
      {numbers.map((n) => (
        <div
          key={n}
          className="number"
          style={{ backgroundColor: n % 2 === 0 ? "red" : "white" }}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
