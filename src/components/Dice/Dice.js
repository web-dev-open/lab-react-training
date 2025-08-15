import React, { useState } from "react";
import "./Dice.css";

function Dice() {
  const getRandomDice = () => Math.floor(Math.random() * 6) + 1;

  const [diceValue, setDiceValue] = useState(getRandomDice());

  const handleClick = () => {
    setDiceValue(null); // null will represent empty dice
    setTimeout(() => {
      setDiceValue(getRandomDice());
    }, 1000);
  };

  const diceImg = diceValue
    ? `../../assets/images/dice${diceValue}.png`
    : `../../assets/images/dice-empty.png`;

  return (
    <img src={diceImg} alt="Dice" className="dice" onClick={handleClick} />
  );
}

export default Dice;
