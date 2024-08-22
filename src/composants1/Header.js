import React from 'react'
import Head from './Head'
import "./Header.css"
import Navbar from './Navbar'
import Search from './Search'

function Header({cartItem}) {
  return (
    <div>
        <Head />
        <Search cartItem = {cartItem}/>
        <Navbar />
    </div>
  )
}

export default Header