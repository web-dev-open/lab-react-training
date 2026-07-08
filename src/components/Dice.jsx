import React, { useState } from 'react';

function Dice() {
  const [diceValue, setDiceValue] = useState(() => Math.floor(Math.random() * 6) + 1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return; 

    setIsRolling(true);
    setDiceValue(null); 

    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
      setIsRolling(false);
    }, 1000);
  };

  
  const renderDots = () => {
    if (diceValue === null) return null; 

    const layouts = {
      1: [{ gridArea: '2 / 2' }],
      2: [{ gridArea: '1 / 1' }, { gridArea: '3 / 3' }],
      3: [{ gridArea: '1 / 1' }, { gridArea: '2 / 2' }, { gridArea: '3 / 3' }],
      4: [{ gridArea: '1 / 1' }, { gridArea: '1 / 3' }, { gridArea: '3 / 1' }, { gridArea: '3 / 3' }],
      5: [{ gridArea: '1 / 1' }, { gridArea: '1 / 3' }, { gridArea: '2 / 2' }, { gridArea: '3 / 1' }, { gridArea: '3 / 3' }],
      6: [{ gridArea: '1 / 1' }, { gridArea: '1 / 3' }, { gridArea: '2 / 1' }, { gridArea: '2 / 3' }, { gridArea: '3 / 1' }, { gridArea: '3 / 3' }],
    };

    return layouts[diceValue].map((style, index) => (
      <div
        key={index}
        style={{
          ...style,
          width: '18px',
          height: '18px',
          backgroundColor: '#333',
          borderRadius: '50%',
          boxShadow: 'inset 0 2px 2px rgba(0,0,0,0.4)'
        }}
      />
    ));
  };

  const diceStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#fff',
    border: '3px solid #ccc',
    borderRadius: '18px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    padding: '12px',
    boxSizing: 'border-box',
    cursor: isRolling ? 'not-allowed' : 'pointer',
    boxShadow: isRolling 
      ? '0 4px 6px rgba(0,0,0,0.1)' 
      : '0 8px 16px rgba(0,0,0,0.15), inset 0 -4px 8px #eee',
    transition: 'transform 0.1s ease, box-shadow 0.2s ease',
    transform: isRolling ? 'scale(0.95) rotate(5deg)' : 'scale(1)',
    userSelect: 'none'
  };

  return (
    <div style={{ margin: '20px' }}>
      <div style={diceStyle} onClick={rollDice}>
        {renderDots()}
      </div>
    </div>
  );
}

export default Dice;