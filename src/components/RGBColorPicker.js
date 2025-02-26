import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

export default function RGBColorPicker() {

  const [rValue, setRValue] = useState(134)
  const [gValue, setGValue] = useState(231)
  const [bValue, setBValue] = useState(156)

  const styleBox = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
    width: '20px',
    height: '20px',
    display: 'inline-flex',
    border: '2px solid black',
    verticalAlign: 'middle'
  }

  const handleRValue = (e) => {
    setRValue(e.target.value)
  }

  const handleGValue = (e) => {
    setGValue(e.target.value)
  }

  const handleBValue = (e) => {
    setBValue(e.target.value)
  }

  return (
    <div style={{border: '1px solid black', width: '300px', padding: '10px', margin: '10px'}}>
    <SingleColorPicker 
      value={rValue}
      color='r'
      onChange={handleRValue}
    />
    <SingleColorPicker 
      value={gValue}
      color='g'
      onChange={handleGValue}
    />
    <SingleColorPicker 
      value={bValue}
      color='b'
      onChange={handleBValue}
    />
    <p style={{verticalAlign: 'middle'}}><span style={styleBox}></span> rgb({rValue},{gValue},{bValue}) </p>
    </div>
  )
}
