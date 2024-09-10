import React from 'react'
import './ButtonsGrp.css'
import ButtonCard from './ButtonCard'
import img1 from '../../../../assests/Profile/1.svg'
import img2 from '../../../../assests/Profile/2.svg'
import img3 from '../../../../assests/Profile/3.svg'
import img4 from '../../../../assests/Profile/4.svg'

const ButtonsGrp = () => {
  return (
    <div className='ButtonGrp'>
      <ButtonCard title='Profile Details' desc='Change your Profile details' imgurl={img1}/>
      <ButtonCard title='Wishlist' desc='Your curated collections' imgurl={img2}/>
      <ButtonCard title='Orders' desc='Check your order status' imgurl={img3}/>
      <ButtonCard title='Logout' desc='Logout' imgurl={img4}/>
    </div>
  )
}

export default ButtonsGrp
