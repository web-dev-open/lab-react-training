import { useState } from 'react'

export default function ClickablePicture({ img, imgClicked }) {

  const [image, setImage] = useState(img)
  const handlerImg = () => {
    if (image === img) {
      setImage(imgClicked)
    } else {
      setImage(img)
    }
  }

  return (
    <img src={image} alt="img" onClick={handlerImg}/>
  )
}
