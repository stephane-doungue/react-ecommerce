import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
          <ul className='"link f_flex capitalize"'>
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/">
                <li>page</li>
            </NavLink>
            <NavLink to="/">
                <li>User</li>
            </NavLink>
            <NavLink to="/">
                <li>Track</li>
            </NavLink>
          </ul>

            <button className='toggle' onClick="">
              </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar