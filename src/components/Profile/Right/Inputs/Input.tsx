import React from 'react'
import './input.css'
import InputButton from './InputButton'
import InputAddress from './InputAddress'
const Input = () => {
  return (
    <div className='inputgrp'>
      <InputButton title='Name' description='Satyam Goyal'/>
      <InputButton title='Email' description='demo1@gmail.com'/>
      <InputButton title='Phone' description='+91 912267486'/>
      <InputAddress title='Address' description='20-C, Sector -18, New Delhi , 110042'/>
    </div>
  )
}

export default Input

