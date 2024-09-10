import React from 'react'
import './inputButton.css'
type InputProps = {
    title: string;
    description: string;
};
  
const InputButton = ({title,description} : InputProps) => {
  return (
    <div className='input_button'>
        <p>{title}</p>
        <div className='desc'>
            {description}
        </div>
    </div>
  )
}

export default InputButton
