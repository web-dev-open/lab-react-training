import { useState } from "react";
import "./Dice.css";

const diceImages = [
  "/assets/images/dice1.png",
  "/assets/images/dice2.png",
  "/assets/images/dice3.png",
  "/assets/images/dice4.png",
  "/assets/images/dice5.png",
  "/assets/images/dice6.png",
];

function Dice() {
  const [dice, setDice] = useState(diceImages[0]);

  const rollDice = () => {
    setDice("/assets/images/dice-empty.png");

    setTimeout(() => {
      const random = Math.floor(Math.random() * 6);
      setDice(diceImages[random]);
    }, 1000);
  };

  return (
    <img
      src={dice}
      alt="dice"
      className="dice"
      onClick={rollDice}
    />
  );
}

export default Dice;
