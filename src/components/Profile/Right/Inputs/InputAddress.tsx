import './InputAddress.css'
import React from 'react'

type InputProps = {
    title: string;
    description: string;
};
const InputAddress = ({title,description} : InputProps) => {
  return (
    <div className='address_button'>
      <p>{title}</p>
        <div className='desc'>
            {description}
        </div>
    </div>
  )
}

export default InputAddress
