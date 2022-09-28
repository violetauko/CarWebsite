import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const pathName = location.pathname;
  return (
    <nav>
      <div className='navbar'>
      <div className='navbar-logo'>
        <h1>BUY<span className='span'>From</span>DUBAI</h1>
      </div>
      <div class="navbar-inner">
        {pathName!=='/'?<Link to="/#">Home</Link>:<a href="#">Home</a>}
        {pathName!=='/'?<Link to="/#about">About Us</Link>:<a href="#about">About Us</a>}
        {pathName!=='/'?<Link to="/#cars">Cars</Link>:<a href="#cars">Cars</a>}
        {pathName!=='/'?<Link to="/#contacts">Contact Us</Link>:<a href="#contacts">Contact Us</a>}
      </div>
      </div>
    </nav>
  )
}

export default Navbar