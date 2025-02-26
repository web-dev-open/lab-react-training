export default function BoxColor({ r, g, b }) {

  const styles = {
    backgroundColor: `rgb(${r},${g},${b})`,
    border: '1px solid #000', 
    margin: '10px', 
    padding: '0 10px',
    textAlign: 'center',
    color: '#fff'
  }

  const rSex = r.toString(16).padStart(2, '0')
  const gSex = g.toString(16).padStart(2, '0')
  const bSex = b.toString(16).padStart(2, '0')

  return (
    <div className='Container' style={styles}>
      <p>rgb({r},{g},{b})</p>
      <p>#{rSex}{gSex}{bSex}</p>
    </div>
  )
}
