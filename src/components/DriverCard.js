import Rating from './Rating'

export default function DriverCard({ name, rating, img, car }) {

  const styleContainer = {
    display: 'flex',
    margin: '10px',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: '#4977ff',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '850px'
  }

  const styleImg = {
    width: '200px',
    borderRadius: '50%'
  }

  return (
    <div style={styleContainer}>
      <img src={img} alt={name} style={styleImg} />
      <div style={{ marginLeft: '30px' }}>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}
