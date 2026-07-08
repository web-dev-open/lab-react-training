import React from 'react';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const lastFourDigits = number.slice(-4);
  const formattedMonth = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
  const formattedYear = expirationYear.toString().slice(-2);

 
  const renderLogo = () => {
    if (type === 'Visa') {
      return (
        <span style={{ 
          fontStyle: 'italic', 
          fontWeight: '900', 
          fontSize: '21px', 
          letterSpacing: '-1px',
          fontFamily: 'sans-serif'
        }}>
          VISA
        </span>
      );
    } else {

      return (
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '40px', height: '24px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#eb001b', opacity: 0.9, position: 'absolute', left: 0 }} />
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#f79e1b', opacity: 0.9, position: 'absolute', right: 0 }} />
        </div>
      );
    }
  };

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '350px',
    height: '190px',
    borderRadius: '15px',
    padding: '22px',
    margin: '10px',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
  };

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', height: '30px', alignItems: 'center' }}>
        {renderLogo()}
      </div>

      <div style={{ fontSize: '26px', textAlign: 'left', paddingLeft: '5px', letterSpacing: '3px' }}>
        •••• •••• •••• {lastFourDigits}
      </div>

    
      <div style={{ fontSize: '14px', lineHeight: '1.4', textAlign: 'left' }}>
        <div style={{ display: 'flex', gap: '25px', fontWeight: '300' }}>
          <span>Expires {formattedMonth}/{formattedYear}</span>
          <span>{bank}</span>
        </div>
        <div style={{ marginTop: '3px', fontWeight: '400' }}>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;