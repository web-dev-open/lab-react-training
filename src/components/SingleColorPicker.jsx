import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
      <div style={{
        width: '30px',
        height: '30px',
        marginRight: '10px',
        border: '1px solid black',
        backgroundColor: `rgb(${color === 'r' ? value : 0}, ${color === 'g' ? value : 0}, ${color === 'b' ? value : 0})`
      }} />
      <span style={{ textTransform: 'uppercase', marginRight: '10px', fontWeight: 'bold' }}>{color}:</span>
      <input 
        type="number" 
        min="0" 
        max="255" 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '60px' }}
      />
    </div>
  );
}

export default SingleColorPicker;