export default function SingleColorPicker({ color, value, onChange }) {

  const getColorBox = (color, value) => {
    return {
      backgroundColor: `rgb(${color === "r" ? value : 0}, ${color === "g" ? value : 0}, ${color === "b" ? value : 0})`,
      width: '20px',
      height: '20px',
      display: 'inline-flex',
      border: '2px solid black',
      verticalAlign: 'middle'
     }
  }

  return (
    <div>
      <p style={{verticalAlign: 'middle'}}><span style={getColorBox(color, value)}></span> {color.toUpperCase()}: <input type="number" value={value} onChange={onChange} min={0} max={255} /></p>
    </div>
  )
}
