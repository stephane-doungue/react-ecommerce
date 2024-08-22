import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react"

function FlashCard({productItems, addToCart}) {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }

    const SampleNextArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='next'>
              <i className='fa fa-long-arrow-alt-right'></i>
            </button>
          </div>
        )
      }
      const SamplePrevArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='prev'>
              <i className='fa fa-long-arrow-alt-left'></i>
            </button>
          </div>
        )
      }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
     
      }
  return (
    <div>
         <Slider {...settings}>
        {
            productItems.map(( productItems )=>{
        return(
        <div className='box'>
            <div className='product mtop'>
                <div className='img'>
                    <span className='discount'>{productItems.discount}% OFF</span>
                    <img src={productItems.cover} alt='' />
                    <div className='product-like'>
                        <label>{count}</label> <br/>
                        <img src='' alt='' className='icone' onClick={increment}/>
                    </div>
                </div>
                <div className='product-details'>
                    <h3>{productItems.name}</h3>
                    <div className='rate'>
                        <img src='' alt='' className='etoile'/>
                    </div>
                    <div className='price'>
                        <h4>{productItems.price} FCFA</h4>
                        <button onClick={()=>addToCart(productItems)}>
                            <img src='' className='panier'/></button>
                    </div>
                </div>
            </div>
        </div>
            )})
        }
        </Slider>
    </div>
  )
}

export default FlashCard