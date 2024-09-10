import React from 'react'
import img1 from '../../../assests/HomePage/Categories/1.jpg'
import img2 from '../../../assests/HomePage/Categories/2.jpg'
import img3 from '../../../assests/HomePage/Categories/3.jpg'
import img4 from '../../../assests/HomePage/Categories/4.jpg'
import './Categories.css'
import Catcard from './CatCard/Catcard'
const Categories = () => {
  return (
    <div className='categories'>
        <div className="container">
        <hr />
          <span className="heading">Categories</span>
        <hr />

        </div>
        <div className='catcardgrps'>
            <Catcard img={img1} title = "Royal Curtains"/>
            <Catcard img={img2} title = "Comfortable Blankets"/>
            <Catcard img={img3} title = "Cushion Covers"/>
            <Catcard img={img4} title = "Luxury Towels"/>
        </div>
    </div>
  )
}

export default Categories
