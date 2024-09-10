import React from 'react'
import HeroImg from '../../assests/HomePage/Hero/Rectangle 11.svg'
import Hero from '../../components/HomePage/Hero/Hero'
import Categories from '../../components/HomePage/Categories/Categories'
const HomePage = () => {
  return (
    <div>
        <Hero
        imageSrc={HeroImg}
        altText="New Arrivals"
        heroText="Step into a world of traditional elegance with our exclusive collection of handloom products."
        />
        <Categories/>

    </div>
  )
}

export default HomePage
