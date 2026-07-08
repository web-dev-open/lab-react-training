import React from 'react';

function Greetings({ lang, children }) {
  let text = 'Hello';
  if (lang === 'de') text = 'Hallo';
  if (lang === 'fr') text = 'Bonjour';
  if (lang === 'es') text = 'Hola';

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', fontSize: '20px' }}>
      {text} {children}
    </div>
  );
}

export default Greetings;