import { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
 

export default function Dice() {

  const [dice, setDice] = useState(diceEmpty)

  const randomDice = () => {
    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]
    const random = diceArray[Math.round(Math.random() * 6)]
    console.log(random)
    return random
  }

  const handlerDice = () => {
      if (dice === diceEmpty){
        setDice(randomDice())
      } else {
        setDice(diceEmpty)
        setTimeout( () => {
          setDice(randomDice())
        }, 1000 )
      }
  }

  return (
    <img src={dice} alt="dice" style={{width: 300}} onClick={handlerDice}/> 
  )
}
