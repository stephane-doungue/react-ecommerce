import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Search({cartItem}) {
  return (
    <div>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src="" alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <AiOutlineShoppingCart />
                <span>{cartItem.length == 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search