import React, { useState } from 'react'
import "./App.css"
import Header from './composants1/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Page from './page/Page'
import Head from './composants1/Head'
import Main from './page/Main'
import Data from './composant2/flashCarts/Data'
import Cart from './composants1/cart/Cart'
import Sdata from './composant2/bodycomposant/Sdata'
import Footer from './composants1/footer/Footer'

function App() {

  const { productItems } = Data
  const { shopItems} = Sdata
  const [cartItem, setCartItem] = useState([])
  const addToCart = (product) =>{
    const productExit = cartItem.find((items) =>items.id ==product.id)
    if(productExit){
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }else{
      setCartItem([...cartItem, { ...product, qty: 1 }])
  
    }
  }
  const decreaseQty =(product) => {
    const productExit = cartItem.find((items) =>items.id ==product.id)
   if(productExit.qty ===1){
     setCartItem(cartItem.filter((item)=>item.id !== product.id))
   }else{
    setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  }
  }
  return (
    <div>
      <BrowserRouter>
      <Header cartItem = {cartItem}/>
        <Routes>
          <Route path="/" element={<Page productItems = {productItems} addToCart = {addToCart} shopItems={shopItems} />}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/cart" element={<Cart cartItem = {cartItem} addToCart = {addToCart} decreaseQty = {decreaseQty}/>}/>
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App