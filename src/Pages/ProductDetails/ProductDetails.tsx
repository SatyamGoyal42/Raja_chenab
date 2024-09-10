import React from 'react'
import Middle from '../../components/ProductDetailsPage/Middle/Middle'
import Cardsgroup from '../../components/ProductDetailsPage/Recommendation/Cardsgroup'
import Hero from '../../components/ProductDetailsPage/Hero/Hero'
import './ProductDetails.css'

const ProductDetails = () => {
  return (
    <div className='main'>
      <Hero/>
      <Middle/>
      <Cardsgroup/>
    </div>
  )
}

export default ProductDetails
