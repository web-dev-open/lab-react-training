import '../styles/creditCard.css'
import MasterCardImg from '../assets/images/master-card.svg'
import VisaImg from '../assets/images//visa.png'

export default function CreditCard({ 
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
 }) {
  
  const newNumber = (number) => {
    const newNumber = number.replace(/\d{12}/g, '●●●● ●●●● ●●●● ')
    return newNumber
  }

  return (
    <div className='credit-card' style={{ backgroundColor: bgColor, color: color }}>
      {type === 'Visa' ? <img src={VisaImg} alt='Visa' className='credit-card-logo' /> : <img src={MasterCardImg} alt='Master Card' className='credit-card-logo' />}
        <p className='credit-card-number'>{newNumber(number)}</p>
      <div className='credit-card-info'>
        <p>Expires {expirationMonth}/{expirationYear} <span style={{ marginLeft: '15px' }}>{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  )
}
