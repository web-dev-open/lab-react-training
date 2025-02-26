export default function IdCard({ lastName, firstName, gender, height, birth, picture }) {

  const styleContainer = {
    display: 'flex',
    border: '1px solid #000',
    margin: '10px',
    padding: '0 10px'
  }

  const styleImg = {
    width: '200px',
    height: 'auto'
  }

  return (
    <div className='container-card' style={styleContainer}>
      <img src={picture} alt='img' style={styleImg} />
      <div>
        <p><strong>First name: </strong>{firstName}</p>
        <p><strong>Last name: </strong>{lastName}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Height: </strong>{height}</p>
        <p><strong>Birth: </strong>{birth.toDateString()}</p>
      </div>
    </div>
  )
}
