import React from 'react';

function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '500px', 
    margin: '20px auto',
    boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      {numbers.map((num) => {
        const isEven = num % 2 === 0;
        
        const squareStyle = {
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '28px',
          fontFamily: 'sans-serif',
          fontWeight: 'normal',
          backgroundColor: isEven ? '#e12d1b' : '#ffffff', 
          color: 'black',
          
          border: '3px solid black', 
          boxSizing: 'border-box',
          marginRight: '-3px',
          marginBottom: '-3px'
        };

        return (
          <div key={num} style={squareStyle}>
            {num}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;