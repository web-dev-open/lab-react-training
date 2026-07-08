import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(150);
  const [bValue, setBValue] = useState(0);

  return (
    <div style={{ border: '1px solid black', padding: '15px', margin: '10px', width: 'fit-content' }}>
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />
      
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '1px solid black',
          marginRight: '15px',
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`
        }} />
        <strong>rgb({rValue}, {gValue}, {bValue})</strong>
      </div>
    </div>
  );
}

export default RGBColorPicker;