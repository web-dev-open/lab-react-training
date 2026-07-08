import React, { useState } from 'react';

const colorSequence = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const activeColor = colorSequence[likes % colorSequence.length];

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      style={{
        backgroundColor: activeColor,
        color: activeColor === 'yellow' ? 'black' : 'white',
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  );
}

export default LikeButton;