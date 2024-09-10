import React from 'react'
import './ButtonCard.css'

type CardProps = {
    title: string;
    desc: string;
    imgurl: string;
};

const ButtonCard = ({title,desc,imgurl} : CardProps) => {
  return (
    <div className='ButtonCard'>
        <img src={imgurl} alt="" />
        <div className='text'>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
      
    </div>
  )
}

export default ButtonCard
