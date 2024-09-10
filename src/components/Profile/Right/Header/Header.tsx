import React from 'react'
import './Header.css'
import pen from '../../../../assests/Profile/edit.svg'
const Header = () => {
  return (
    <div className='header'>
      <h1>Profile Details</h1>
      <hr/>
      <div className='dp_editbutton'>
        <div className='dp'></div>
        <div className='edit'>
            <img src={pen} alt="" />
            <p>Edit Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Header
