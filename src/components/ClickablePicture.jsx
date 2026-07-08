import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  
  const [showGlasses, setShowGlasses] = useState(false);

  const toggleImage = () => {
    setShowGlasses(!showGlasses);
  };

  return (
    <div style={{ margin: '20px' }}>
      <img
        src={showGlasses ? imgClicked : img} 
        alt={showGlasses ? "Face with glasses" : "Face"}
        onClick={toggleImage}
        style={{ 
          cursor: 'pointer', 
          width: '200px', 
          height: '200px',
          objectFit: 'cover', 
          borderRadius: '50%', 
          transition: 'all 0.15s ease-in-out', 
          border: '3px solid black',
          userSelect: 'none', 
          boxShadow: showGlasses ? '0 8px 15px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
}

export default ClickablePicture;