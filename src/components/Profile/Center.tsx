import React from 'react'
import Left from './Left/Left'
import Right from './Right/Right'
import './Center.css'

const Center = () => {
  return (
    <div className='center'>
      <Left/>
      <Right/>
    </div>
  )
}

export default Center
