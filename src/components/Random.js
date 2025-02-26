export default function Random({ min, max }) {

  const getNumberText = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 1
    return `Random value between ${min} and ${max} => ${randomNumber}`
  }

  return (
    <p style={{border: '1px solid #000', margin: '10px', padding: '0 10px'}}>{getNumberText(min, max)}</p>
  )
}
