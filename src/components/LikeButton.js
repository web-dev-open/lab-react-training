import React, { useState } from 'react'

export default function LikeButton() {

  const [likes, setLikes] = useState(0)

  const colors = ['purple','blue','green','yellow','orange','red']

  function getRandomColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return randomColor
  }

  function handleClick() {
    setLikes(likes + 1)
  }

  const styles = {
    backgroundColor:getRandomColor(), 
    color:'white', 
    padding:'10px', 
    borderRadius:'10px', 
    border:'none', 
    margin:'10px',
    cursor:'pointer'
  }


  return (
    <button style={styles} onClick={() =>handleClick()}>{likes} Likes</button>
  )
}
