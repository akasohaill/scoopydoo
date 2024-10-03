import React from 'react'
import './styles.css'
import logo from '../../assets/logo.jpg'
import search_icon from '../../assets/search-icon.jpg'

function NavBar() {
  return (
    <div className='navbar'>
      <div className="heading">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <h1>Scooby.com</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder='Search here...' />
        <img src={search_icon} alt="search-icon" />
      </div>
    </div>
  )
}

export default NavBar
