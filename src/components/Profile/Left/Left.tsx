import React from 'react'
import './Left.css'
import HelloCard from './HelloCard'
import ButtonsGrp from './Buttons/ButtonsGrp'

const Left = () => {
  return (
    <div className='left'>
      <HelloCard/>
      <ButtonsGrp/>
    </div>
  )
}

export default Left
