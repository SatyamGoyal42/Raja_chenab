import React from 'react'
import "./CatCard.css"
type CatCardProps = {
    img: string
    title: string
}
const Catcard = ({img,title} : CatCardProps) => {
  return (
    <div className='CatCard'>
      <img src={img} alt="..." />
      <div className='text'>{title}</div>
    </div>
  )
}

export default Catcard
