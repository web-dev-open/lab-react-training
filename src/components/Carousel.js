import { useEffect, useState } from "react"

export default function Carousel({ arrayPhotos }) {

  const [photoIndex, setPhotoIndex] = useState(0)

  const [photo, setPhoto] = useState(arrayPhotos[photoIndex])

  useEffect(() => {
    setPhoto(arrayPhotos[photoIndex]) 
  }, [photoIndex, arrayPhotos])
  

  const handlerRightBtn = () => {
    if (photoIndex < arrayPhotos.length - 1){
      setPhotoIndex(photoIndex + 1)
    }
  }

  const handlerLeftBtn = () => {
    if (photoIndex > 0){
      setPhotoIndex(photoIndex - 1)
    }
  }

  return (
    <div>
      <button onClick={handlerLeftBtn}>Left</button>
      <img src={photo} alt='foto' />
      <button onClick={handlerRightBtn}>Right</button>
    </div>
  )
}
