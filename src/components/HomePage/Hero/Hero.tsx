import React from 'react'
import './Hero.css'
interface HeroProps {
    imageSrc: string;
    altText?: string;
    heroText?: string;
  }
const Hero = ({ imageSrc, altText = "image", heroText } : HeroProps) => {
  return (
    
      <div className="heroContainer">
        <img className="heroImage" src={imageSrc} alt={altText} />
        {heroText && <div className="heroText">{heroText}</div>}
      </div>
  )
}

export default Hero
