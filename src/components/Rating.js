export default function Rating({ children }) {

  const stars = (rating) => {

    const ratingRounded = Math.round(rating)

    if (ratingRounded < 1) {
      return '☆☆☆☆☆'
    } else if (ratingRounded === 1) {
      return '★☆☆☆☆'
    } else if (ratingRounded === 2) {
      return '★★☆☆☆'
    } else if (ratingRounded === 3) {
      return '★★★☆☆'
    } else if (ratingRounded === 4) {
      return '★★★★☆'
    } else if (ratingRounded === 5) {
      return '★★★★★'
    }
  }

  return (
    <p style={{fontSize: '30px'}}>{stars(children)}</p>
  )
}
