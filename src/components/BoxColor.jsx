import React from 'react';

function BoxColor({ r, g, b }) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  const hexValue = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

  
  const textColor = (r + g + b) > 382 ? 'black' : 'white';

  return (
    <div style={{
      backgroundColor: `rgb(${r},${g},${b})`,
      color: textColor,
      border: '1px solid black',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      rgb({r},{g},{b}) <br />
      {hexValue}
    </div>
  );
}

export default BoxColor;