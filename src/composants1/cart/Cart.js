import React from 'react'
import "./style.css"

import {BsFillXCircleFill} from 'react-icons/bs'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'

function Cart({cartItem, addToCart, decreaseQty}) {
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <div>
        <section className='cart-items'>
          <div className='container d_flex'>
            <div className='cart-details'>
                {cartItem.length == 0 && <h1 className='no-items product'>No Items are add in Carth</h1>}
               
               {cartItem.map((item)=>{
                const productQty = item.price * item.qty
                return(
                    <div className='cart-list product d_flex'>
                        <div className='img'>
                            <img src={item.cover} alt=""/>
                        </div>
                        <div className='cart-details'>
                          <h3>{item.name}</h3>
                          <h3>{item.price} FCFA * {item.qty}
                          <span>${productQty}.00</span>
                          </h3>    
                        </div>
                        <div className='cart-items-function'>
                            <div className='removeCart'>
                                <button className='removeCart'>
                                <BsFillXCircleFill className='fa -solid fa-xmark' />
                            
                                </button>
                               </div>

                               <div className='cartControl d_flex'>
                                 <button className='incCart' onClick={()=>addToCart(item)}>
                                    <AiFillCaretLeft className='fa-solid fa-plus'/>
                                 </button>
                                 <button className='incCart' onClick={()=>decreaseQty(item)}>
                                    <AiFillCaretRight className='fa-solid fa-plus'/>
                                 </button>
                               </div>
                        </div>
                        <div className='cart-item-price'></div>
                </div>
                )
               })}
            </div>
            <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Cart