import React from 'react'
import Home from '../composant2/bodycomposant/Home'
import FlashDeals from '../composant2/flashCarts/FlashDeals'
import NewArrivals from '../composant2/newarrivals/NewArrivals'
import TopCate from '../composant2/top/TopCate'
import Discount from '../composant2/discount/Discount'
import Shop from '../composant2/shops/Shop'
import Annuel from '../composant2/annoc/Annuel'
import Testimonial from '../composant2/testimonial/Testimonial'

function Page({productItems, cartItem,addToCart, shopItems }) {
  return (
    <div>
      <Home  cartItem= {cartItem}/>
      <FlashDeals productItems = {productItems} addToCart = {addToCart}/>
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop productItems = {productItems} addToCart={addToCart} />
      <Annuel />
      <Testimonial />
    </div>
  )
}

export default Page