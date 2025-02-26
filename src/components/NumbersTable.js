import { useState } from "react"

export default function NumbersTable({ limit }) {

  /*
    Mostrar numeros en pantalla entre 1 y un límite.
    cada número par debe estar rojo

    El componente recibe el numero límite como prop
  */

    const [boxNumber, setBoxNumber] = useState(Array.from({ length: limit }, (_, i) => i + 1))

  const esPar = (num) => {
    if (num % 2 === 0){
      return true
    } 
    return false
  }

  const boxStyle = (pair) => {
    if (pair) {
      return {
        border: '1px solid black',
        padding: '50px',
        backgroundColor: 'red',
        fontSize: '30px'
      }
    } else {
      return {
        border: '1px solid black',
        padding: '50px',
        fontSize: '30px'
      }
    }
  }

  return (
    <div style={{display: "flex", flexWrap: 'wrap', alignItems: 'center',}}>
      {boxNumber.map(element => {
        
      return (
          <div key={element} style={boxStyle(esPar(element))}>{element}</div>
      )
    })}
    </div>
  )
}
